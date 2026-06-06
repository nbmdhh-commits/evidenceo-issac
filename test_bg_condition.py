from PIL import Image

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

bg_count = 0
fg_pixels = []

for y in range(height):
    for x in range(width):
        r, g, b, a = rgba_img.getpixel((x, y))
        # Condition to identify background
        is_bg = (r < 35) and (g < 25) and (b < 120)
        if is_bg:
            bg_count += 1
        else:
            fg_pixels.append((x, y, (r, g, b, a)))

print(f"Total: {width*height}, BG: {bg_count} ({bg_count/(width*height)*100:.1f}%), FG: {len(fg_pixels)}")
if fg_pixels:
    xs = [p[0] for p in fg_pixels]
    ys = [p[1] for p in fg_pixels]
    print(f"Bounding box: x={min(xs)}..{max(xs)}, y={min(ys)}..{max(ys)}")
    print("Sample FG pixels near bounding box edges:")
    # print top-most, bottom-most, left-most, right-most
    sorted_y = sorted(fg_pixels, key=lambda p: p[1])
    sorted_x = sorted(fg_pixels, key=lambda p: p[0])
    print("Top-most:", sorted_y[:5])
    print("Bottom-most:", sorted_y[-5:])
    print("Left-most:", sorted_x[:5])
    print("Right-most:", sorted_x[-5:])
