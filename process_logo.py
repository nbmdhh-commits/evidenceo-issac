from PIL import Image

img = Image.open('logo.png')
print("Format:", img.format, "Size:", img.size, "Mode:", img.mode)

# Inspect corner pixels
rgba_img = img.convert("RGBA")
width, height = rgba_img.size
corners = [
    rgba_img.getpixel((0, 0)),
    rgba_img.getpixel((width - 1, 0)),
    rgba_img.getpixel((0, height - 1)),
    rgba_img.getpixel((width - 1, height - 1))
]
print("Corners:", corners)
