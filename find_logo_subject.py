from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

# Let's see what pixels look like.
# Let's count how many pixels are dark (e.g. brightness < 80) vs bright.
dark_count = 0
bright_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, a = rgba_img.getpixel((x, y))
        brightness = max(r, g, b)
        if brightness >= 80:
            bright_pixels.append((x, y, (r, g, b, a)))
        else:
            dark_count += 1

print(f"Total: {width*height}, Dark (brightness < 80): {dark_count}, Bright: {len(bright_pixels)}")
if bright_pixels:
    xs = [p[0] for p in bright_pixels]
    ys = [p[1] for p in bright_pixels]
    print(f"Bounding box of bright pixels: x={min(xs)}..{max(xs)}, y={min(ys)}..{max(ys)}")
    # Print a few sample bright pixels
    print("Sample bright pixels:")
    for p in bright_pixels[:10]:
        print(p)
