from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

def print_corner(name, x_range, y_range):
    print(f"\n--- Corner: {name} ---")
    for y in y_range:
        row_str = []
        for x in x_range:
            r, g, b, a = rgba_img.getpixel((x, y))
            row_str.append(f"({r},{g},{b})")
        print(f"y={y:3d}: " + " ".join(row_str))

print_corner("Top-Left", range(10), range(10))
print_corner("Top-Right", range(width - 10, width), range(10))
print_corner("Bottom-Left", range(10), range(height - 10, height))
print_corner("Bottom-Right", range(width - 10, width), range(height - 10, height))
