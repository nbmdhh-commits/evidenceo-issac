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

for tolerance in range(70, 160, 10):
    non_transparent_pixels = []
    for y in range(height):
        for x in range(width):
            r, g, b, a = rgba_img.getpixel((x, y))
            bg_r, bg_g, bg_b = get_bg_color(x, y)
            dist = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
            is_bg = (dist < tolerance) or (max(r, g, b) < 60)
            if not is_bg:
                non_transparent_pixels.append((x, y))
                
    if non_transparent_pixels:
        xs = [p[0] for p in non_transparent_pixels]
        ys = [p[1] for p in non_transparent_pixels]
        bbox = (min(xs), min(ys), max(xs), max(ys))
        bbox_w = bbox[2] - bbox[0] + 1
        bbox_h = bbox[3] - bbox[1] + 1
    else:
        bbox = None
        bbox_w, bbox_h = 0, 0
        
    print(f"Tolerance {tolerance:3d}: bbox={bbox}, size={bbox_w}x{bbox_h}, fg_pixels={len(non_transparent_pixels)}")
