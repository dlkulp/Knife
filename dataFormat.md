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
