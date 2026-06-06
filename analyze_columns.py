from PIL import Image
import math
from collections import deque

img = Image.open('logo.png')
rgba_img = img.convert("RGBA")
width, height = rgba_img.size

c_tl = rgba_img.getpixel((0, 0))[:3]
c_tr = rgba_img.getpixel((width - 1, 0))[:3]
c_bl = rgba_img.getpixel((0, height - 1))[:3]
c_br = rgba_img.getpixel((width - 1, height - 1))[:3]

def get_bg_color(x, y):
    u = x / (width - 1)
    v = y / (height - 1)
    r = (1 - u) * (1 - v) * c_tl[0] + u * (1 - v) * c_tr[0] + (1 - u) * v * c_bl[0] + u * v * c_br[0]
    g = (1 - u) * (1 - v) * c_tl[1] + u * (1 - v) * c_tr[1] + (1 - u) * v * c_bl[1] + u * v * c_br[1]
    b = (1 - u) * (1 - v) * c_tl[2] + u * (1 - v) * c_tr[2] + (1 - u) * v * c_bl[2] + u * v * c_br[2]
    return (r, g, b)

tolerance = 50
visited = set()
queue = deque()
for start in [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]:
    queue.append(start)
    visited.add(start)
    
while queue:
    cx, cy = queue.popleft()
    for dx, dy in [(-1,0), (1,0), (0,-1), (0,1), (-1,-1), (1,-1), (-1,1), (1,1)]:
        nx, ny = cx + dx, cy + dy
        if 0 <= nx < width and 0 <= ny < height:
            if (nx, ny) not in visited:
                r, g, b, a = rgba_img.getpixel((nx, ny))
                bg_r, bg_g, bg_b = get_bg_color(nx, ny)
                dist = math.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
                if dist < tolerance:
                    visited.add((nx, ny))
                    queue.append((nx, ny))

# Count unvisited pixels per column and per row
col_counts = [0] * width
row_counts = [0] * height
for y in range(height):
    for x in range(width):
        if (x, y) not in visited:
            col_counts[x] += 1
            row_counts[y] += 1

print("Unvisited pixels per column (first 20):", col_counts[:20])
print("Unvisited pixels per column (last 20):", col_counts[-20:])
print("Unvisited pixels per row (first 20):", row_counts[:20])
print("Unvisited pixels per row (last 20):", row_counts[-20:])
