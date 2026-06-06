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

for threshold in [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]:
    transparent_count = 0
    non_transparent_pixels = []
    
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
            
            if dist < threshold:
                transparent_count += 1
            else:
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
        
    print(f"Thresh {threshold:3d}: transparent={transparent_count:5d} ({transparent_count/(width*height)*100:4.1f}%), bbox={bbox}, size={bbox_w}x{bbox_h}")
