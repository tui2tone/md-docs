# Markdown Docs

Markdown Docs is documentation boilerplate that can give you a easy 
and beautiful documentation website by writing only markdown
and this tools will generate all of thing into static html
we have a lot and components and you can customize it the way you want

## Get Started

mdoc using a lot of tools for easy documentation website creation

- markdown ( markdown-it, attrs )
- jade
- sass
- es6 javascript support
- browser-sync
- pre-build library ( jquery / bootstrap4 / sticky / highlight.js )
- pre-build components ( sidebar / list )

you can view this demo here <br>
[Live Demo]()


### Install CLI Tools

```
npm install mdoc -g
```

### Command

```
mdoc init [name]    # create new project
mdoc start          # run development
mdoc serve          # run production
mdoc build          # build production
```

### Structure

```
components      # HTML Components (Stylesheet/JS)
markdown        # Markdown files
layouts         # Layout files
styles          # Stylesheet
```

#### Markdown Structure
You can create content here with files or files and folder 
and boilerplate menu will generate by files and folder such as

```
index.md
getstart.md
api
--rest1.md
--rest2.md
```

Boilerplate menu will look like this

```
Index
Get Start
Api
  Rest1
  Rest2
```

##### Markdown Configuration

You can specific config in markdown files with this option

```
title: [a title of this pages]
menu: [a menu title text]
index: [an order in menu]
layout: [specific layout files]
```


