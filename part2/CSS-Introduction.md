# Introduction to CSS

CSS Stands for Cascading Style Sheets and is used to style the html elements. CSS is like the color pencils which are used to color the outlined coloring books.

# Ways to Implement CSS

There are three ways to implement CSS in a html file. The three ways are as follows.

- Inline CSS.
- Inside the head tag.
- In an external file.

Eventhought there are three ways the mostly we write CSS in an external file so that the styling remains separated form the html files.

If there only minor changes we also use the inline also.

## Inline CSS

```html
<h3 style="color: blue;">Header Tag</h3>
```

Here I gave an Inline style of for color therefore the text written inside it will be in blue color.

## Inside head tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Inside Header</title>
    <link rel="stylesheet" href="style.css" />

    <style>
      h1 {
        color: brown;
      }
    </style>
  </head>
  <body>
    <h1>Header Tag</h1>
  </body>
</html>
```

Here the style for the `<h1>` is inside the `<head>` therefore the text which is written inside the `<h1>` in the `<body>` will be in brown color

## In an External File

- This is the most common method. These are main reason why styling in an external file is necessary.
- The Styling Code remains separated
- Easy to Debug
- If the project is large, styling in html file can be hard

# Difference between Class and Id

```html
<h1 id="title">Only One Title</h1>

<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

- If there is only one element which requires that style we use id.
  - In CSS to denote a id we use hash. e.g: "#title"

<br>

- If there are multiple elements with the same style use class.
  - In CSS to denote a class we use dots. e.g: ".box"

<br>

# Most Commonly Used CSS Properties

```css
.css-properties {
  background-color: gray;
  background-image: url("");
  background-position: top;

  border: none;
  border-color: lightblue;
  border-style: dashed;
  border-width: 10px;

  color: #414141;
  cursor: help;

  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 5px;
  line-height: 10px;

  margin: 10rem;
  padding: 10%;

  height: 100%;
  width: 100%;

  text-align: center;
}
```
<br>

| Property            | Use and Usage                                                       |
| ------------------- | ------------------------------------------------------------------- |
| background-color    | This property is used to set the background color of an element.    |
| background-image    | This property is used to set the background of an element as image. |
| background-position | This property is used to set the position of the background image.  |
|border | This property is used to set the border of a an tag.|
|border-color| This property is used to set the border color.|
|border-style| This property is used to change the style of the border to dotted, dashed.|
|border-width| This property is used to increase the border width.|
|color| This property is used to change the color of the text which is displayed.|
|cursor| This property is used to change the cursor icon to loading, grab etc..|
|font-family| This property is used to specify the font which is to be used in the project.|
|font-size| This property is used to change the font size of various text elements.|
|font-weight| This property is used to specify the boldness of the text which is used. |
|letter-spacing| This property is used to increase the spacing bettwen the letters.|
|line-height| This property is used to specify the height between the lines.|
|text-align| This property is used to align the text in center, left or right.|
|margin| This property is used to give margin to the html elements.|
|padding| This property is used to give padding to html elements.|
|height| This property is used to set the height of an html element. Mostly probably the `<div>`|
|width| This property is used to set the width of an html element. Mostly probably the `<div>`|

