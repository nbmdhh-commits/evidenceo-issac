from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

transparent_pixels = 0
for y in range(height):
    for x in range(width):
        r, g, b, a = rgba_img.getpixel((x, y))
        if a < 255:
            transparent_pixels += 1

print(f"Total pixels: {width*height}, Transparent pixels (alpha < 255): {transparent_pixels}")
