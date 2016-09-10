---
order: 3
title: Structure
menu: Structure
icon: ion-soup-can
---


# Structure

### Development Structure

- [:fa-folder-o: assets](#assets)
  - :fa-folder-o: js
  - :fa-folder-o: css
  - :fa-folder-o: images
  - :fa-folder-o: fonts
- [:fa-folder-o: components](#components)
- [:fa-folder-o: layouts](#layouts)
- [:fa-folder-o: markdown](#markdown)
- [:fa-folder-o: styles](#styles)
- [:fa-file-o: config.json](#config)
{.folders}

---

### Assets{#assets}

`assets` folders contain a assets for your website include `images` `fonts` `javascript` `css` files that you want to import into your website

- :fa-folder-o: assets
  - :fa-folder-o: js
  - :fa-folder-o: css
  - :fa-folder-o: images
  - :fa-folder-o: fonts
- end{.end}
{.folders}

---

### Components{#components}

contain a components that you can customize a pre-bundle components or add new one into this folder


### Layouts{#layout}

contain a components that you can customize a pre-bundle components or add new one into this folder

### Markdown{#markdown}

add markdown into this folders, one page per file.
subfolder was allow and url of this pages will be include with folder name such as


- :fa-folder-o: markdown
  - :fa-file-o: index.md
  - :fa-file-o: getstarted.md
  - :fa-folder-o: api
    - :fa-file-o: rest1.md
    - :fa-file-o: rest2.md
- end{.end}
{.folders}


#### Markdown Configuration

```markdown
---
title:    "Title"                   (String)
menu:     "Menu Title"              (String)  [Optional]
order:    "Order of this pages"     (Integer) [Optional]
layout:   "Layout files"            (String)  [Optional]
---

Content
.
.
.
```

