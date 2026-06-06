import shutil
import os
from PIL import Image
import math

# Backup original logo
if not os.path.exists("logo_orig.png"):
    shutil.copyfile("logo.png", "logo_orig.png")
    print("Backed up logo.png to logo_orig.png")

img = Image.open('logo_orig.png')
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

# Create output image
out_img = Image.new("RGBA", (width, height))
non_transparent_pixels = []

# Using a tolerance of 85, which keys out the dark gradient cleanly
tolerance = 85

for y in range(height):
    for x in range(width):
        r, g, b, a = rgba_img.getpixel((x, y))
        bg_r, bg_g, bg_b = get_bg_color(x, y)
        dist = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
        
        # Determine if it's background
        is_bg = (dist < tolerance) or (max(r, g, b) < 60)
        
        if is_bg:
            out_img.putpixel((x, y), (0, 0, 0, 0))
        else:
            # Preserve original pixel but make sure it has full alpha or matches original alpha
            out_img.putpixel((x, y), (r, g, b, a))
            non_transparent_pixels.append((x, y))

if non_transparent_pixels:
    xs = [p[0] for p in non_transparent_pixels]
    ys = [p[1] for p in non_transparent_pixels]
    bbox = (min(xs), min(ys), max(xs), max(ys))
    cropped_img = out_img.crop(bbox)
    cropped_img.save("logo.png")
    print(f"Processed logo.png saved. Original size: {width}x{height}, New cropped size: {cropped_img.size}, bbox: {bbox}")
else:
    print("Error: No foreground pixels detected!")
