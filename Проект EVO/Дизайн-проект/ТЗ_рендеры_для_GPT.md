# ТЗ на фотореалистичные рендеры · квартира EVO №278

## Как пользоваться
1. Загрузите в чат с GPT этот файл и картинки из папки `Проект EVO/Дизайн-проект/r/`. Это наши рендеры из Blender. Размеры и расстановка в них точные, их берём за основу композиции.
2. Для стиля санузла приложите скриншоты из папки `Проект EVO/Визуализацияы ремонта от застройщика/`.
3. Просите по одному кадру. Первым сообщением отправьте блок «Общие правила», затем промпт кадра вместе с его картинкой.
4. Если GPT что-то сдвинул или добавил лишнее, напишите: «Keep the layout exactly as in the reference image, only change …».

---

## Общие правила (отправить первым)

```
You are rendering a real apartment for its owner. I will send reference renders made in Blender.
Their geometry is exact: room proportions, furniture positions, sizes, door and window placement.
Your job: turn each reference into a photorealistic interior photograph.

RULES
- Keep the camera angle, framing and every object position from the reference image.
- Do not add, remove or resize furniture, doors, windows, sockets or appliances.
- Do not add decor that is not listed (no plants on the floor, no wall art, no extra lamps) unless the prompt says so.
- Realistic materials: fabric weave, wood grain, matte paint, quartz stone, slight imperfections.
- Lighting: natural daylight from the windows, soft shadows, neutral-warm white balance (about 5000 K), no HDR look, no glow halos.
- Lens: interior photography, 20–24 mm full-frame equivalent, vertical lines straight.
- Output: 3:2 landscape, high resolution.

APARTMENT
- Russian new-build, 2026. Studio-like one-bedroom, 33.6 m². Ceiling about 2.55 m, white matte stretch ceiling, no cornices.
- Floor everywhere except the bathroom: laminate, natural oak, medium tone (#B08A64), planks 1200×190.
- Walls: wallpaper in light warm greige (#DCD3C6), matte. Skirting black matte, 60 mm.
- Sockets and switches: flat square, black matte (#1F1D1B).
- Interior doors: white flush doors with black handles.

PALETTE (accents)
- Terracotta #B5502E — main accent: curtains in the room, small textiles.
- Mustard #C99A2E — second accent, small doses.
- Olive / sage #7A7B55 — sofa, chair seats.
- Black #1F1D1B — graphic lines: handles, taps, table legs, frames.
```

---

## 1. Комната · общий вид · `r/room.jpg`
```
Photorealistic version of the reference image r/room.jpg. Living room 2.8 × 4.6 m, one window in the far wall.
- Window: white PVC, sill radiator below. Curtains: terracotta (#B5502E) linen-look, floor length, on rings, both sides of the window.
- Right wall: sofa-bed 2200 mm long, olive velvet (#7A7B55), low arms, three cushions: terracotta, cream, mustard. Square side tables 400×400 at both ends.
- Near the window, right: mustard (#C99A2E) armchair with a slim floor lamp.
- Left wall (near the window): desk 1100×500 in light oak with black legs, two light oak shelves above it, black chair.
- Left wall (middle): 43-inch TV wall-mounted flat, centre at 1.2 m; below it a floating TV unit 1500×270, matte warm white with an oak top, bottom edge 300 mm above the floor; small black soundbar on it. No visible cables.
- Rug: cream with a terracotta centre field.
```

## 2. Комната · вид с дивана · `r/sofa.jpg`
```
Photorealistic version of r/sofa.jpg. View from the sofa to the TV wall.
- 43-inch TV, flat to the wall, centre 1.2 m. No cables on the wall.
- Floating TV unit 1500×270×350: matte warm white fronts, oak top, hangs 300 mm above the floor. Black soundbar on top.
- Right: desk 1100×500 light oak with black legs, two oak shelves above, a terracotta poster frame on the wall.
- Left: open door to the hallway.
```

## 3. Кухня · гарнитур · `r/kitchen.jpg`
```
Photorealistic version of r/kitchen.jpg. Kitchen 2.87 × 3.7 m, window at the end.
- Base cabinets: matte warm white (#ECE6DA), handleless with black Gola profile, black plinth.
- Wall cabinets up to the ceiling: natural walnut veneer (#8A6446), vertical grain, two rows, bottom at 1.55 m.
- Worktop and splashback: warm white quartz (#F2EEE6), 40 mm edge.
- Black induction hob; angled black glass hood (Weissgauff Zibal style) with a boxed duct to the ceiling, no cabinet above the hob.
- Built-in dishwasher next to the sink. Round black undermount sink Ø450 near the corner, black matte tap.
- LED strip under the wall cabinets, warm 3000 K.
- Near the window: low TV console 900×400 white, 37-inch TV on a swivel arm above it.
- Curtains in the kitchen: natural linen, light beige.
- Dining table 1100×750 light oak with black legs, four chairs with olive seats.
```

