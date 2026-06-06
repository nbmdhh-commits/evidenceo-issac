from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

# Count pixels by max(R,G,B) brightness
brightness_counts = [0] * 256
for y in range(height):
    for x in range(width):
        r, g, b, a = rgba_img.getpixel((x, y))
        v = max(r, g, b)
        brightness_counts[v] += 1

# Print the brightness distribution in steps of 20
for i in range(0, 256, 20):
    subset = sum(brightness_counts[i:i+20])
    print(f"Brightness {i}-{i+19}: {subset} pixels")
