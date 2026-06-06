from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

for thresh in [30, 40, 50, 60, 70, 80, 90, 100]:
    fg_pixels = []
    for y in range(height):
        for x in range(width):
            r, g, b, a = rgba_img.getpixel((x, y))
            l = 0.299 * r + 0.587 * g + 0.114 * b
            if l >= thresh:
                fg_pixels.append((x, y))
                
    if fg_pixels:
        xs = [p[0] for p in fg_pixels]
        ys = [p[1] for p in fg_pixels]
        bbox = (min(xs), min(ys), max(xs), max(ys))
        bbox_w = bbox[2] - bbox[0] + 1
        bbox_h = bbox[3] - bbox[1] + 1
    else:
        bbox = None
        bbox_w, bbox_h = 0, 0
        
    print(f"Luminance Thresh {thresh}: fg={len(fg_pixels):5d} ({len(fg_pixels)/(width*height)*100:4.1f}%), bbox={bbox}, size={bbox_w}x{bbox_h}")
