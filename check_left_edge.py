from PIL import Image
import math

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

# Corners
c_tl = rgba_img.getpixel((0, 0))[:3]
c_tr = rgba_img.getpixel((width - 1, 0))[:3]
c_bl = rgba_img.getpixel((0, height - 1))[:3]
c_br = rgba_img.getpixel((width - 1, height - 1))[:3]

def get_bg_color(x, y):
    u = x / (width - 1) if width > 1 else 0
    v = y / (height - 1) if height > 1 else 0
    r = (1 - u) * (1 - v) * c_tl[0] + u * (1 - v) * c_tr[0] + (1 - u) * v * c_bl[0] + u * v * c_br[0]
    g = (1 - u) * (1 - v) * c_tl[1] + u * (1 - v) * c_tr[1] + (1 - u) * v * c_bl[1] + u * v * c_br[1]
    b = (1 - u) * (1 - v) * c_tl[2] + u * (1 - v) * c_tr[2] + (1 - u) * v * c_bl[2] + u * v * c_br[2]
    return (r, g, b)

tolerance = 65
print("Left edge (x=0) non-bg pixels:")
for y in range(height):
    r, g, b, a = rgba_img.getpixel((0, y))
    bg_r, bg_g, bg_b = get_bg_color(0, y)
    dist = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
    is_bg = (dist < tolerance) or (max(r, g, b) < 60)
    if not is_bg:
        print(f"y={y:3d}: color=({r},{g},{b}), bg=({bg_r:.1f},{bg_g:.1f},{bg_b:.1f}), dist={dist:.1f}, max_val={max(r,g,b)}")
