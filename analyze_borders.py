from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

# Let's collect pixels from the borders (outer 10 pixels margin)
border_pixels = []
for y in range(height):
    for x in range(width):
        if x < 10 or x > width - 11 or y < 10 or y > height - 11:
            border_pixels.append(rgba_img.getpixel((x, y)))

# Find the max and min values of R, G, B in the borders
min_r = min(p[0] for p in border_pixels)
max_r = max(p[0] for p in border_pixels)
min_g = min(p[1] for p in border_pixels)
max_g = max(p[1] for p in border_pixels)
min_b = min(p[2] for p in border_pixels)
max_b = max(p[2] for p in border_pixels)

print(f"Border R: {min_r}..{max_r}")
print(f"Border G: {min_g}..{max_g}")
print(f"Border B: {min_b}..{max_b}")
# Also look at max(R,G,B) brightness in borders
max_brightness = max(max(p[0], p[1], p[2]) for p in border_pixels)
print(f"Max brightness in borders: {max_brightness}")
