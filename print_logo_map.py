from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

# Let's resize it to 80x40 to print a map
small_img = rgba_img.resize((80, 40), Image.Resampling.LANCZOS)
for y in range(40):
    line = ""
    for x in range(80):
        r, g, b, a = small_img.getpixel((x, y))
        # Let's check brightness
        v = max(r, g, b)
        if v > 130:
            line += "#"
        else:
            line += " "
    print(line)
