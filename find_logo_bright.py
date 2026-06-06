from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

high_brightness_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, a = rgba_img.getpixel((x, y))
        v = max(r, g, b)
        if v >= 220:
            high_brightness_pixels.append((x, y, (r, g, b, a)))

print(f"Number of pixels with brightness >= 220: {len(high_brightness_pixels)}")
if high_brightness_pixels:
    xs = [p[0] for p in high_brightness_pixels]
    ys = [p[1] for p in high_brightness_pixels]
    print(f"Bounding box: x={min(xs)}..{max(xs)}, y={min(ys)}..{max(ys)}")
    print("Sample very bright pixels:")
    for p in high_brightness_pixels[:20]:
        print(p)