## 4. Кухня · зона у окна · `r/kitchen2.jpg`
```
Photorealistic version of r/kitchen2.jpg. View from the armchair-bed to the window corner.
- 37-inch TV on a black swivel wall arm, above a white console 900×400×500.
- Left: end of the kitchen run, warm white base, walnut wall cabinets, black hood.
- Linen curtains, white PVC window, radiator under the sill.
- In the foreground edge: armchair-bed in olive fabric with a terracotta throw.
```

## 5. Санузел · общий вид · `r/bath.jpg`
```
Photorealistic version of r/bath.jpg. Bathroom 1.78 × 2.2 m, view from above the bathtub corner.
- Floor and walls: tiles in warm beige porcelain stone and white ceramic, as in the developer's renders I attached.
- Wall-hung white toilet on a tiled box 1100 mm high with a shelf on top; black flush plate.
- Front-loading white washing machine in the corner by the door.
- Floating vanity 450×350, matte white, bottom 350 mm above the floor, white ceramic sink on top, black tap.
- Mirror 1000×800, landscape, frameless, with a thin backlit LED outline; bottom at 1.15 m, over the washing machine and the vanity.
- Black ladder towel radiator on the wall with the door, terracotta towels.
- Acrylic bathtub 1650×700 with a glass screen (screen hidden in this view).
```

## 6. Санузел · стена с зеркалом · `r/bath2.jpg`
```
Photorealistic version of r/bath2.jpg. Straight view to the mirror wall from eye level.
- Mirror 1000×800 landscape, thin LED outline, bottom 1.15 m; spans from near the left wall to 44 mm before an invisible tiled access hatch on the right.
- Under the mirror: washing machine (left) and floating white vanity 450 with a sink and black tap (right).
- Left wall: black ladder towel radiator with a terracotta towel.
- Tiles: warm beige porcelain and white, like the developer's renders.
```

## 7. Прихожая · шкаф · `r/hall2.jpg`
```
Photorealistic version of r/hall2.jpg. Built-in hallway wardrobe 1490 wide, 450 deep, floor to ceiling, matte warm white, black plinth 100 mm.
- Left: narrow cleaning closet 450 with one hinged matte white door and a black vertical bar handle.
- Right: a two-door wardrobe 1040 wide, two hinged doors of 520 each, BOTH full-height mirrors, black vertical bar handles next to the meeting edges.
- Top: a row of three hinged matte white mezzanine doors (2200–2650 mm) aligned with the doors below.
- No open niche, no seat. Through the opening on the left: the living room with the olive sofa.
```

## 8. Прихожая · шкаф без дверей · `r/hallin.jpg`
```
Photorealistic cutaway of the same wardrobe with all doors removed (r/hallin.jpg), to show the interior.
- Left (cleaning closet 450): rail with mop and broom at 1.5 m, two shelves at 1.7 and 1.95 m with cleaning products, a bucket on the floor.
- Two-door part: a hanging zone 708 wide and a narrow shelf column 300 wide at the right end. Hanging zone: clothes rail at 1.82 m with coats and jackets on slim hangers; a shelf above it at 1.9 m with hats and a storage box; a shelf at 0.45 m with shoes and boots; on the floor under it a round mustard (#C99A2E) pouf Ø350 on small wheels and a stick vacuum on its dock. A grey electrical panel box (RCD) on the back wall behind the coats at 1.5–1.8 m.
- Shelf column 300: five shelves at 0.45 / 0.8 / 1.15 / 1.5 / 1.85 m with boxes, folded scarves, bags.
- Mezzanine (2.2–2.65 m) above the right door: a white Wi-Fi router with antennas and a white socket on the side panel.
- Interior panels matte warm white, no back panel (painted wall visible).
```

## 9. Прихожая · от входа · `r/hall.jpg`
```
Photorealistic version of r/hall.jpg. View from the entrance door along the corridor.
- Right: the built-in wardrobe (mirror door, black handles).
- Ahead: openings to the kitchen (dining table with olive chairs visible) and to the living room.
- Laminate in natural oak continues through all rooms.
```

## 10. Гардеробная · `r/wardrobe.jpg`
```
Photorealistic version of r/wardrobe.jpg. Walk-in closet 1.65 × 0.9 m with folding doors open.
- Open metal mesh system in graphite: top rail at 2.4 m, vertical uprights, wire shelves and hanging rails.
- Left: a column of wire shelves and three pull-out wire baskets.
- Back wall: two hanging sections with clothes in muted colours plus a few terracotta and olive pieces.
- Warm LED strip in an aluminium profile under the top shelf.
- Folding doors: black aluminium frames with satin glass.
```

## 11. Санузел · этажерка · `r/bath3.jpg`
```
Photorealistic version of r/bath3.jpg. Bathroom view towards the wall with the wall-hung toilet.
- Free-standing étagère 350 wide, 250 deep, 1800 high, standing against the wall between the toilet and the corner: thin black metal frame, six light oak (or bamboo) shelves.
- On the shelves: rolled terracotta and cream towels, a woven basket, folded towels, a white ceramic jar on top.
- Wall-hung white toilet on the tiled box with a shelf on top; floating white vanity and the backlit mirror on the left.
- Tiles: warm beige porcelain and white, like the developer's renders.
```
