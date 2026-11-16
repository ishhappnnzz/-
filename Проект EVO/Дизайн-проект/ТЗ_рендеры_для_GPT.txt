# ТЗ на фотореалистичные рендеры · квартира EVO №278 · итоговая версия

## Как пользоваться
1. Загрузите в чат с GPT этот файл и картинки из папки `r/` архива. Это рендеры из Blender в итоговых цветах. Размеры и расстановка в них точные, они основа композиции.
2. Для плитки санузла приложите скриншоты из папки `Визуализации застройщика` архива.
3. Просите по одному кадру. Первым сообщением отправьте блок «Общие правила», затем промпт кадра вместе с его картинкой.
4. Если GPT что-то сдвинул или добавил лишнее, напишите: «Keep the layout exactly as in the reference image, only change …».

---

## Общие правила (отправить первым)

```
You are rendering a real apartment for its owner. I will send reference renders made in Blender.
Their geometry and colours are exact: room proportions, furniture positions and sizes, door and window placement, finishes.
Your job: turn each reference into a photorealistic interior photograph.

RULES
- Keep the camera angle, framing and every object position from the reference image.
- Do not add, remove or resize furniture, doors, windows, sockets or appliances.
- Do not add decor that is not listed (no plants on the floor, no wall art, no extra lamps) unless the prompt says so.
- Realistic materials: fabric weave, wood grain, matte laminated board, stone, slight imperfections.
- Lighting: natural daylight from the windows, soft shadows, neutral-warm white balance (about 5000 K), no HDR look, no glow halos.
- Lens: interior photography, 20–24 mm full-frame equivalent, vertical lines straight.
- Output: 3:2 landscape, high resolution.

APARTMENT FINISHES
- Russian new-build, 2026. One-bedroom, 33.6 m². Ceiling about 2.55 m, white matte stretch ceiling, no cornices.
- Walls: non-woven wallpaper, very light warm ivory with a fine linen texture (about #EFEAE0), matte. Not grey, not beige.
- Floor everywhere except the bathroom: laminate, natural oak, medium warm tone (#B08A64), long planks.
- Skirting: black matte, 60 mm. Sockets and switches: flat square, black matte.
- Interior doors: flush, very light grey-white, black handles and hinges.

BUILT-IN FURNITURE (laminated chipboard, matte)
- White: plain neutral white (#F3F2EE) — all carcasses, kitchen base fronts, hallway wardrobe.
- Wood: light warm Sonoma oak (#C7A67D), straight grain — kitchen wall cabinets, hood box, side panel and mezzanine over the fridge.
- Plinths: black matte. Handles and Gola profile: black matte.
- Kitchen worktop and splashback: light grey stone (#E3E1DC).

ACCENTS
- Terracotta #B5502E — curtains in the room, small textiles.
- Mustard #C99A2E — small doses.
- Olive / sage #7A7B55 — sofa, chair seats.
- Black — graphic lines: handles, taps, table legs, frames.
```

---

## 1. Комната · общий вид · `r/room.jpg`
```
Photorealistic version of r/room.jpg. Living room 2.8 × 4.6 m, one window in the far wall.
- Window: white PVC, radiator under the sill. Curtains: terracotta (#B5502E) linen-look, floor length, on rings, both sides of the window.
- Right wall: sofa-bed 2200 mm long, olive velvet (#7A7B55), three cushions: terracotta, cream, mustard. Square side tables 400×400 at both ends.
- Near the window, right: mustard armchair with a slim black floor lamp.
- Left wall near the window: desk 1100×500 in light oak with black legs, two light oak shelves above it, black chair.
- Left wall, middle: 43-inch TV flat on the wall, centre at 1.2 m; below it a floating white TV unit 1500 wide, 270 deep, light oak top, bottom 300 mm above the floor; small black soundbar. No visible cables.
- Rug: cream with a terracotta centre field.
```

## 2. Комната · вид с дивана · `r/sofa.jpg`
```
Photorealistic version of r/sofa.jpg. View from the sofa to the TV wall.
- 43-inch TV flat to the wall, centre 1.2 m. No cables on the wall.
- Floating TV unit 1500×350×270: white handleless flap fronts left and right, open middle niche with a shelf and a set-top box, light oak top, 300 mm above the floor. Black soundbar on top.
- Right: desk 1100×500 light oak with black legs, two oak shelves above, a terracotta poster on the wall.
- Left: open doorway to the hallway.
```

## 3. Кухня · гарнитур · `r/kitchen.jpg`
```
Photorealistic version of r/kitchen.jpg. Kitchen 2.87 × 3.7 m, window at the end.
- Base cabinets: plain matte white, handleless with black Gola profile, black plinth.
- Wall cabinets up to the ceiling: light Sonoma oak, vertical grain, two rows, bottom at 1.55 m.
- Angled black glass hood (Weissgauff Zibal style); above it a closed box up to the ceiling in the same Sonoma oak, flush with the wall cabinets. No cabinet above the hob.
- Worktop and splashback: light grey stone, 40 mm edge. Black induction hob, built-in oven below.
- Built-in dishwasher next to the sink. Round dark undermount sink Ø450 near the corner, black matte tap.
- LED strip under the wall cabinets, warm 3000 K.
- Near the window: low white TV console 900×400, small TV on a swivel arm above it.
- Kitchen curtains: natural linen, light beige.
- Freestanding white fridge 600 wide by the kitchen door, in a niche with a Sonoma oak side panel and a Sonoma oak mezzanine cabinet above it.
- Dining table 1100×750 light oak with black legs, four chairs with olive seats.
```

