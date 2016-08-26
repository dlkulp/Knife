# Users
- **name** `[string]`: *name of user*
- **tagLine** `[string]`: *short description of user*
- **loc** `[string]`: *location of User*
- **desc** `[string]`: *long description of user (unused at the moment)*
- **image** `[url]`: *relative link to image*
- **teams** `[array[object]]`: *list of teams the user is on*
- **games** `[array[object]]`: *list of games the user has worked on*

# Games
- **name** `[string]`: *name of user*
- **studio** `[string]`: *name of studio that made the game*
- **desc** `[string]`: *long description of game*
- **gallery** `[array[url]]`: *list of images*
- **features** `[array[string]]`: *list of short descriptions*
- **specs** `[object[string]]`: *key/value dictionary of specs {"ram":"6gb", "processor": "intel Xeon"}*
- **download** `[string]`: *primary link to download game from*
- **mirrors** `[array[url]]`: *optional list of alternate places to download game*
- **meta** `[object[string]]`: *key/value dictionary of other random stuff about the game {engine:"snowdrop", version: "1.0"}*

# Teams/Studios
- **name** `[string]`: *name of studio*
- **desc** `[string]`: *long description of studio*
- **image** `[url]`: *image for team*
- **users** `[array[object]]`: *list of users in studio*
- **games** `[array[object]]`: *list of games created by studio*

# Homepage Panels
(all panels will have **type** plus the contents of one of the sections below)
- **type** `[string]`: *the type of the panel (card, text, et cetera)*

## Card
- **items** `[array[object]]`: *list of cards*
    - **img** `[url]`: *image for card*
    - **title** `[string]`: *title of the card*
    - **link** `[url]`: *link to content*
    - **desc** `[string]`: *longer description of card*
    - **more** `[string]`: *text for link to show more*
- **color** `[string]`: *css `background-color` attribute for panel background (blue, #8a345c, gainsboro)*

## text
- **align** `[string]`: *css `justify-content` attribute to shift text (flex-start, flex-end, center)*
- **text** `[string]`: *the actual text to be displayed*
- **bgcolor** `[string]`: *css `background-color` attribute for panel background (blue, #8a345c, gainsboro)*
- **color** `[string]`: *css `color` attribute for text color (white, #00FF7d, gainsboro)