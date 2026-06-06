from PIL import Image
import math

# Load the logo
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

# Create a new image for the output
out_img = Image.new("RGBA", (width, height))
non_transparent_pixels = []

tolerance = 65  # Distance threshold from bilinear background

for y in range(height):
    for x in range(width):
        r, g, b, a = rgba_img.getpixel((x, y))
        bg_r, bg_g, bg_b = get_bg_color(x, y)
        dist = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
        
        # A pixel is background if it's close to the background gradient
        # OR if it's very dark (max(r,g,b) < 60)
        is_bg = (dist < tolerance) or (max(r, g, b) < 60)
        
        if is_bg:
            out_img.putpixel((x, y), (0, 0, 0, 0))
        else:
            # Let's keep the original pixel.
            # We can also clean up the color if it contains some background blend,
            # but preserving the logo exactly as provided is requested.
            out_img.putpixel((x, y), (r, g, b, a))
            non_transparent_pixels.append((x, y))

if non_transparent_pixels:
    xs = [p[0] for p in non_transparent_pixels]
    ys = [p[1] for p in non_transparent_pixels]
    bbox = (min(xs), min(ys), max(xs), max(ys))
    # Crop the image tightly to its bounding box
    cropped_img = out_img.crop(bbox)
    cropped_img.save("logo_processed.png")
    print(f"Crop bbox: {bbox}")
    print(f"Cropped image size: {cropped_img.size}")
else:
    print("Error: No foreground pixels found!")
