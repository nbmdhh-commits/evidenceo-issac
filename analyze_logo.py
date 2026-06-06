from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

# Let's count pixel values
colors = {}
for y in range(height):
    for x in range(width):
        p = rgba_img.getpixel((x, y))
        colors[p] = colors.get(p, 0) + 1

# Sort by frequency
sorted_colors = sorted(colors.items(), key=lambda x: x[1], reverse=True)
print("Top 20 colors:")
for color, count in sorted_colors[:20]:
    print(f"Color: {color}, Count: {count}")
