from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

# Print pixels near the right edge that have high luminance
print("Pixels near the right edge (x >= width - 10) with luminance >= 100:")
for y in range(height):
    for x in range(width - 10, width):
        r, g, b, a = rgba_img.getpixel((x, y))
        l = 0.299 * r + 0.587 * g + 0.114 * b
        if l >= 100:
            print(f"({x}, {y}): color=({r},{g},{b}), luminance={l:.1f}")
