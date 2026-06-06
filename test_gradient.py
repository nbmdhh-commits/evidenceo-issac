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

print("tl:", c_tl)
print("tr:", c_tr)
print("bl:", c_bl)
print("br:", c_br)

distances = []
for y in range(height):
    for x in range(width):
        r, g, b, a = rgba_img.getpixel((x, y))
        u = x / (width - 1)
        v = y / (height - 1)
        
        # Bilinear interpolation
        bg_r = (1 - u) * (1 - v) * c_tl[0] + u * (1 - v) * c_tr[0] + (1 - u) * v * c_bl[0] + u * v * c_br[0]
        bg_g = (1 - u) * (1 - v) * c_tl[1] + u * (1 - v) * c_tr[1] + (1 - u) * v * c_bl[1] + u * v * c_br[1]
        bg_b = (1 - u) * (1 - v) * c_tl[2] + u * (1 - v) * c_tr[2] + (1 - u) * v * c_bl[2] + u * v * c_br[2]
        
        dist = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
        
        # If we are on the border (outer 2 pixels)
        if x < 2 or x > width - 3 or y < 2 or y > height - 3:
            distances.append(dist)

print(f"Border distances to interpolated BG: min={min(distances):.2f}, max={max(distances):.2f}, avg={sum(distances)/len(distances):.2f}")
