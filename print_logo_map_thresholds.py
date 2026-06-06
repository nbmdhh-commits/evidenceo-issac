from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size
small_img = rgba_img.resize((80, 40), Image.Resampling.LANCZOS)

for thresh in [150, 180, 200, 220, 240]:
    print(f"\n--- Threshold {thresh} ---")
    for y in range(40):
        line = ""
        for x in range(80):
            r, g, b, a = small_img.getpixel((x, y))
            v = max(r, g, b)
            if v > thresh:
                line += "#"
            else:
                line += " "
        print(line)