## 4. Кухня · зона у окна · `r/kitchen2.jpg`
```
Photorealistic version of r/kitchen2.jpg. View from the armchair-bed to the window corner.
- Small TV on a black swivel wall arm above a white console 900×400×500.
- Left: end of the kitchen run — white base, light Sonoma oak wall cabinets and hood box, black hood.
- Linen curtains, white PVC window, radiator under the sill.
- Foreground edge: armchair-bed in olive fabric with a terracotta throw.
```

## 5. Санузел · общий вид · `r/bath.jpg`
```
Photorealistic version of r/bath.jpg. Bathroom 1.78 × 2.2 m, view from above the bathtub corner.
- Floor and walls: tiles in warm beige porcelain stone and white ceramic, as in the developer's renders I attached.
- Wall-hung white toilet on a tiled box 1100 mm high with a shelf on top; black flush plate.
- Front-loading white washing machine in the corner by the door.
- Floating vanity 450×350, matte white, bottom 350 mm above the floor, white ceramic sink on top, black tap.
- Mirror 1000×800, landscape, frameless, thin backlit LED outline; bottom at 1.15 m, over the washing machine and the vanity.
- Black ladder towel radiator on the wall with the door, terracotta towels.
- Black metal étagère with light oak shelves next to the toilet.
- Acrylic bathtub 1650×700 (glass screen hidden in this view).
```

## 6. Санузел · стена с зеркалом · `r/bath2.jpg`
```
Photorealistic version of r/bath2.jpg. Straight view to the mirror wall from eye level.
- Mirror 1000×800 landscape, thin LED outline, bottom 1.15 m; ends 44 mm before an invisible tiled access hatch on the right.
- Under the mirror: washing machine (left) and floating white vanity 450 with a sink and black tap (right).
- Left wall: black ladder towel radiator with a terracotta towel.
- Tiles: warm beige porcelain and white, like the developer's renders.
```

## 7. Санузел · этажерка · `r/bath3.jpg`
```
Photorealistic version of r/bath3.jpg. View towards the wall with the wall-hung toilet.
- Free-standing étagère 350 × 250 × 1800 between the toilet and the corner: thin black metal frame, six light oak shelves.
- On the shelves: rolled terracotta and cream towels, a woven basket, folded towels, a white ceramic jar on top.
- Wall-hung white toilet on the tiled box with a shelf on top; floating white vanity and the backlit mirror on the left.
- Tiles: warm beige porcelain and white, like the developer's renders.
```

## 8. Прихожая · шкаф · `r/hall2.jpg`
```
Photorealistic version of r/hall2.jpg. Built-in hallway wardrobe 1490 wide, 450 deep, floor to ceiling, plain matte white, black plinth 100 mm.
- Left: cleaning closet 450 with one white hinged door and a black vertical bar handle.
- Right: two-door wardrobe 1040 wide, two hinged doors of 520, BOTH full-height mirrors, black vertical bar handles at the meeting edges.
- Top: three white hinged mezzanine doors (2.2 m up to the ceiling) aligned with the doors below.
- No open niche, no seat. Through the opening on the left: the living room with the olive sofa.
```

## 9. Прихожая · шкаф без дверей · `r/hallin.jpg`
```
Photorealistic cutaway of the same wardrobe with all doors removed (r/hallin.jpg).
- Left, cleaning closet 450: mop and broom on a rail at 1.5 m, shelves at 1.7 and 1.95 m with cleaning products, a bucket, a stick vacuum standing upright.
- Middle, hanging zone 708 wide: clothes rail at 1.82 m with coats and jackets on slim hangers; shelf above at 1.9 m with hats and a storage box; shelf at 0.45 m with shoes; on the floor a round mustard pouf Ø350 on small wheels and a pair of shoes.
- Right, shelf column 300 wide: shelves at 0.45 / 0.8 / 1.15 / 1.9 m with boxes and folded scarves; between 1.15 and 1.9 m a grey electrical panel box on the end wall.
- Mezzanine above the right door: a white Wi-Fi router with antennas.
- All panels plain matte white, no back panel (ivory wallpaper visible).
```

## 10. Прихожая · от входа · `r/hall.jpg`
```
Photorealistic version of r/hall.jpg. View from the entrance door along the corridor.
- Right: the built-in white wardrobe with mirror doors and black handles.
- Ahead: openings to the kitchen (dining table with olive chairs) and to the living room; bathroom door light grey-white.
- Oak laminate through all rooms, black skirting, ivory wallpaper.
```

## 11. Гардеробная · `r/wardrobe.jpg`
```
Photorealistic version of r/wardrobe.jpg. Walk-in closet 1.65 × 0.9 m with folding doors open.
- Open metal mesh system in graphite: top rail at 2.4 m, vertical uprights, wire shelves and hanging rails.
- Column of wire shelves (no baskets); back wall: double hanging section and a long-hanging section with shelves above.
- Clothes in muted colours plus a few terracotta and olive pieces.
- Warm LED strip under the top shelves.
- Folding doors: black aluminium frames with satin glass.
```
