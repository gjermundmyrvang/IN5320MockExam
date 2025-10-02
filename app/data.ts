import { Question } from "./types";

// Utility function to shuffle an array
const shuffleArray = (array: Question[]) =>
  [...array].sort(() => Math.random() - 0.5);

// The total pool of 80 questions
export const ALL_QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    topic: "HTML",
    question:
      "What is the primary function of HTML (HyperText Markup Language)?",
    answerOptions: [
      {
        text: "To add style and visual formatting to a web page.",
        rationale:
          "Styling is the primary responsibility of CSS (Cascading Style Sheets).",
        isCorrect: false,
      },
      {
        text: "To define the structure and content of a web page.",
        rationale:
          "HTML uses markup tags to organize text, images, and other media into a logical document structure.",
        isCorrect: true,
      },
      {
        text: "To create interactivity and dynamic behavior on a web page.",
        rationale:
          "Interactivity and dynamic behavior are handled by JavaScript.",
        isCorrect: false,
      },
      {
        text: "To establish a connection between the browser and the web server.",
        rationale:
          "The HTTP protocol handles communication between the browser and server.",
        isCorrect: false,
      },
    ],
    hint: "Think about the role of a document's skeleton or blueprint.",
  },
  {
    id: 2,
    topic: "HTML",
    question: "Which tag is used to create a hyperlink in HTML?",
    answerOptions: [
      {
        text: "<link>",
        rationale:
          "The `<link>` tag is used to link external resources, such as stylesheets or favicons, not for internal hyperlinks.",
        isCorrect: false,
      },
      {
        text: "<hlink>",
        rationale: "`<hlink>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<a>",
        rationale:
          "The `<a>` (anchor) tag is used to create a link to another document or to a different part of the current document.",
        isCorrect: true,
      },
      {
        text: "<url>",
        rationale: "`<url>` is not a standard HTML element.",
        isCorrect: false,
      },
    ],
    hint: "This element is often called an 'anchor' tag.",
  },
  {
    id: 3,
    topic: "HTML",
    question:
      "Which HTML element contains metadata about the HTML document, such as the character set, links to stylesheets, and the document's title?",
    answerOptions: [
      {
        text: "<body>",
        rationale: "The `<body>` element contains the visible page content.",
        isCorrect: false,
      },
      {
        text: "<html>",
        rationale:
          "The `<html>` element is the root element that wraps the entire document.",
        isCorrect: false,
      },
      {
        text: "<head>",
        rationale:
          "The `<head>` element contains information about the document that is not displayed to the user.",
        isCorrect: true,
      },
      {
        text: "<meta>",
        rationale:
          "The `<meta>` tag is used *inside* the `<head>` to specify metadata, but the `<head>` element contains all metadata.",
        isCorrect: false,
      },
    ],
    hint: "This section is always placed before the visible content of the page.",
  },
  {
    id: 4,
    topic: "HTML",
    question: "Which HTML tag is used to display an image on a web page?",
    answerOptions: [
      {
        text: "<picture>",
        rationale:
          "The `<picture>` element is used for responsive images, but the `<img>` tag is required to display the image itself.",
        isCorrect: false,
      },
      {
        text: '<img src="url">',
        rationale:
          "The `<img>` tag is used for images and requires the `src` attribute to specify the source file.",
        isCorrect: true,
      },
      {
        text: "<image>",
        rationale: "`<image>` is not the correct standard HTML tag.",
        isCorrect: false,
      },
      {
        text: "<source>",
        rationale:
          "The `<source>` tag is used inside `<audio>`, `<video>`, and `<picture>` elements to define media resources.",
        isCorrect: false,
      },
    ],
    hint: "This is a self-closing (void) tag.",
  },
  {
    id: 5,
    topic: "HTML",
    question:
      "What does the mandatory `alt` attribute in the `<img>` tag provide?",
    answerOptions: [
      {
        text: "The width and height dimensions of the image.",
        rationale:
          "Dimensions are set using the `width` and `height` attributes.",
        isCorrect: false,
      },
      {
        text: "A brief description of the image for screen readers and when the image fails to load.",
        rationale:
          "The `alt` (alternative text) attribute is crucial for accessibility and provides text fallback.",
        isCorrect: true,
      },
      {
        text: "A URL for a higher-resolution version of the image.",
        rationale:
          "Higher-resolution images are typically handled by `srcset` or the `<picture>` element.",
        isCorrect: false,
      },
      {
        text: "A tooltip that appears when the user hovers over the image.",
        rationale: "This function is handled by the `title` attribute.",
        isCorrect: false,
      },
    ],
    hint: "This is vital for users who cannot see the image.",
  },
  {
    id: 6,
    topic: "HTML",
    question:
      "Which HTML tag is used to create a numbered list (list with items preceded by numbers)?",
    answerOptions: [
      {
        text: "<ul>",
        rationale: "The `<ul>` (unordered list) tag creates a bulleted list.",
        isCorrect: false,
      },
      {
        text: "<dl>",
        rationale:
          "The `<dl>` (description list) tag is for terms and definitions.",
        isCorrect: false,
      },
      {
        text: "<list>",
        rationale: "`<list>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<ol>",
        rationale:
          "The `<ol>` (ordered list) tag creates a list where items are typically marked by ascending numbers.",
        isCorrect: true,
      },
    ],
    hint: "This list type is for sequencing steps or items.",
  },
  {
    id: 7,
    topic: "HTML",
    question: "Which HTML element defines a paragraph of text?",
    answerOptions: [
      {
        text: "<para>",
        rationale: "`<para>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<p>",
        rationale:
          "The `<p>` tag is the correct and standard element for a paragraph.",
        isCorrect: true,
      },
      {
        text: "<text>",
        rationale: "`<text>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<br>",
        rationale:
          "The `<br>` tag is for a single line break, not a paragraph block.",
        isCorrect: false,
      },
    ],
    hint: "This element is a block-level container for a block of prose.",
  },
  {
    id: 8,
    topic: "HTML",
    question:
      "Which attribute of the `<a>` tag specifies the destination URL of the link?",
    answerOptions: [
      {
        text: "src",
        rationale:
          "`src` is used for external resources like images or scripts.",
        isCorrect: false,
      },
      {
        text: "link",
        rationale:
          "The `link` attribute is not used on the anchor tag for the URL.",
        isCorrect: false,
      },
      {
        text: "url",
        rationale: "`url` is not a standard attribute for this purpose.",
        isCorrect: false,
      },
      {
        text: "href",
        rationale:
          "The `href` (Hypertext Reference) attribute is required to define the destination address of the link.",
        isCorrect: true,
      },
    ],
    hint: "The name stands for 'Hypertext Reference'.",
  },
  {
    id: 9,
    topic: "HTML",
    question: "What is the correct syntax for a comment in HTML?",
    answerOptions: [
      {
        text: "// This is a comment",
        rationale: "This is JavaScript syntax for a single-line comment.",
        isCorrect: false,
      },
      {
        text: "/* This is a comment */",
        rationale: "This is CSS or multi-line JavaScript comment syntax.",
        isCorrect: false,
      },
      {
        text: "",
        rationale: "This syntax is slightly incorrect and outdated.",
        isCorrect: false,
      },
      {
        text: "",
        rationale:
          "This is the correct syntax for an HTML comment, which is not rendered by the browser.",
        isCorrect: true,
      },
    ],
    hint: "HTML comments start with `<!-` and end with `->`.",
  },
  {
    id: 10,
    topic: "HTML",
    question:
      "Which attribute is used to provide a CSS class name to an element?",
    answerOptions: [
      {
        text: "id",
        rationale: "`id` provides a single, unique identifier for an element.",
        isCorrect: false,
      },
      {
        text: "style",
        rationale: "`style` is used for inline CSS, not class names.",
        isCorrect: false,
      },
      {
        text: "class",
        rationale:
          "The `class` attribute is used to assign one or more class names for styling or scripting purposes.",
        isCorrect: true,
      },
      {
        text: "tag",
        rationale: "`tag` is not a standard HTML attribute for styling.",
        isCorrect: false,
      },
    ],
    hint: "This attribute allows multiple elements to share the same styling rules.",
  },
  {
    id: 11,
    topic: "HTML",
    question:
      "What is the purpose of the `<body>` element in an HTML document?",
    answerOptions: [
      {
        text: "To link external scripts and CSS files.",
        rationale:
          "Linking external resources is primarily done within the `<head>` element.",
        isCorrect: false,
      },
      {
        text: "To define the character encoding and viewport settings.",
        rationale:
          "These are meta-data tasks handled within the `<head>` element.",
        isCorrect: false,
      },
      {
        text: "To contain all the content (text, images, links) that is visible to the user.",
        rationale:
          "The `<body>` element is the container for the document's content.",
        isCorrect: true,
      },
      {
        text: "To declare global JavaScript variables.",
        rationale:
          "JavaScript declarations are typically done within `<script>` tags.",
        isCorrect: false,
      },
    ],
    hint: "This is the visible part of the webpage.",
  },
  {
    id: 12,
    topic: "HTML",
    question: "How many levels of section headings does HTML provide?",
    answerOptions: [
      {
        text: "Four, from `<h1>` to `<h4>`.",
        rationale: "HTML provides two more levels.",
        isCorrect: false,
      },
      {
        text: "Five, from `<h1>` to `<h5>`.",
        rationale: "HTML provides one more level.",
        isCorrect: false,
      },
      {
        text: "Six, from `<h1>` to `<h6>`.",
        rationale:
          "HTML defines six levels of headings to define the hierarchy of a document structure.",
        isCorrect: true,
      },
      {
        text: "Unlimited levels, using the `<heading>` tag.",
        rationale: "The number is fixed at six, and the tag is `<h1>`-`<h6>`.",
        isCorrect: false,
      },
    ],
    hint: "The lowest heading level is represented by the number six.",
  },
  {
    id: 13,
    topic: "HTML",
    question: "Which of the following is a self-closing (void) tag?",
    answerOptions: [
      {
        text: "<div>",
        rationale:
          "`<div>` is a container tag that requires a closing tag (`</div>`).",
        isCorrect: false,
      },
      {
        text: "<p>",
        rationale:
          "`<p>` is a container tag that requires a closing tag (`</p>`).",
        isCorrect: false,
      },
      {
        text: "<br>",
        rationale:
          "The `<br>` (line break) tag is a void element that does not require a closing tag.",
        isCorrect: true,
      },
      {
        text: "<a>",
        rationale:
          "The `<a>` (anchor) tag requires a closing tag (`</a>`) to wrap content.",
        isCorrect: false,
      },
    ],
    hint: "This element is used to insert a line break without having any content itself.",
  },
  {
    id: 14,
    topic: "HTML",
    question: "What is the function of the HTML5 semantic element `<section>`?",
    answerOptions: [
      {
        text: "To define the main navigation links for a document.",
        rationale: "This is the role of the `<nav>` element.",
        isCorrect: false,
      },
      {
        text: "To represent a self-contained, independent piece of content (like a blog post).",
        rationale: "This is the role of the `<article>` element.",
        isCorrect: false,
      },
      {
        text: "To group related content, typically with a heading, forming a thematic grouping.",
        rationale:
          "The `<section>` element groups content that belongs together conceptually.",
        isCorrect: true,
      },
      {
        text: "To display content that is tangentially related to the main content (like a sidebar).",
        rationale: "This is the role of the `<aside>` element.",
        isCorrect: false,
      },
    ],
    hint: "Think of it as creating a chapter or major division within your page.",
  },
  {
    id: 15,
    topic: "HTML",
    question:
      "Which tag is specifically used to define the title that appears in the browser tab or window, but is not visible in the document body?",
    answerOptions: [
      {
        text: "<h1>",
        rationale:
          "The `<h1>` tag is the main visible heading in the document body.",
        isCorrect: false,
      },
      {
        text: "<head>",
        rationale:
          "The `<head>` element contains this tag, but it is not the tag itself.",
        isCorrect: false,
      },
      {
        text: '<meta name="title">',
        rationale:
          "The `<meta>` tag is for general metadata; the `<title>` tag is specific for the tab title.",
        isCorrect: false,
      },
      {
        text: "<title>",
        rationale:
          "The `<title>` element, placed inside `<head>`, sets the title for the browser tab/window.",
        isCorrect: true,
      },
    ],
    hint: "This element is critical for bookmarks and search engine results.",
  },
  {
    id: 16,
    topic: "HTML",
    question:
      "What is the correct way to include an external CSS file named `style.css` in an HTML document?",
    answerOptions: [
      {
        text: '<style src="style.css">',
        rationale:
          "The `<style>` tag is for inline CSS; the correct tag is `<link>`.",
        isCorrect: false,
      },
      {
        text: '<css rel="stylesheet" href="style.css">',
        rationale: "`<css>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: '<link rel="stylesheet" href="style.css">',
        rationale:
          'The `<link>` tag with `rel="stylesheet"` and `href` correctly links an external CSS file.',
        isCorrect: true,
      },
      {
        text: '<script link="style.css">',
        rationale: "The `<script>` tag is used for JavaScript.",
        isCorrect: false,
      },
    ],
    hint: "The tag used is also a self-closing (void) tag.",
  },
  {
    id: 17,
    topic: "HTML",
    question:
      "Which HTML element is a generic **block-level** container used for grouping and styling content?",
    answerOptions: [
      {
        text: "<span>",
        rationale:
          "The `<span>` element is a generic **inline-level** container.",
        isCorrect: false,
      },
      {
        text: "<i>",
        rationale: "The `<i>` element is inline-level for italic text.",
        isCorrect: false,
      },
      {
        text: "<div>",
        rationale:
          "The `<div>` (division) element is the standard, generic block-level container.",
        isCorrect: true,
      },
      {
        text: "<b>",
        rationale: "The `<b>` element is inline-level for bold text.",
        isCorrect: false,
      },
    ],
    hint: "This element typically starts on a new line and takes up the full available width.",
  },
  {
    id: 18,
    topic: "HTML",
    question:
      "The HTML standard is currently maintained and developed by which organization?",
    answerOptions: [
      {
        text: "CERN (European Organization for Nuclear Research)",
        rationale:
          "CERN is where HTML was invented, but the W3C maintains the standard.",
        isCorrect: false,
      },
      {
        text: "Google (Alphabet Inc.)",
        rationale:
          "Google is a major contributor, but not the maintaining body.",
        isCorrect: false,
      },
      {
        text: "W3C (World Wide Web Consortium)",
        rationale:
          "The W3C is the organization responsible for developing and maintaining the HTML specifications.",
        isCorrect: true,
      },
      {
        text: "The DHIS2 Design Lab",
        rationale:
          "The DHIS2 Design Lab creates resources for DHIS2, not the universal HTML standard.",
        isCorrect: false,
      },
    ],
    hint: "This organization manages web standards globally.",
  },
  {
    id: 19,
    topic: "HTML",
    question: "Which of the following is NOT an HTML5 semantic element?",
    answerOptions: [
      {
        text: "<header>",
        rationale: "The `<header>` element is semantic.",
        isCorrect: false,
      },
      {
        text: "<figure>",
        rationale:
          "The `<figure>` element is semantic (for self-contained content like diagrams/photos).",
        isCorrect: false,
      },
      {
        text: "<nav>",
        rationale: "The `<nav>` element is semantic.",
        isCorrect: false,
      },
      {
        text: "<center>",
        rationale:
          "The `<center>` tag is deprecated and not a semantic element; layout should be handled by CSS.",
        isCorrect: true,
      },
    ],
    hint: "One of these tags is outdated and purely presentational.",
  },
  {
    id: 20,
    topic: "HTML",
    question:
      "What is the correct tag for making text strongly important or serious?",
    answerOptions: [
      {
        text: "<b>",
        rationale:
          "The `<b>` tag is presentational (bold); `<strong>` is semantic.",
        isCorrect: false,
      },
      {
        text: "<em>",
        rationale: "The `<em>` tag is for emphasis (e.g., italics).",
        isCorrect: false,
      },
      {
        text: "<strong>",
        rationale:
          "The `<strong>` tag semantically indicates strong importance.",
        isCorrect: true,
      },
      {
        text: "<bold>",
        rationale: "`<bold>` is not a standard HTML element.",
        isCorrect: false,
      },
    ],
    hint: "This element conveys meaning to assistive technologies, not just visual style.",
  },
  {
    id: 21,
    topic: "HTML",
    question:
      "Which attribute is used to provide inline CSS styles directly on an HTML element?",
    answerOptions: [
      {
        text: "css",
        rationale: "`css` is not a standard HTML attribute.",
        isCorrect: false,
      },
      {
        text: "class",
        rationale: "`class` links to external or internal CSS rules.",
        isCorrect: false,
      },
      {
        text: "style",
        rationale:
          "The `style` attribute allows for the inclusion of CSS properties directly within the opening tag of an element.",
        isCorrect: true,
      },
      {
        text: "format",
        rationale: "`format` is not a standard HTML attribute for styling.",
        isCorrect: false,
      },
    ],
    hint: "This method of styling is generally discouraged in large projects.",
  },
  {
    id: 22,
    topic: "HTML",
    question:
      "Which HTML element is used to insert a piece of code written in JavaScript into the document?",
    answerOptions: [
      {
        text: "<javascript>",
        rationale: "`<javascript>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<link>",
        rationale:
          "The `<link>` tag is for linking external resources like CSS.",
        isCorrect: false,
      },
      {
        text: "<script>",
        rationale:
          "The `<script>` tag is used to embed or reference executable code, typically JavaScript.",
        isCorrect: true,
      },
      {
        text: "<embed>",
        rationale:
          "The `<embed>` tag is used to embed external applications or interactive content.",
        isCorrect: false,
      },
    ],
    hint: "This element is often placed near the end of the `<body>` for performance.",
  },
  {
    id: 23,
    topic: "HTML",
    question:
      "What is the difference between a block-level element (like `<div>`) and an inline-level element (like `<span>`)?",
    answerOptions: [
      {
        text: "Block-level elements can contain other elements, while inline elements cannot.",
        rationale:
          "Both can contain other elements (though with context rules), but this isn't the primary difference.",
        isCorrect: false,
      },
      {
        text: "Inline elements start on a new line, and block-level elements flow next to each other.",
        rationale: "This statement is the opposite of the truth.",
        isCorrect: false,
      },
      {
        text: "Block-level elements start on a new line and take up the full available width; inline elements only take up as much width as necessary.",
        rationale:
          "This defines the default display behavior for the two types of elements.",
        isCorrect: true,
      },
      {
        text: "Block-level elements are for styling, and inline elements are for content.",
        rationale: "Both are used for structure and content.",
        isCorrect: false,
      },
    ],
    hint: "The difference is how they interact with their surrounding space and line breaks.",
  },
  {
    id: 24,
    topic: "HTML",
    question:
      "Which HTML tag is used to define an item within an ordered or unordered list?",
    answerOptions: [
      {
        text: "<item>",
        rationale: "`<item>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<list-item>",
        rationale: "`<list-item>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<li>",
        rationale:
          "The `<li>` (list item) tag is used inside `<ol>`, `<ul>`, and `<menu>` elements.",
        isCorrect: true,
      },
      {
        text: "<dl>",
        rationale: "The `<dl>` tag defines the description list itself.",
        isCorrect: false,
      },
    ],
    hint: "This tag means 'list item'.",
  },
  {
    id: 25,
    topic: "HTML",
    question: "What does the abbreviation HTML stand for?",
    answerOptions: [
      {
        text: "Hyperlink Text Management Language",
        rationale:
          "This is incorrect; the term is 'HyperText Markup Language'.",
        isCorrect: false,
      },
      {
        text: "High Technology Modern Language",
        rationale:
          "This is incorrect; the term is 'HyperText Markup Language'.",
        isCorrect: false,
      },
      {
        text: "HyperText Markup Language",
        rationale:
          "HTML stands for HyperText Markup Language, defining its purpose as a markup system for hypertext documents.",
        isCorrect: true,
      },
      {
        text: "Home Tool Markup Language",
        rationale:
          "This is incorrect; the term is 'HyperText Markup Language'.",
        isCorrect: false,
      },
    ],
    hint: "Focus on the 'Markup' part, indicating it's a language of tags.",
  },
  {
    id: 26,
    topic: "HTML",
    question:
      "Which attribute on an `<img>` tag specifies the path to the image file?",
    answerOptions: [
      {
        text: "link",
        rationale: "`link` is used on the `<link>` tag.",
        isCorrect: false,
      },
      {
        text: "path",
        rationale: "`path` is not a standard HTML attribute.",
        isCorrect: false,
      },
      {
        text: "href",
        rationale: "`href` is used for hyperlinks on the `<a>` tag.",
        isCorrect: false,
      },
      {
        text: "src",
        rationale:
          "The `src` (source) attribute specifies the URL or file path for the image.",
        isCorrect: true,
      },
    ],
    hint: "This attribute is short for 'source'.",
  },
  {
    id: 27,
    topic: "HTML",
    question:
      "Which set of tags is used to define an input field for text within a form?",
    answerOptions: [
      {
        text: "<textinput>",
        rationale: "`<textinput>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: '<input type="text">',
        rationale:
          'The `<input>` tag is the standard for form controls, and `type="text"` specifies a simple text field.',
        isCorrect: true,
      },
      {
        text: '<field type="text">',
        rationale: "`<field>` is not a standard HTML element for this purpose.",
        isCorrect: false,
      },
      {
        text: "<label>",
        rationale:
          "The `<label>` tag provides a caption for a form control, but is not the control itself.",
        isCorrect: false,
      },
    ],
    hint: "This element is a void tag used inside the `<form>`.",
  },
  {
    id: 28,
    topic: "HTML",
    question:
      "The HTML document structure must begin with which declaration to specify the HTML version?",
    answerOptions: [
      {
        text: "<html>",
        rationale:
          "The `<html>` tag is the root element, not the version declaration.",
        isCorrect: false,
      },
      {
        text: "<!DOCTYPE HTML5>",
        rationale: "This syntax is close but slightly incorrect for HTML5.",
        isCorrect: false,
      },
      {
        text: "<!DOCTYPE html>",
        rationale:
          "This declaration is used for HTML5 and must be the very first thing in the document.",
        isCorrect: true,
      },
      {
        text: '<meta name="version" content="HTML5">',
        rationale: "This is metadata and not the required initial declaration.",
        isCorrect: false,
      },
    ],
    hint: "This declaration is short and case-insensitive.",
  },
  {
    id: 29,
    topic: "HTML",
    question:
      "The primary role of **JavaScript** in a web application, according to the course overview, is to provide:",
    answerOptions: [
      {
        text: "Structure and content organization.",
        rationale: "This is the role of HTML.",
        isCorrect: false,
      },
      {
        text: "Styling and presentation.",
        rationale: "This is the role of CSS.",
        isCorrect: false,
      },
      {
        text: "Interactivity and dynamic behavior.",
        rationale:
          "The course explicitly states JavaScript is used to 'add interactivity to otherwise static web sites'.",
        isCorrect: true,
      },
      {
        text: "Server-side data processing.",
        rationale:
          "JavaScript *can* do this (Node.js), but in the front-end course context, it's about client-side interactivity.",
        isCorrect: false,
      },
    ],
    hint: "This language is often called the 'behavior' layer of the web.",
  },
  {
    id: 30,
    topic: "HTML",
    question:
      "Which HTML element is used to group form controls and their labels (typically using `<fieldset>` as a container)?",
    answerOptions: [
      {
        text: "<section>",
        rationale: "`<section>` is a general structural element.",
        isCorrect: false,
      },
      {
        text: "<formgroup>",
        rationale: "`<formgroup>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<legend>",
        rationale:
          "The `<legend>` element is used to provide a caption for the grouping, but the `<fieldset>` element provides the actual grouping container.",
        isCorrect: false,
      },
      {
        text: "<fieldset>",
        rationale:
          "The `<fieldset>` element draws a box around a logical grouping of form controls.",
        isCorrect: true,
      },
    ],
    hint: "This element helps users visually and semantically group related input fields.",
  },
  {
    id: 31,
    topic: "HTML",
    question:
      "Which HTML element is typically used to create an input field where the user selects a date from a calendar interface?",
    answerOptions: [
      {
        text: '<input type="calendar">',
        rationale:
          '`type="calendar"` is not a standard type; `date` is used instead.',
        isCorrect: false,
      },
      {
        text: '<select type="date">',
        rationale: "`<select>` is for dropdown menus, not calendar inputs.",
        isCorrect: false,
      },
      {
        text: '<input type="date">',
        rationale:
          'The `type="date"` value for the `<input>` element provides a date-picking interface.',
        isCorrect: true,
      },
      {
        text: "<dateinput>",
        rationale: "`<dateinput>` is not a standard HTML element.",
        isCorrect: false,
      },
    ],
    hint: "The input type is straightforward and descriptive.",
  },
  {
    id: 32,
    topic: "HTML",
    question:
      "The primary semantic difference between the `<i>` and `<em>` tags is:",
    answerOptions: [
      {
        text: "There is no difference; both are deprecated in HTML5.",
        rationale: "`<em>` is semantic and not deprecated.",
        isCorrect: false,
      },
      {
        text: "`<i>` is for emphasis (semantic), and `<em>` is for italics (presentational).",
        rationale: "This is the opposite of the semantic definition.",
        isCorrect: false,
      },
      {
        text: "`<i>` is for technical or foreign terms (presentational/idiomatic), and `<em>` is for emphasis (semantic).",
        rationale:
          "In HTML5, `<i>` is used for text to be set off from the normal prose, while `<em>` conveys importance/stress.",
        isCorrect: true,
      },
      {
        text: "`<i>` is for bold text, and `<em>` is for underline.",
        rationale: "`<i>` is for italics and `<em>` provides emphasis.",
        isCorrect: false,
      },
    ],
    hint: "Which one tells a screen reader or search engine that the text is important?",
  },
  {
    id: 33,
    topic: "HTML",
    question:
      "What is the purpose of the `novalidate` attribute on the `<form>` element?",
    answerOptions: [
      {
        text: "It forces the browser to only accept numeric inputs.",
        rationale: "This is controlled by input `type` attributes.",
        isCorrect: false,
      },
      {
        text: "It skips server-side validation and sends data directly to the database.",
        rationale:
          "This attribute only affects client-side validation; server-side validation is still necessary.",
        isCorrect: false,
      },
      {
        text: "It prevents the browser from performing automatic client-side form validation.",
        rationale:
          "The `novalidate` attribute allows developers to handle validation entirely with client-side JavaScript.",
        isCorrect: true,
      },
      {
        text: "It ensures all form inputs must be filled out before submission.",
        rationale: "The `required` attribute enforces this.",
        isCorrect: false,
      },
    ],
    hint: "This attribute gives control over the error checking process back to JavaScript.",
  },
  {
    id: 34,
    topic: "HTML",
    question:
      "Which tag is used to create a caption or title for an HTML `<table>`?",
    answerOptions: [
      {
        text: "<head>",
        rationale: "The `<head>` element is for document metadata.",
        isCorrect: false,
      },
      {
        text: "<thead>",
        rationale:
          "The `<thead>` element defines the set of table rows forming the header.",
        isCorrect: false,
      },
      {
        text: "<caption>",
        rationale:
          "The `<caption>` tag is specifically used to define the title of a table, placed immediately after the `<table>` tag.",
        isCorrect: true,
      },
      {
        text: "<title>",
        rationale:
          "The `<title>` tag defines the document title, not a table caption.",
        isCorrect: false,
      },
    ],
    hint: "The name is a simple, singular noun.",
  },
  {
    id: 35,
    topic: "HTML",
    question:
      "What is the correct way to set the width of an image element to 300 pixels using only HTML attributes?",
    answerOptions: [
      {
        text: '<img style="width: 300px;">',
        rationale:
          "This uses the `style` attribute, which is CSS, not a pure HTML width attribute.",
        isCorrect: false,
      },
      {
        text: '<img size="300">',
        rationale: "`size` is not the correct HTML attribute for this purpose.",
        isCorrect: false,
      },
      {
        text: '<img width="300px">',
        rationale:
          "The standard HTML `width` attribute should only contain the numeric value (pixels are assumed).",
        isCorrect: false,
      },
      {
        text: '<img width="300">',
        rationale:
          "The `width` attribute specifies the width in pixels, without the 'px' unit.",
        isCorrect: true,
      },
    ],
    hint: "When using the dedicated HTML attribute, the unit is implied.",
  },
  {
    id: 36,
    topic: "HTML",
    question:
      "Which element is used to render multi-line text input within a form?",
    answerOptions: [
      {
        text: '<input type="textarea">',
        rationale: 'There is no `type="textarea"` for the `<input>` tag.',
        isCorrect: false,
      },
      {
        text: "<textarea>",
        rationale:
          "The `<textarea>` element is specifically designed for entering larger amounts of text over multiple lines.",
        isCorrect: true,
      },
      {
        text: '<input type="text" lines="5">',
        rationale: 'The `type="text"` input is for single-line input.',
        isCorrect: false,
      },
      {
        text: "<textmultiline>",
        rationale: "`<textmultiline>` is not a standard HTML element.",
        isCorrect: false,
      },
    ],
    hint: "This element requires both an opening and a closing tag.",
  },
  {
    id: 37,
    topic: "HTML",
    question:
      "What is the HTML element used to include an audio file in a document?",
    answerOptions: [
      {
        text: "<sound>",
        rationale: "`<sound>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: '<media type="audio">',
        rationale: "`<media>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<embed>",
        rationale:
          "The `<embed>` tag is generic for external applications, but `<audio>` is preferred for sound files.",
        isCorrect: false,
      },
      {
        text: "<audio>",
        rationale:
          "The `<audio>` element is the standard HTML5 element for embedding sound content.",
        isCorrect: true,
      },
    ],
    hint: "The name is a simple, clear noun.",
  },
  {
    id: 38,
    topic: "HTML",
    question:
      "Which attribute on the `<script>` tag is used to ensure the script is executed after the document has been fully parsed?",
    answerOptions: [
      {
        text: "async",
        rationale:
          "`async` causes the script to be executed as soon as it is loaded, potentially before parsing is complete.",
        isCorrect: false,
      },
      {
        text: "defer",
        rationale:
          "The `defer` attribute ensures the script is downloaded in parallel but executed only after the document has been parsed.",
        isCorrect: true,
      },
      {
        text: "late",
        rationale: "`late` is not a standard attribute.",
        isCorrect: false,
      },
      {
        text: "onload",
        rationale:
          "`onload` is an event handler, not an attribute to control parsing behavior.",
        isCorrect: false,
      },
    ],
    hint: "This attribute helps prevent blocking the initial rendering of the page.",
  },
  {
    id: 39,
    topic: "HTML",
    question:
      "Which tag is used to define an internal stylesheet (CSS embedded directly in the HTML document)?",
    answerOptions: [
      {
        text: "<link>",
        rationale: "`<link>` is for external stylesheets.",
        isCorrect: false,
      },
      {
        text: "<css>",
        rationale: "`<css>` is not a standard HTML element.",
        isCorrect: false,
      },
      {
        text: "<style>",
        rationale:
          "The `<style>` element is used to contain CSS declarations for the document.",
        isCorrect: true,
      },
      {
        text: '<script type="css">',
        rationale: "The `<script>` tag is for executable code, not CSS.",
        isCorrect: false,
      },
    ],
    hint: "This element is usually placed inside the `<head>` section.",
  },
  {
    id: 40,
    topic: "HTML",
    question: "What is the function of the HTML5 `<time>` element?",
    answerOptions: [
      {
        text: "To create a countdown timer using JavaScript.",
        rationale: "A countdown requires JavaScript logic.",
        isCorrect: false,
      },
      {
        text: "To define the section containing the latest news or updates.",
        rationale: "This would typically use `<article>` or `<section>`.",
        isCorrect: false,
      },
      {
        text: "To provide a machine-readable date/time to the browser or search engines.",
        rationale:
          "The `<time>` element semantically encloses a date, time, or duration, often with the `datetime` attribute for machine readability.",
        isCorrect: true,
      },
      {
        text: "To control the speed of CSS animations.",
        rationale:
          "CSS animations are controlled via CSS properties like `animation-duration`.",
        isCorrect: false,
      },
    ],
    hint: "This element is a tool for search engines to better understand temporal data.",
  },
  {
    id: 41,
    topic: "CSS",
    question:
      "What does CSS primarily stand for, and which property is the 'C' based on?",
    answerOptions: [
      {
        text: "Creative Styling Sheets, based on creativity rules.",
        rationale: "CSS stands for Cascading Style Sheets.",
        isCorrect: false,
      },
      {
        text: "Client Side Styling, based on browser-specific rules.",
        rationale: "CSS stands for Cascading Style Sheets.",
        isCorrect: false,
      },
      {
        text: "Cascading Style Sheets, based on the cascade of rules.",
        rationale:
          "CSS is an acronym for Cascading Style Sheets, referring to the order and priority in which styles are applied.",
        isCorrect: true,
      },
      {
        text: "Computer Style Sheets, based on device compatibility.",
        rationale: "CSS stands for Cascading Style Sheets.",
        isCorrect: false,
      },
    ],
    hint: "The 'C' refers to the order in which styles from multiple sources are processed.",
  },
  {
    id: 42,
    topic: "CSS",
    question:
      "Which of the following describes the core principle of CSS **Specificity**?",
    answerOptions: [
      {
        text: "It determines whether a property value is passed down from a parent to a child element.",
        rationale: "This describes **Inheritance**.",
        isCorrect: false,
      },
      {
        text: "It is a scoring system that determines which clashing style rule takes precedence over another.",
        rationale:
          "Specificity provides a weight to a CSS selector, ensuring that a more targeted rule overrides a general one.",
        isCorrect: true,
      },
      {
        text: "It ensures that the last defined rule always wins, regardless of the selector type.",
        rationale:
          "This is only true if specificity is equal; otherwise, the most specific rule wins.",
        isCorrect: false,
      },
      {
        text: "It defines the order in which style sheets are loaded by the browser.",
        rationale:
          "This relates to the file loading order, not the rule priority.",
        isCorrect: false,
      },
    ],
    hint: "This concept acts as a tie-breaker when multiple rules target the same element.",
  },
  {
    id: 43,
    topic: "CSS",
    question:
      "Which selector type has the **highest specificity score** (excluding inline styles and `!important`)?",
    answerOptions: [
      {
        text: "Element selector (e.g., `p`)",
        rationale: "Score: 0-0-1 (Lowest).",
        isCorrect: false,
      },
      {
        text: "Class selector (e.g., `.menu-item`)",
        rationale: "Score: 0-1-0 (Medium).",
        isCorrect: false,
      },
      {
        text: "ID selector (e.g., `#main-header`)",
        rationale: "Score: 1-0-0 (Highest of the standard selectors).",
        isCorrect: true,
      },
      {
        text: "Pseudo-class selector (e.g., `:hover`)",
        rationale: "Score: 0-1-0 (Same as a class).",
        isCorrect: false,
      },
    ],
    hint: "This selector is typically unique to one element on the page.",
  },
  {
    id: 44,
    topic: "CSS",
    question:
      "Which of the following is an example of a property value that is commonly **inherited** from a parent element to a child element?",
    answerOptions: [
      {
        text: "margin",
        rationale: "Margins are not inherited to allow independent spacing.",
        isCorrect: false,
      },
      {
        text: "width",
        rationale:
          "Width is not inherited; it's calculated based on the parent's available space.",
        isCorrect: false,
      },
      {
        text: "color",
        rationale:
          "Text-related properties like `color`, `font-family`, and `font-size` are commonly inherited.",
        isCorrect: true,
      },
      {
        text: "border",
        rationale:
          "Borders are not inherited; child elements must be given their own borders.",
        isCorrect: false,
      },
    ],
    hint: "This property controls the foreground color of text.",
  },
  {
    id: 45,
    topic: "CSS",
    question:
      "What is the correct order of the components in the CSS Box Model, starting from the innermost layer?",
    answerOptions: [
      {
        text: "Content, Border, Padding, Margin",
        rationale:
          "Padding is inside the border; the order is Content, Padding, Border, Margin.",
        isCorrect: false,
      },
      {
        text: "Content, Margin, Padding, Border",
        rationale:
          "Margin is the outermost layer, and padding is inside the border.",
        isCorrect: false,
      },
      {
        text: "Content, Padding, Border, Margin",
        rationale:
          "This order moves outward: content is wrapped by padding, which is enclosed by the border, which is separated by the margin.",
        isCorrect: true,
      },
      {
        text: "Margin, Border, Padding, Content",
        rationale: "This is the reverse order (outermost to innermost).",
        isCorrect: false,
      },
    ],
    hint: "The padding provides space directly around the content.",
  },
  {
    id: 46,
    topic: "CSS",
    question: "In the CSS Box Model, what does the **Padding** area represent?",
    answerOptions: [
      {
        text: "The space outside the border, separating the element from its neighbors.",
        rationale: "This describes the **Margin** area.",
        isCorrect: false,
      },
      {
        text: "The visible line that encloses the content and padding.",
        rationale: "This describes the **Border** area.",
        isCorrect: false,
      },
      {
        text: "The inner space between the element's content and its border.",
        rationale: "Padding creates space inside the box.",
        isCorrect: true,
      },
      {
        text: "The calculated area of the HTML element as defined by its width and height.",
        rationale:
          "This describes the **Content** area (in the default box model).",
        isCorrect: false,
      },
    ],
    hint: "This adds 'breathing room' within the element's background.",
  },
  {
    id: 47,
    topic: "CSS",
    question:
      "Which value of the `box-sizing` property ensures that `padding` and `border` are included in the element's total `width` and `height`?",
    answerOptions: [
      {
        text: "box-sizing: content-box;",
        rationale:
          "This is the default value, where padding and border are *added* to the declared width/height.",
        isCorrect: false,
      },
      {
        text: "box-sizing: margin-box;",
        rationale: "`margin-box` is not a standard value.",
        isCorrect: false,
      },
      {
        text: "box-sizing: border-box;",
        rationale:
          "Setting this value makes layout calculation much easier by containing padding and border within the declared width/height.",
        isCorrect: true,
      },
      {
        text: "box-sizing: padding-box;",
        rationale:
          "This is a non-standard value or a legacy one with limited use.",
        isCorrect: false,
      },
    ],
    hint: "This is the modern standard for predictable layout sizing.",
  },
  {
    id: 48,
    topic: "CSS",
    question:
      "Which CSS unit represents a measurement relative to the size of the browser's **viewport width**?",
    answerOptions: [
      {
        text: "rem",
        rationale: "Relative to the root element's font size.",
        isCorrect: false,
      },
      {
        text: "em",
        rationale: "Relative to the parent element's font size.",
        isCorrect: false,
      },
      {
        text: "vw",
        rationale:
          "The `vw` (viewport width) unit calculates size as a percentage of the browser window's width.",
        isCorrect: true,
      },
      {
        text: "%",
        rationale:
          "The percentage unit is relative to the parent element's size, not necessarily the viewport.",
        isCorrect: false,
      },
    ],
    hint: "This unit is key for true, fluid responsive typography and sizing.",
  },
  {
    id: 49,
    topic: "CSS",
    question:
      "If you set the `font-size` of the `<html>` element to 16px, what would `2rem` equal on a child element?",
    answerOptions: [
      {
        text: "16px",
        rationale: "2rem is twice the root font size.",
        isCorrect: false,
      },
      {
        text: "24px",
        rationale: "2rem is 32px (16 * 2).",
        isCorrect: false,
      },
      {
        text: "32px",
        rationale:
          "The `rem` unit is calculated relative to the root element's font size (2 * 16px = 32px).",
        isCorrect: true,
      },
      {
        text: "300%",
        rationale: "300% is equivalent to 3 times the size, not 2 times.",
        isCorrect: false,
      },
    ],
    hint: "The 'r' in `rem` stands for 'root'.",
  },
  {
    id: 50,
    topic: "CSS",
    question:
      "Which CSS property is used to define an element as a **Grid Container**?",
    answerOptions: [
      {
        text: "grid-template: auto;",
        rationale:
          "This defines the structure, but doesn't initiate Grid layout.",
        isCorrect: false,
      },
      {
        text: "display: grid;",
        rationale:
          "Setting `display: grid` on a parent element makes it a grid container, enabling two-dimensional layout for its children.",
        isCorrect: true,
      },
      {
        text: "position: grid;",
        rationale:
          "`position` is used for element placement, not for enabling Grid layout.",
        isCorrect: false,
      },
      {
        text: "flex-direction: grid;",
        rationale: "`flex-direction` is a Flexbox property.",
        isCorrect: false,
      },
    ],
    hint: "Like Flexbox, this property controls the layout behavior of the container element.",
  },
  {
    id: 51,
    topic: "CSS",
    question:
      "CSS Grid is primarily used for **two-dimensional** layout. Which property defines the tracks (size and number) for the **columns**?",
    answerOptions: [
      {
        text: "grid-template-rows",
        rationale: "This defines the rows (horizontal tracks).",
        isCorrect: false,
      },
      {
        text: "grid-auto-flow",
        rationale:
          "This controls how auto-placed items flow, not the column structure.",
        isCorrect: false,
      },
      {
        text: "grid-gap",
        rationale: "This property defines the spacing between cells.",
        isCorrect: false,
      },
      {
        text: "grid-template-columns",
        rationale:
          "This property allows you to define the number and width of the vertical tracks in the grid.",
        isCorrect: true,
      },
    ],
    hint: "The name is specific to defining the column pattern.",
  },
  {
    id: 52,
    topic: "CSS",
    question:
      "Which Flexbox property aligns flex items along the **main axis** of the container?",
    answerOptions: [
      {
        text: "align-items",
        rationale: "Aligns along the **cross-axis**.",
        isCorrect: false,
      },
      {
        text: "flex-direction",
        rationale:
          "Defines the main axis direction, but not the alignment along it.",
        isCorrect: false,
      },
      {
        text: "justify-content",
        rationale:
          "This property controls the distribution and alignment of items along the main axis.",
        isCorrect: true,
      },
      {
        text: "align-content",
        rationale: "Aligns multiple lines of items along the cross-axis.",
        isCorrect: false,
      },
    ],
    hint: "The property name relates to the 'justification' or spacing of content.",
  },
  {
    id: 53,
    topic: "CSS",
    question:
      "Which of the following describes the difference between `position: relative;` and `position: absolute;`?",
    answerOptions: [
      {
        text: "Relative elements are positioned relative to the viewport; absolute elements are positioned relative to the document.",
        rationale:
          "Neither is entirely correct; relative is relative to itself, absolute is relative to its nearest *positioned* ancestor.",
        isCorrect: false,
      },
      {
        text: "Relative elements stay in the document flow, while absolute elements are removed from the flow.",
        rationale:
          "Absolute positioning removes the element from the flow, meaning it takes up no space.",
        isCorrect: true,
      },
      {
        text: "Relative positioning requires `z-index`, but absolute positioning does not.",
        rationale: "Both types of positioning support `z-index`.",
        isCorrect: false,
      },
      {
        text: "Relative positioning is used for block elements; absolute is used for inline elements.",
        rationale: "Positioning applies to all element types.",
        isCorrect: false,
      },
    ],
    hint: "One maintains its space in the layout, the other is treated as if it were not there.",
  },
  {
    id: 54,
    topic: "CSS",
    question:
      "For an element to be positioned relative to the browser window (viewport) and stay fixed when the user scrolls, what position value is required?",
    answerOptions: [
      {
        text: "position: relative;",
        rationale: "Relative is based on the element's original position.",
        isCorrect: false,
      },
      {
        text: "position: absolute;",
        rationale:
          "Absolute is based on the nearest *positioned* ancestor, not necessarily the viewport.",
        isCorrect: false,
      },
      {
        text: "position: static;",
        rationale: "Static is the default and ignores positioning properties.",
        isCorrect: false,
      },
      {
        text: "position: fixed;",
        rationale:
          "Fixed positioning places the element relative to the viewport, keeping it static during scrolling.",
        isCorrect: true,
      },
    ],
    hint: "This position is often used for sticky headers or floating buttons.",
  },
  {
    id: 55,
    topic: "CSS",
    question:
      "What is the primary function of a **Media Query** in responsive design?",
    answerOptions: [
      {
        text: "To load external JavaScript files based on user interaction.",
        rationale: "This is the job of the `<script>` tag and JavaScript.",
        isCorrect: false,
      },
      {
        text: "To determine which CSS properties are inherited by child elements.",
        rationale: "Inheritance rules are static in CSS.",
        isCorrect: false,
      },
      {
        text: "To apply styles selectively based on device characteristics like screen width or orientation.",
        rationale:
          "Media Queries enable responsive design by allowing developers to write conditional CSS blocks.",
        isCorrect: true,
      },
      {
        text: "To define the stacking order of elements using `z-index`.",
        rationale:
          "This is handled by the `z-index` property on positioned elements.",
        isCorrect: false,
      },
    ],
    hint: "Media queries create breakpoints for different screen sizes.",
  },
  {
    id: 56,
    topic: "CSS",
    question:
      "What is the correct syntax for a media query that targets devices with a maximum screen width of 768 pixels?",
    answerOptions: [
      {
        text: "@query (screen-width: 768px)",
        rationale: "Incorrect syntax and property name.",
        isCorrect: false,
      },
      {
        text: "@media screen and (min-width: 768px)",
        rationale: "`min-width` targets devices *wider* than 768px.",
        isCorrect: false,
      },
      {
        text: "@media (max-width: 768px)",
        rationale:
          "`max-width` correctly applies styles only when the screen width is 768px or smaller.",
        isCorrect: true,
      },
      {
        text: "@media only screen and (width: 768px)",
        rationale: "This only targets a width *exactly* at 768px.",
        isCorrect: false,
      },
    ],
    hint: "This is typically used in a 'desktop-first' approach to responsiveness.",
  },
  {
    id: 57,
    topic: "CSS",
    question: "Which of the following is a **Pseudo-Class**?",
    answerOptions: [
      {
        text: "::before",
        rationale: "This is a **Pseudo-Element** used to insert content.",
        isCorrect: false,
      },
      {
        text: ":active",
        rationale:
          "Pseudo-classes target an element's *state* (e.g., focused, clicked, or hovered).",
        isCorrect: true,
      },
      {
        text: "::first-line",
        rationale:
          "This is a **Pseudo-Element** used to target a specific part of an element.",
        isCorrect: false,
      },
      {
        text: "#header",
        rationale: "This is an **ID selector**.",
        isCorrect: false,
      },
    ],
    hint: "Pseudo-classes are indicated by a single colon (`:`) and relate to the element's status.",
  },
  {
    id: 58,
    topic: "CSS",
    question: "What is the effect of the selector `div + p`?",
    answerOptions: [
      {
        text: "It selects all `p` elements inside any `div` element.",
        rationale: "This is the descendant selector (`div p`).",
        isCorrect: false,
      },
      {
        text: "It selects the first `p` element that is immediately preceded by a `div` element.",
        rationale: "The `+` is the adjacent sibling combinator.",
        isCorrect: true,
      },
      {
        text: "It selects all `p` elements that are siblings of a `div` element.",
        rationale: "This is the general sibling selector (`div ~ p`).",
        isCorrect: false,
      },
      {
        text: "It selects any `p` element that is a direct child of a `div` element.",
        rationale: "This is the child selector (`div > p`).",
        isCorrect: false,
      },
    ],
    hint: "This selector requires the two elements to be next to each other in the document source order.",
  },
  {
    id: 59,
    topic: "CSS",
    question:
      "Which CSS property is used to control the stacking order of positioned elements that overlap?",
    answerOptions: [
      {
        text: "order",
        rationale:
          "`order` is a Flexbox property for arranging items along the axis.",
        isCorrect: false,
      },
      {
        text: "position-layer",
        rationale: "Not a standard CSS property.",
        isCorrect: false,
      },
      {
        text: "z-index",
        rationale:
          "The `z-index` property accepts an integer value to determine which element appears on top in a stack (higher numbers are closer to the user).",
        isCorrect: true,
      },
      {
        text: "overflow",
        rationale:
          "`overflow` dictates how content should be handled when it exceeds the element's dimensions.",
        isCorrect: false,
      },
    ],
    hint: "The 'z' refers to the z-axis (depth).",
  },
  {
    id: 60,
    topic: "CSS",
    question:
      "In the syntax `selector { property: value; }`, what is the entire block, including the selector, curly braces, and declarations, called?",
    answerOptions: [
      {
        text: "A CSS declaration",
        rationale: "The declaration is just the `property: value;` pair.",
        isCorrect: false,
      },
      {
        text: "A CSS property block",
        rationale: "Not a standard CSS term.",
        isCorrect: false,
      },
      {
        text: "A CSS rule set",
        rationale:
          "The entire structure from selector to the closing brace is referred to as a rule set (or simply a rule).",
        isCorrect: true,
      },
      {
        text: "A CSS statement",
        rationale: "A statement is a more general programming term.",
        isCorrect: false,
      },
    ],
    hint: "This term refers to the complete instruction for the browser.",
  },
  {
    id: 61,
    topic: "CSS",
    question:
      "The `opacity` property can make an element transparent. What is the valid range of values for `opacity`?",
    answerOptions: [
      {
        text: "0 to 100 (percentage)",
        rationale: "It uses decimal values, not percentages, for 0 to 1.",
        isCorrect: false,
      },
      {
        text: "-1 to 1 (negative values hide the element)",
        rationale: "Negative values are invalid.",
        isCorrect: false,
      },
      {
        text: "0.0 to 1.0 (where 0.0 is invisible and 1.0 is fully opaque)",
        rationale:
          "Opacity is defined as a floating-point number between 0 and 1.",
        isCorrect: true,
      },
      {
        text: "Any positive integer value.",
        rationale: "Only values between 0 and 1 (inclusive) are valid.",
        isCorrect: false,
      },
    ],
    hint: "The value represents a fraction of full visibility.",
  },
  {
    id: 62,
    topic: "CSS",
    question:
      "Which shorthand property can be used to set the `font-style`, `font-weight`, `font-size`, and `font-family` in a single declaration?",
    answerOptions: [
      {
        text: "text-style",
        rationale: "This property is not a shorthand for all font properties.",
        isCorrect: false,
      },
      {
        text: "typeface",
        rationale: "Not a standard CSS property.",
        isCorrect: false,
      },
      {
        text: "font",
        rationale:
          "The `font` property is a comprehensive shorthand for the most common font-related properties.",
        isCorrect: true,
      },
      {
        text: "text-format",
        rationale: "Not a standard CSS property.",
        isCorrect: false,
      },
    ],
    hint: "This is the most direct name for the group of text appearance properties.",
  },
  {
    id: 63,
    topic: "CSS",
    question:
      "What is the primary difference between a **Pseudo-Class** (e.g., `:hover`) and a **Pseudo-Element** (e.g., `::after`)?",
    answerOptions: [
      {
        text: "Pseudo-classes affect the element's *state*; Pseudo-elements target a specific *part* of the element or insert content.",
        rationale:
          "This is the correct distinction: state vs. content/fragment.",
        isCorrect: true,
      },
      {
        text: "Pseudo-classes use two colons (`::`); Pseudo-elements use one colon (`:`).",
        rationale:
          "This is reversed; pseudo-elements use two colons (CSS3 standard).",
        isCorrect: false,
      },
      {
        text: "Pseudo-classes are for layout; Pseudo-elements are for typography.",
        rationale: "Both can be used for both purposes.",
        isCorrect: false,
      },
      {
        text: "Pseudo-classes are block-level; Pseudo-elements are inline-level.",
        rationale: "Both can have their display type changed.",
        isCorrect: false,
      },
    ],
    hint: "One modifies the element itself; the other creates something new or targets a virtual fragment.",
  },
  {
    id: 64,
    topic: "CSS",
    question:
      "What is the purpose of the `inherit` keyword as a value for any CSS property?",
    answerOptions: [
      {
        text: "It sets the property to its initial, default browser value.",
        rationale: "This is the `initial` keyword.",
        isCorrect: false,
      },
      {
        text: "It forces the property to receive the computed value of the parent element.",
        rationale:
          "The `inherit` keyword explicitly tells the browser to use the parent's computed value for that property.",
        isCorrect: true,
      },
      {
        text: "It prevents the property from being overridden by any less specific rule.",
        rationale: "This describes the `!important` rule.",
        isCorrect: false,
      },
      {
        text: "It applies the property value only to descendant elements, not the element itself.",
        rationale: "The value applies to the element itself.",
        isCorrect: false,
      },
    ],
    hint: "This keyword can force a non-inherited property to follow its parent.",
  },
  {
    id: 65,
    topic: "CSS",
    question:
      "Which Flexbox property allows a flex item to grow and occupy available space within the flex container?",
    answerOptions: [
      {
        text: "flex-basis",
        rationale: "Defines the initial size of the item.",
        isCorrect: false,
      },
      {
        text: "flex-shrink",
        rationale:
          "Defines the item's ability to shrink when space is limited.",
        isCorrect: false,
      },
      {
        text: "flex-grow",
        rationale:
          "A non-zero value allows the item to take up remaining space proportionally.",
        isCorrect: true,
      },
      {
        text: "flex-wrap",
        rationale: "Controls whether items wrap to the next line.",
        isCorrect: false,
      },
    ],
    hint: "The name is literally the action it performs.",
  },
  {
    id: 66,
    topic: "CSS",
    question:
      "Which Flexbox property is used to specify whether flex items should wrap onto multiple lines?",
    answerOptions: [
      {
        text: "flex-flow: wrap;",
        rationale:
          "`flex-flow` is a shorthand for both direction and wrap, so this is correct but not the specific property.",
        isCorrect: false,
      },
      {
        text: "flex-wrap: wrap;",
        rationale:
          "The `flex-wrap` property explicitly controls wrapping behavior.",
        isCorrect: true,
      },
      {
        text: "overflow: wrap;",
        rationale:
          "`overflow` is for content spilling out of the box, not flex item arrangement.",
        isCorrect: false,
      },
      {
        text: "align-content: wrap;",
        rationale:
          "`align-content` is for spacing multiple lines, not enabling the wrap itself.",
        isCorrect: false,
      },
    ],
    hint: "The property name describes the items' behavior when they exceed the container size.",
  },
  {
    id: 67,
    topic: "CSS",
    question:
      "What is the result of using the `::before` pseudo-element with the CSS `content` property?",
    answerOptions: [
      {
        text: "It replaces the existing content of the HTML element.",
        rationale: "It inserts content *before* the existing content.",
        isCorrect: false,
      },
      {
        text: "It creates a virtual child element and inserts content *before* the element's actual content.",
        rationale:
          "Pseudo-elements insert content that is not in the source HTML, placing it before the element's text/children.",
        isCorrect: true,
      },
      {
        text: "It defines a new class name that can be referenced later.",
        rationale: "This is done using the `.class-name` syntax.",
        isCorrect: false,
      },
      {
        text: "It allows a CSS style to be applied to the parent element.",
        rationale: "It targets the element itself or its virtual parts.",
        isCorrect: false,
      },
    ],
    hint: "The inserted content is not visible in the HTML source code.",
  },
  {
    id: 68,
    topic: "CSS",
    question:
      "Which CSS property is used to apply a visual effect, such as blurring or changing contrast, to an element?",
    answerOptions: [
      {
        text: "transform",
        rationale: "Used for 2D/3D manipulation (translate, rotate, scale).",
        isCorrect: false,
      },
      {
        text: "transition",
        rationale: "Used to smoothly change properties over time.",
        isCorrect: false,
      },
      {
        text: "filter",
        rationale:
          "The `filter` property provides various graphic effects (e.g., `blur()`, `grayscale()`, `saturate()`).",
        isCorrect: true,
      },
      {
        text: "shadow",
        rationale: "Used specifically for box or text shadows.",
        isCorrect: false,
      },
    ],
    hint: "This property often uses function-like values to process the element's rendering.",
  },
  {
    id: 69,
    topic: "CSS",
    question:
      "In a rule set, what must immediately follow the CSS property name?",
    answerOptions: [
      {
        text: "A semicolon (;)",
        rationale: "The semicolon ends the entire declaration.",
        isCorrect: false,
      },
      {
        text: "An equals sign (=)",
        rationale: "The equals sign is used for HTML attributes.",
        isCorrect: false,
      },
      {
        text: "A colon (:)",
        rationale: "The colon separates the property name from its value.",
        isCorrect: true,
      },
      {
        text: "An assignment arrow (=>)",
        rationale: "This is JavaScript arrow function syntax.",
        isCorrect: false,
      },
    ],
    hint: "This character is used to indicate the beginning of the value assignment.",
  },
  {
    id: 70,
    topic: "CSS",
    question: "What is the purpose of the `calc()` function in CSS?",
    answerOptions: [
      {
        text: "To define the duration of an animation transition.",
        rationale: "This is handled by `transition-duration`.",
        isCorrect: false,
      },
      {
        text: "To perform simple mathematical calculations to determine a CSS property value.",
        rationale:
          "The `calc()` function allows mixing different units (e.g., `width: calc(100% - 20px);`).",
        isCorrect: true,
      },
      {
        text: "To automatically convert `px` units to `rem` units for responsive design.",
        rationale: "Conversion is manual or handled by pre-processors.",
        isCorrect: false,
      },
      {
        text: "To define a custom CSS variable (custom property).",
        rationale: "Variables are defined with the `--` prefix.",
        isCorrect: false,
      },
    ],
    hint: "This function is extremely powerful for mixing fixed and fluid sizing.",
  },
  {
    id: 71,
    topic: "CSS",
    question:
      "The Flexbox property `flex-direction: column;` defines the main axis as running in which direction?",
    answerOptions: [
      {
        text: "Horizontally (left to right).",
        rationale: "This is the default for `flex-direction: row;`.",
        isCorrect: false,
      },
      {
        text: "Diagonally (top-left to bottom-right).",
        rationale: "Flexbox only supports linear axes (row or column).",
        isCorrect: false,
      },
      {
        text: "Vertically (top to bottom).",
        rationale:
          "Setting the direction to `column` makes the main axis run vertically, stacking items.",
        isCorrect: true,
      },
      {
        text: "Perpendicular to the text flow.",
        rationale: "This is the definition of the cross axis.",
        isCorrect: false,
      },
    ],
    hint: "Think about how a list of elements would appear in a single column.",
  },
  {
    id: 72,
    topic: "CSS",
    question:
      "If you set the `overflow` property to `hidden` on a container, what is the effect?",
    answerOptions: [
      {
        text: "The content is scrolled horizontally.",
        rationale:
          "This requires `overflow: scroll;` or `overflow-x: scroll;`.",
        isCorrect: false,
      },
      {
        text: "A scrollbar is always visible, even if the content fits.",
        rationale: "This requires `overflow: scroll;`.",
        isCorrect: false,
      },
      {
        text: "The content that exceeds the container's boundaries is clipped and invisible.",
        rationale:
          "The `hidden` value truncates content that overflows the element's box.",
        isCorrect: true,
      },
      {
        text: "The content expands the container to fit.",
        rationale:
          "This is the default flow behavior if height/width are not constrained.",
        isCorrect: false,
      },
    ],
    hint: "This value ensures that no scrollbars appear and content outside the bounds disappears.",
  },
  {
    id: 73,
    topic: "CSS",
    question:
      "Which of the following selectors targets all `p` elements that are the *first child* of their parent element?",
    answerOptions: [
      {
        text: "p:first-of-type",
        rationale:
          "Selects the first `p` among its siblings, regardless of whether it's the absolute first child.",
        isCorrect: false,
      },
      {
        text: "p:nth-child(1)",
        rationale:
          "This selects elements that are the first child *AND* are a `<p>` tag (which works, but is less specific than the optimal answer).",
        isCorrect: false,
      },
      {
        text: "p:first-child",
        rationale:
          "This selects a `<p>` element only if it is the absolute first child of its parent, which is the exact definition of the pseudo-class.",
        isCorrect: true,
      },
      {
        text: "p::before",
        rationale: "This is a pseudo-element for inserting content.",
        isCorrect: false,
      },
    ],
    hint: "This pseudo-class checks the element's position relative to all other siblings.",
  },
  {
    id: 74,
    topic: "CSS",
    question: "What is the primary function of the `transition` property?",
    answerOptions: [
      {
        text: "To apply 3D rotations and skewing to an element.",
        rationale: "This is the function of the `transform` property.",
        isCorrect: false,
      },
      {
        text: "To trigger the immediate execution of a style change when a user event occurs.",
        rationale:
          "Immediate changes are the default; `transition` smooths them out.",
        isCorrect: false,
      },
      {
        text: "To enable a smooth, timed change between two states of a property (e.g., color, width).",
        rationale:
          "The `transition` property defines how style changes should occur gradually over a specified duration.",
        isCorrect: true,
      },
      {
        text: "To define a complex animation sequence with keyframes.",
        rationale:
          "This is the function of the `@keyframes` rule and the `animation` property.",
        isCorrect: false,
      },
    ],
    hint: "This property controls the speed and timing of a style change.",
  },
  {
    id: 75,
    topic: "CSS",
    question:
      "In the Grid Layout property `grid-template-areas`, what does a period (`.`) represent?",
    answerOptions: [
      {
        text: "The end of a row definition.",
        rationale: "Row definitions are ended implicitly by the string quotes.",
        isCorrect: false,
      },
      {
        text: "An empty cell in the grid that does not belong to any named area.",
        rationale:
          "The period is used as a placeholder for an unused grid cell.",
        isCorrect: true,
      },
      {
        text: "A nested grid container within a cell.",
        rationale:
          "Nested grids are created by setting `display: grid` on a child element.",
        isCorrect: false,
      },
      {
        text: "The start of a media query block.",
        rationale: "Media queries start with `@media`.",
        isCorrect: false,
      },
    ],
    hint: "This character is a simple placeholder.",
  },
  {
    id: 76,
    topic: "JavaScript",
    question:
      "What is the primary role of JavaScript in a web application, as defined by the course?",
    answerOptions: [
      {
        text: "To tell web browsers what to show on a web page (structure).",
        rationale: "This is the role of HTML.",
        isCorrect: false,
      },
      {
        text: "To style and show elements (visual presentation).",
        rationale: "This is the role of CSS.",
        isCorrect: false,
      },
      {
        text: "To add interactivity and dynamic behavior to an otherwise static website.",
        rationale:
          "JavaScript enables features like videos, animated graphics, and network requests, creating 'desktop-like experiences'.",
        isCorrect: true,
      },
      {
        text: "To manage server-side databases and API routes.",
        rationale:
          "This is typically a backend role, although JavaScript can handle it with Node.js.",
        isCorrect: false,
      },
    ],
    hint: "This language is often called the 'behavior' layer of the web.",
  },
  {
    id: 77,
    topic: "JavaScript",
    question:
      "Which of the following JavaScript keywords is used to declare a variable that is block-scoped and cannot be reassigned after its initial value is set?",
    answerOptions: [
      {
        text: "var",
        rationale: "`var` is function-scoped and can be reassigned.",
        isCorrect: false,
      },
      {
        text: "let",
        rationale: "`let` is block-scoped but *can* be reassigned.",
        isCorrect: false,
      },
      {
        text: "const",
        rationale:
          "`const` (constant) is block-scoped and prevents reassignment of the variable reference.",
        isCorrect: true,
      },
      {
        text: "scope",
        rationale: "`scope` is not a keyword for variable declaration.",
        isCorrect: false,
      },
    ],
    hint: "The name implies the value should not change.",
  },
  {
    id: 78,
    topic: "JavaScript",
    question:
      "Which JavaScript variable keyword is generally avoided in modern development due to its function scoping and hoisting behavior?",
    answerOptions: [
      {
        text: "let",
        rationale: "`let` is widely used for block-scoped mutable variables.",
        isCorrect: false,
      },
      {
        text: "const",
        rationale:
          "`const` is widely used for block-scoped immutable variables.",
        isCorrect: false,
      },
      {
        text: "var",
        rationale:
          "The hoisting and lack of block scope in `var` often leads to bugs, making `let` and `const` the preferred modern keywords.",
        isCorrect: true,
      },
      {
        text: "static",
        rationale:
          "`static` is used in class definitions, not for general variable declaration.",
        isCorrect: false,
      },
    ],
    hint: "This keyword was the only option for variable declaration before ECMAScript 2015 (ES6).",
  },
  {
    id: 79,
    topic: "JavaScript",
    question:
      "What is the primary way JavaScript allows code to run when a user interacts with an element (e.g., clicks a button)?",
    answerOptions: [
      {
        text: "Using CSS media queries.",
        rationale:
          "CSS media queries handle responsive styling, not code execution.",
        isCorrect: false,
      },
      {
        text: "By modifying the HTML structure using the `<meta>` tag.",
        rationale: "The `<meta>` tag is for document metadata.",
        isCorrect: false,
      },
      {
        text: "By listening for specific events on DOM elements.",
        rationale:
          "JavaScript uses event listeners (like `addEventListener`) to execute functions based on user actions.",
        isCorrect: true,
      },
      {
        text: "By checking the global variable `isClicked` every second.",
        rationale: "This describes polling, which is inefficient.",
        isCorrect: false,
      },
    ],
    hint: "This mechanism connects a user action to a piece of code.",
  },
  {
    id: 80,
    topic: "JavaScript",
    question:
      "Which of the following is NOT a fundamental JavaScript data type?",
    answerOptions: [
      {
        text: "String",
        rationale: "Strings are fundamental.",
        isCorrect: false,
      },
      {
        text: "Boolean",
        rationale: "Booleans are fundamental.",
        isCorrect: false,
      },
      {
        text: "Array",
        rationale:
          "Arrays are a type of **Object**, not a primitive data type, despite their frequent use.",
        isCorrect: true,
      },
      {
        text: "Symbol",
        rationale: "Symbols are a primitive data type introduced in ES6.",
        isCorrect: false,
      },
    ],
    hint: "The `typeof` operator returns 'object' for this type.",
  },
  {
    id: 81,
    topic: "JavaScript",
    question: "What is the result of the expression `10 + '5'` in JavaScript?",
    answerOptions: [
      {
        text: "15 (Number)",
        rationale:
          "The number 10 is coerced to a string, resulting in concatenation.",
        isCorrect: false,
      },
      {
        text: "510 (Number)",
        rationale: "The order is incorrect.",
        isCorrect: false,
      },
      {
        text: "'105' (String)",
        rationale:
          "When using the `+` operator with a string and a number, the number is coerced into a string, resulting in concatenation.",
        isCorrect: true,
      },
      {
        text: "Error (Cannot mix types)",
        rationale:
          "JavaScript's loose typing allows this operation via type coercion.",
        isCorrect: false,
      },
    ],
    hint: "The `+` operator acts as a concatenation operator when a string is present.",
  },
  {
    id: 82,
    topic: "JavaScript",
    question:
      "What is the main benefit of using **Arrow Functions** (`=>`) over traditional function expressions?",
    answerOptions: [
      {
        text: "They are hoisted like `var` declarations, making them callable anywhere.",
        rationale: "They are not hoisted; they must be defined before use.",
        isCorrect: false,
      },
      {
        text: "They always return a value implicitly without needing a `return` keyword.",
        rationale:
          "They only implicitly return when using concise body syntax (no curly braces).",
        isCorrect: false,
      },
      {
        text: "They do not have their own `this` binding, instead inheriting `this` from the surrounding lexical scope.",
        rationale:
          "This 'lexical `this`' feature is the main advantage, simplifying context handling, especially in callbacks.",
        isCorrect: true,
      },
      {
        text: "They allow for multiple arguments to be passed without using parentheses.",
        rationale: "Parentheses are required for multiple arguments.",
        isCorrect: false,
      },
    ],
    hint: "This feature helps avoid common context confusion, especially in event handlers and React components.",
  },
  {
    id: 83,
    topic: "JavaScript",
    question:
      "Which of the following JavaScript values is considered **falsy**?",
    answerOptions: [
      {
        text: "[] (Empty array)",
        rationale: "An empty array is technically truthy.",
        isCorrect: false,
      },
      {
        text: '"0" (String zero)',
        rationale: "Any non-empty string is truthy.",
        isCorrect: false,
      },
      {
        text: "undefined",
        rationale:
          'Along with `null`, `0`, `""`, `false`, and `NaN`, `undefined` is falsy.',
        isCorrect: true,
      },
      {
        text: "{} (Empty object)",
        rationale: "An empty object is technically truthy.",
        isCorrect: false,
      },
    ],
    hint: "This value indicates a variable has been declared but not assigned a value.",
  },
  {
    id: 84,
    topic: "JavaScript",
    question:
      "Which loop is best suited for iterating directly over the **values** of an array or other iterable object?",
    answerOptions: [
      {
        text: "for (let key in object) {...}",
        rationale:
          "The `for...in` loop iterates over object **keys** (property names/indices).",
        isCorrect: false,
      },
      {
        text: "while (condition) {...}",
        rationale:
          "The `while` loop is condition-controlled, not designed specifically for collection iteration.",
        isCorrect: false,
      },
      {
        text: "for (let value of iterable) {...}",
        rationale:
          "The `for...of` loop is designed to iterate directly over the **values** stored in an iterable collection.",
        isCorrect: true,
      },
      {
        text: "do...while loop",
        rationale: "The `do...while` loop is condition-controlled.",
        isCorrect: false,
      },
    ],
    hint: "This loop structure is the most modern and readable for array content.",
  },
  {
    id: 85,
    topic: "JavaScript",
    question:
      "What is the correct method for selecting the *first* HTML element that matches a given CSS selector string in the DOM?",
    answerOptions: [
      {
        text: "document.getElementById('id')",
        rationale: "This selects only by ID, not a general CSS selector.",
        isCorrect: false,
      },
      {
        text: "document.querySelectorAll('.class')",
        rationale: "This returns a list of *all* matching elements.",
        isCorrect: false,
      },
      {
        text: "document.querySelector('selector')",
        rationale:
          "This method returns the first Element that matches the specified group of selectors.",
        isCorrect: true,
      },
      {
        text: "document.getElementsByTagName('tag')[0]",
        rationale: "This is inefficient; `querySelector` is the standard tool.",
        isCorrect: false,
      },
    ],
    hint: "This DOM method uses the single form of its name.",
  },
  {
    id: 86,
    topic: "JavaScript",
    question:
      "Which array method creates a **new array** by calling a function for every element in the original array and returning the result?",
    answerOptions: [
      {
        text: "forEach()",
        rationale: "Returns `undefined` and is used for side effects.",
        isCorrect: false,
      },
      {
        text: "filter()",
        rationale:
          "Returns a new array containing a *subset* of elements that pass a test.",
        isCorrect: false,
      },
      {
        text: "map()",
        rationale:
          "The `map()` method transforms each element and collects the results into a new array.",
        isCorrect: true,
      },
      {
        text: "reduce()",
        rationale: "Reduces the array to a single output value.",
        isCorrect: false,
      },
    ],
    hint: "This method is essential for transforming arrays (e.g., converting a list of numbers to a list of doubled numbers).",
  },
  {
    id: 87,
    topic: "JavaScript",
    question:
      "What does the **Asynchronous** concept in JavaScript primarily allow the browser to do?",
    answerOptions: [
      {
        text: "Execute multiple functions simultaneously on different processor cores.",
        rationale:
          "JavaScript is typically single-threaded; asynchronous code handles waiting, not parallel execution.",
        isCorrect: false,
      },
      {
        text: "Wait for slow operations (like network requests) without blocking the main user interface thread.",
        rationale:
          "Asynchronous operations prevent the UI from freezing while waiting for I/O tasks to complete.",
        isCorrect: true,
      },
      {
        text: "Ensure that all code is executed in the exact order it appears in the script file.",
        rationale: "This describes **synchronous** execution.",
        isCorrect: false,
      },
      {
        text: "Manipulate the properties of CSS elements.",
        rationale: "This is DOM/CSS manipulation.",
        isCorrect: false,
      },
    ],
    hint: "This concept keeps the user interface responsive while fetching data.",
  },
  {
    id: 88,
    topic: "JavaScript",
    question: "What is the purpose of the `fetch` API?",
    answerOptions: [
      {
        text: "To create new DOM elements in the document.",
        rationale: "DOM manipulation methods handle this.",
        isCorrect: false,
      },
      {
        text: "To standardize the way JavaScript handles function call contexts.",
        rationale: "This is related to `this` and arrow functions.",
        isCorrect: false,
      },
      {
        text: "To fetch data from external websites and APIs asynchronously.",
        rationale:
          "The `fetch` API is the modern, Promise-based standard for making network requests (HTTP requests).",
        isCorrect: true,
      },
      {
        text: "To manage client-side browser history and navigation.",
        rationale: "This is handled by the `history` object.",
        isCorrect: false,
      },
    ],
    hint: "This is the primary tool for consuming APIs in modern web applications.",
  },
  {
    id: 89,
    topic: "JavaScript",
    question:
      "In the context of asynchronous JavaScript, a **Promise** represents what?",
    answerOptions: [
      {
        text: "The immediate successful result of a function call.",
        rationale:
          "The result is what the Promise resolves to, but the Promise itself is the wrapper.",
        isCorrect: false,
      },
      {
        text: "A guaranteed synchronous execution of code before the next line runs.",
        rationale: "Promises are asynchronous.",
        isCorrect: false,
      },
      {
        text: "A value that may be available now, or in the future, or never.",
        rationale:
          "A Promise is a placeholder for the final result of an asynchronous operation, which can be resolved (fulfilled) or rejected (error).",
        isCorrect: true,
      },
      {
        text: "A fixed time delay for code execution, regardless of the operation's speed.",
        rationale: "This is the job of `setTimeout`.",
        isCorrect: false,
      },
    ],
    hint: "Think of it as a placeholder for an eventual outcome.",
  },
  {
    id: 90,
    topic: "JavaScript",
    question:
      "Which two keywords are typically used together to make asynchronous code appear synchronous and more readable?",
    answerOptions: [
      {
        text: "function and return",
        rationale: "Standard function syntax.",
        isCorrect: false,
      },
      {
        text: "try and catch",
        rationale: "Used for error handling.",
        isCorrect: false,
      },
      {
        text: "async and await",
        rationale:
          "An `async` function is defined to contain asynchronous logic, and `await` pauses execution until a Promise resolves, making the code sequential.",
        isCorrect: true,
      },
      {
        text: "then and catch",
        rationale: "Used for chaining raw Promises.",
        isCorrect: false,
      },
    ],
    hint: "The first keyword defines the function's nature; the second tells the function where to pause.",
  },
  {
    id: 91,
    topic: "JavaScript",
    question:
      "How can you check if two variables, `a` and `b`, have the same value **and** the same data type in JavaScript?",
    answerOptions: [
      {
        text: "if (a = b)",
        rationale: "This is an assignment, not a comparison.",
        isCorrect: false,
      },
      {
        text: "if (a == b)",
        rationale:
          "This is loose equality, allowing type coercion (e.g., `5 == '5'` is true).",
        isCorrect: false,
      },
      {
        text: "if (a === b)",
        rationale:
          "The strict equality operator checks both value and type without coercion.",
        isCorrect: true,
      },
      {
        text: "if (a !== b)",
        rationale: "This checks for strict inequality.",
        isCorrect: false,
      },
    ],
    hint: "This comparison operator is often recommended for safety.",
  },
  {
    id: 92,
    topic: "JavaScript",
    question: "What is **Type Coercion** in JavaScript?",
    answerOptions: [
      {
        text: "An error that occurs when mixing different data types in an expression.",
        rationale: "Coercion is what *prevents* the error in loose equality.",
        isCorrect: false,
      },
      {
        text: "The process where the JavaScript engine automatically converts one data type to another to complete an operation.",
        rationale:
          "This happens implicitly with the loose equality (`==`) operator or the `+` operator with strings.",
        isCorrect: true,
      },
      {
        text: "The use of the `Number()` or `String()` functions to manually convert types.",
        rationale:
          "This is **Type Conversion** (explicit), not coercion (implicit).",
        isCorrect: false,
      },
      {
        text: "A feature introduced by TypeScript to enforce strict type checking.",
        rationale: "TypeScript helps *avoid* coercion through explicit typing.",
        isCorrect: false,
      },
    ],
    hint: "This is an implicit action taken by the runtime environment.",
  },
  {
    id: 93,
    topic: "JavaScript",
    question:
      "Which of the following array methods is used to return a **single accumulated value** based on applying a callback function to each element?",
    answerOptions: [
      {
        text: "map()",
        rationale: "Returns a new array.",
        isCorrect: false,
      },
      {
        text: "filter()",
        rationale: "Returns a new array (subset).",
        isCorrect: false,
      },
      {
        text: "reduce()",
        rationale:
          "The `reduce()` method iterates and reduces the array to a single value (e.g., a sum, product, or single object).",
        isCorrect: true,
      },
      {
        text: "find()",
        rationale:
          "Returns the first element that satisfies the testing function.",
        isCorrect: false,
      },
    ],
    hint: "This method takes an optional initial value for the accumulator.",
  },
  {
    id: 94,
    topic: "JavaScript",
    question:
      "Which DOM method is used to create a *new* HTML element node that you can later add to the document?",
    answerOptions: [
      {
        text: "document.createElement('tag')",
        rationale:
          "This method instantiates a new HTML element node in memory.",
        isCorrect: true,
      },
      {
        text: "document.createTextNode('text')",
        rationale: "This creates a new text node, not an element node.",
        isCorrect: false,
      },
      {
        text: "document.appendNode('tag')",
        rationale: "`appendNode` is not a standard DOM method.",
        isCorrect: false,
      },
      {
        text: "document.innerHTML = '<tag>'",
        rationale:
          "This injects HTML into an existing element, but does not create a separate element node.",
        isCorrect: false,
      },
    ],
    hint: "This method takes the tag name as a string argument.",
  },
  {
    id: 95,
    topic: "JavaScript",
    question:
      "How do you correctly attach an event handler to a button element retrieved using `document.querySelector('#myButton')`?",
    answerOptions: [
      {
        text: "myButton.onclick = myFunction;",
        rationale:
          "This is an older method that only allows one handler per event.",
        isCorrect: false,
      },
      {
        text: "myButton.event = 'click', myFunction;",
        rationale: "Incorrect syntax.",
        isCorrect: false,
      },
      {
        text: "myButton.addEventListener('click', myFunction);",
        rationale:
          "The standard and modern method for attaching multiple event listeners to an element.",
        isCorrect: true,
      },
      {
        text: "myButton.handle('click', myFunction);",
        rationale: "Not a standard DOM method.",
        isCorrect: false,
      },
    ],
    hint: "The method allows you to add multiple listeners for the same event type.",
  },
  {
    id: 96,
    topic: "JavaScript",
    question:
      "What is the purpose of the `break` statement inside a loop (e.g., `for` or `while`)?",
    answerOptions: [
      {
        text: "To skip the current iteration and proceed to the next one.",
        rationale: "This is the job of the `continue` statement.",
        isCorrect: false,
      },
      {
        text: "To throw an exception and stop the entire program execution.",
        rationale: "The `throw` statement handles exceptions.",
        isCorrect: false,
      },
      {
        text: "To exit the loop immediately and continue execution after the loop's body.",
        rationale: "The `break` statement halts the loop entirely.",
        isCorrect: true,
      },
      {
        text: "To introduce a small pause in execution for debugging.",
        rationale:
          "The `debugger` statement or `console.log` is used for debugging.",
        isCorrect: false,
      },
    ],
    hint: "This command causes an immediate termination of the nearest enclosing loop.",
  },
  {
    id: 97,
    topic: "JavaScript",
    question: "The `JSON.parse()` method is used for what purpose?",
    answerOptions: [
      {
        text: "To convert a JavaScript object into a JSON string.",
        rationale: "This is the job of `JSON.stringify()`.",
        isCorrect: false,
      },
      {
        text: "To load data from a URL using the `fetch` API.",
        rationale: "The `fetch` API handles network requests.",
        isCorrect: false,
      },
      {
        text: "To parse a JSON string and convert it into a native JavaScript object.",
        rationale:
          "This is the essential function for working with data received from an API.",
        isCorrect: true,
      },
      {
        text: "To validate that a JavaScript object adheres to a specific structure.",
        rationale: "This requires external validation libraries or TypeScript.",
        isCorrect: false,
      },
    ],
    hint: "This method is the final step after receiving a string of data from an API.",
  },
  {
    id: 98,
    topic: "JavaScript",
    question:
      "How can you modify the content of an HTML element with the ID 'message' using JavaScript?",
    answerOptions: [
      {
        text: "document.getElementById('message').value = 'New text';",
        rationale: "`.value` is primarily for form inputs.",
        isCorrect: false,
      },
      {
        text: "document.getElementById('message').textContent = 'New text';",
        rationale:
          "This property correctly sets the text content of the element, stripping out any HTML tags.",
        isCorrect: true,
      },
      {
        text: "document.getElementById('message').content = 'New text';",
        rationale: "The property name is incorrect.",
        isCorrect: false,
      },
      {
        text: "document.getElementById('message').html = 'New text';",
        rationale: "The property name is `.innerHTML` if including HTML.",
        isCorrect: false,
      },
    ],
    hint: "This property is generally safer than `.innerHTML` as it prevents cross-site scripting (XSS) attacks.",
  },
  {
    id: 99,
    topic: "JavaScript",
    question:
      "The `catch` block in a `Promise` chain or `try...catch` statement is used for what?",
    answerOptions: [
      {
        text: "To execute code that should always run, regardless of success or failure.",
        rationale: "This is the job of the `finally` block.",
        isCorrect: false,
      },
      {
        text: "To define the operation that will be executed if the Promise successfully resolves.",
        rationale: "This is the job of the `then` block.",
        isCorrect: false,
      },
      {
        text: "To handle any errors or rejections that occur during the preceding synchronous or asynchronous operation.",
        rationale:
          "The `catch` block intercepts and handles exceptions or rejected Promises.",
        isCorrect: true,
      },
      {
        text: "To define the initial value of the Promise before execution begins.",
        rationale:
          "The initial value is defined when creating the Promise object.",
        isCorrect: false,
      },
    ],
    hint: "This block is essential for gracefully managing failures.",
  },
  {
    id: 100,
    topic: "JavaScript",
    question:
      "In a `for` loop defined as `for (let i = 0; i < 5; i++)`, what is the final value of the `i` variable immediately after the loop finishes executing?",
    answerOptions: [
      {
        text: "4",
        rationale:
          "The loop executes up to `i=4`. The next increment to `i=5` causes the condition `i < 5` to fail, and the loop breaks.",
        isCorrect: false,
      },
      {
        text: "5",
        rationale:
          "The loop breaks when `i` is incremented to 5, as the condition `i < 5` becomes false. The variable holds this final value.",
        isCorrect: true,
      },
      {
        text: "undefined",
        rationale: "`i` is defined using `let` and holds its final value.",
        isCorrect: false,
      },
      {
        text: "0",
        rationale: "0 is the starting value.",
        isCorrect: false,
      },
    ],
    hint: "The loop stops *after* the increment step fails the condition.",
  },
  {
    id: 101,
    topic: "JavaScript",
    question:
      "What is the result of using the **logical AND** operator (`&&`) in an expression like `true && 'hello'`?",
    answerOptions: [
      {
        text: "true",
        rationale:
          "Logical AND returns the value of the second operand if the first operand is truthy.",
        isCorrect: false,
      },
      {
        text: "'hello'",
        rationale:
          "When using `&&`, if the first operand is truthy, it returns the second operand.",
        isCorrect: true,
      },
      {
        text: "false",
        rationale: "Both operands are truthy, so `false` is incorrect.",
        isCorrect: false,
      },
      {
        text: "Error",
        rationale: "JavaScript allows this through short-circuit evaluation.",
        isCorrect: false,
      },
    ],
    hint: "This is a form of short-circuit evaluation that returns a value, not necessarily a Boolean.",
  },
  {
    id: 102,
    topic: "JavaScript",
    question:
      "Which array method returns a **Boolean** value indicating whether *at least one* element in the array satisfies a provided testing function?",
    answerOptions: [
      {
        text: "includes()",
        rationale:
          "Checks if an element *exists* in the array, but doesn't run a testing function.",
        isCorrect: false,
      },
      {
        text: "every()",
        rationale: "Checks if *all* elements satisfy the test.",
        isCorrect: false,
      },
      {
        text: "some()",
        rationale:
          "The `some()` method returns `true` if it finds a matching element, and `false` otherwise.",
        isCorrect: true,
      },
      {
        text: "filter()",
        rationale: "Returns a new array (a subset).",
        isCorrect: false,
      },
    ],
    hint: "The method name implies partial fulfillment of the condition.",
  },
  {
    id: 103,
    topic: "JavaScript",
    question:
      "The `window.setTimeout()` function is asynchronous. What does it return?",
    answerOptions: [
      {
        text: "A Promise that resolves after the specified delay.",
        rationale: "It returns a numeric ID, not a Promise.",
        isCorrect: false,
      },
      {
        text: "The result of the callback function execution.",
        rationale:
          "The result of the callback is returned much later, and `setTimeout` itself returns an ID.",
        isCorrect: false,
      },
      {
        text: "A unique numeric ID that can be used later to cancel the execution.",
        rationale: "This ID is used with `clearTimeout()`.",
        isCorrect: true,
      },
      {
        text: "undefined",
        rationale: "It returns a number.",
        isCorrect: false,
      },
    ],
    hint: "This is the token needed if you want to abort the scheduled task.",
  },
  {
    id: 104,
    topic: "JavaScript",
    question:
      "Which of the following is the standard method for removing a DOM element named `myElement` from its parent?",
    answerOptions: [
      {
        text: "myElement.remove();",
        rationale:
          "The modern, concise method to remove an element from the DOM.",
        isCorrect: true,
      },
      {
        text: "myElement.delete();",
        rationale: "`delete` is used for object properties.",
        isCorrect: false,
      },
      {
        text: "myElement.parentElement.removeChild(myElement);",
        rationale:
          "This is the older, verbose method; `remove()` is preferred.",
        isCorrect: false,
      },
      {
        text: "document.removeChild(myElement);",
        rationale:
          "The element must be removed from its immediate parent, not the `document` object.",
        isCorrect: false,
      },
    ],
    hint: "This method is simple and acts directly on the element itself.",
  },
  {
    id: 105,
    topic: "JavaScript",
    question:
      "What is the purpose of the **Spread Syntax** (`...`) when used with an object literal, such as `{ ...obj1, ...obj2 }`?",
    answerOptions: [
      {
        text: "To create a deep clone of the objects, including nested properties.",
        rationale:
          "It creates a shallow copy; deep cloning requires extra methods.",
        isCorrect: false,
      },
      {
        text: "To combine the properties of multiple objects into a new single object.",
        rationale:
          "The spread syntax iterates over the properties and copies them to the new object.",
        isCorrect: true,
      },
      {
        text: "To convert the object into a JSON string for transmission.",
        rationale: "This is the job of `JSON.stringify()`.",
        isCorrect: false,
      },
      {
        text: "To reference a function that should be executed immediately.",
        rationale: "This is unrelated to function execution.",
        isCorrect: false,
      },
    ],
    hint: "This is the modern, immutable way to merge objects.",
  },
  {
    id: 106,
    topic: "JavaScript",
    question:
      "How do you access the third element (index 2) of an array named `data`?",
    answerOptions: [
      {
        text: "data[3]",
        rationale:
          "Array indices are zero-based, so index 3 is the fourth element.",
        isCorrect: false,
      },
      {
        text: "data.at(2)",
        rationale: "`data.at()` is a modern method, and index 2 is correct.",
        isCorrect: true,
      },
      {
        text: "data.get(3)",
        rationale: "Not a standard method for arrays.",
        isCorrect: false,
      },
      {
        text: "data.index[2]",
        rationale: "Incorrect syntax.",
        isCorrect: false,
      },
    ],
    hint: "The index starts at 0, so the third item is index 2. Both bracket notation and the modern method work.",
  },
  {
    id: 107,
    topic: "JavaScript",
    question:
      "What happens if a variable declared with `const` holds a complex object (e.g., `{ count: 1 }`) and you try to reassign one of its properties?",
    answerOptions: [
      {
        text: "The entire program throws a `TypeError` because `const` prevents all mutation.",
        rationale:
          "`const` prevents reassignment of the variable, not mutation of the object it holds.",
        isCorrect: false,
      },
      {
        text: "The reassignment fails silently, and the property value remains unchanged.",
        rationale: "The change is successful and is not silent.",
        isCorrect: false,
      },
      {
        text: "The object property can be successfully modified (e.g., `obj.count = 2`), but the variable itself cannot be reassigned.",
        rationale:
          "`const` only protects the binding (the reference to the object), not the contents of the object itself.",
        isCorrect: true,
      },
      {
        text: "The JavaScript engine automatically converts the variable to `let` to allow mutation.",
        rationale: "Automatic conversion does not happen.",
        isCorrect: false,
      },
    ],
    hint: "The keyword protects the 'box' containing the object, not the 'contents' of the object.",
  },
  {
    id: 108,
    topic: "JavaScript",
    question:
      "When attaching an event listener, the event object passed to the callback function contains what method to stop the event from affecting elements further up the DOM tree?",
    answerOptions: [
      {
        text: "event.preventDefault()",
        rationale:
          "This stops the browser's default action (e.g., form submission).",
        isCorrect: false,
      },
      {
        text: "event.breakPropagation()",
        rationale: "Incorrect method name.",
        isCorrect: false,
      },
      {
        text: "event.stopPropagation()",
        rationale:
          "This method prevents the event from bubbling up to parent elements.",
        isCorrect: true,
      },
      {
        text: "event.cancelBubble()",
        rationale: "An older, non-standard property.",
        isCorrect: false,
      },
    ],
    hint: "This method prevents the event from 'bubbling' up the DOM tree.",
  },
  {
    id: 109,
    topic: "JavaScript",
    question: "What is the primary function of the `document.write()` method?",
    answerOptions: [
      {
        text: "To log output to the browser's developer console.",
        rationale: "This is the function of `console.log()`.",
        isCorrect: false,
      },
      {
        text: "To write dynamic HTML or text directly to the document *stream*, potentially overwriting all existing content.",
        rationale:
          "The method is rarely used in modern JS because it can dangerously overwrite the entire page if called after the page has finished loading.",
        isCorrect: true,
      },
      {
        text: "To create a new file on the user's local file system.",
        rationale:
          "Client-side JS cannot write arbitrary files to the user's system.",
        isCorrect: false,
      },
      {
        text: "To define the `doctype` and root structure of the HTML document.",
        rationale: "This is done in the HTML source file.",
        isCorrect: false,
      },
    ],
    hint: "This method is often discouraged due to its powerful and potentially destructive behavior.",
  },
  {
    id: 110,
    topic: "JavaScript",
    question: "Which operator is used to check the data type of a variable?",
    answerOptions: [
      {
        text: "isTypeOf",
        rationale: "Incorrect syntax.",
        isCorrect: false,
      },
      {
        text: "instanceof",
        rationale:
          "Checks if an object is an instance of a specific constructor.",
        isCorrect: false,
      },
      {
        text: "typeof",
        rationale:
          "The `typeof` operator returns a string indicating the data type of the unevaluated operand.",
        isCorrect: true,
      },
      {
        text: "dataType",
        rationale: "Not a standard operator.",
        isCorrect: false,
      },
    ],
    hint: "Be aware that this operator returns 'object' for arrays and null.",
  },
  {
    id: 111,
    topic: "JavaScript",
    question: "What is the purpose of the `trim()` method on a String object?",
    answerOptions: [
      {
        text: "To truncate the string to a maximum length.",
        rationale:
          "This is the job of methods like `substring()` or `slice()`.",
        isCorrect: false,
      },
      {
        text: "To remove leading and trailing whitespace characters from the string.",
        rationale:
          "The `trim()` method is the standard way to clean up user input whitespace.",
        isCorrect: true,
      },
      {
        text: "To remove all spaces and special characters from the string.",
        rationale:
          "It only targets leading/trailing whitespace, not all spaces or characters.",
        isCorrect: false,
      },
      {
        text: "To return the length of the string after removing spaces.",
        rationale:
          "It returns the modified string; `length` is a property to get the size.",
        isCorrect: false,
      },
    ],
    hint: "This is useful for sanitizing user input fields.",
  },
  {
    id: 112,
    topic: "JavaScript",
    question:
      "Which operator performs Nullish Coalescing, returning the right-hand operand only when the left-hand operand is `null` or `undefined`?",
    answerOptions: [
      {
        text: "|| (Logical OR)",
        rationale:
          "Returns the right-hand side if the left is *any* falsy value (0, '', false, null, undefined).",
        isCorrect: false,
      },
      {
        text: "?? (Nullish Coalescing)",
        rationale:
          "The `??` operator specifically checks for only `null` or `undefined`, allowing 0 or '' to be returned.",
        isCorrect: true,
      },
      {
        text: "&& (Logical AND)",
        rationale: "Returns the right-hand side only if the left is truthy.",
        isCorrect: false,
      },
      {
        text: "!! (Double Negation)",
        rationale: "Used to convert any value to its boolean equivalent.",
        isCorrect: false,
      },
    ],
    hint: "This modern operator is much safer than the Logical OR operator when dealing with numeric zeros or empty strings.",
  },
  {
    id: 113,
    topic: "JavaScript",
    question: "What is **event bubbling** in the DOM event system?",
    answerOptions: [
      {
        text: "When an event is handled by the target element and then propagates up to its ancestor elements.",
        rationale:
          "Bubbling is the default phase where the event travels from the target back up to the root of the document.",
        isCorrect: true,
      },
      {
        text: "When an event is captured by the root of the document and then propagates down to the target element.",
        rationale: "This describes the **Capturing** phase.",
        isCorrect: false,
      },
      {
        text: "A mechanism that automatically executes code after a network request completes.",
        rationale: "This is handled by Promises/fetch.",
        isCorrect: false,
      },
      {
        text: "The process of animating an element's position on the screen.",
        rationale: "This is handled by CSS transitions or JS animations.",
        isCorrect: false,
      },
    ],
    hint: "This is the default direction of an event's path in the DOM.",
  },
  {
    id: 114,
    topic: "JavaScript",
    question:
      "How do you correctly define a function named `calculateSum` that takes two parameters, `a` and `b`, using **traditional function declaration** syntax?",
    answerOptions: [
      {
        text: "const calculateSum = (a, b) => { ... }",
        rationale: "This is Arrow Function syntax.",
        isCorrect: false,
      },
      {
        text: "function (a, b): calculateSum { ... }",
        rationale: "Incorrect syntax.",
        isCorrect: false,
      },
      {
        text: "function calculateSum(a, b) { ... }",
        rationale:
          "This is the proper traditional function declaration syntax, which is hoisted.",
        isCorrect: true,
      },
      {
        text: "let calculateSum = a, b => { ... }",
        rationale: "Incorrect syntax and keyword usage.",
        isCorrect: false,
      },
    ],
    hint: "This syntax benefits from being hoisted to the top of its scope.",
  },
  {
    id: 115,
    topic: "JavaScript",
    question:
      "Which object property is used to get or set all the HTML content (including tags) within an element?",
    answerOptions: [
      {
        text: "textContent",
        rationale: "Gets/sets only the *text* content, excluding HTML tags.",
        isCorrect: false,
      },
      {
        text: "innerText",
        rationale: "Similar to `textContent`, but considers rendering layout.",
        isCorrect: false,
      },
      {
        text: "innerHTML",
        rationale:
          "The `innerHTML` property gets or sets the HTML markup content inside an element.",
        isCorrect: true,
      },
      {
        text: "content",
        rationale: "Not a standard DOM property for this purpose.",
        isCorrect: false,
      },
    ],
    hint: "Be cautious using this property when dealing with user-provided input, as it can lead to XSS attacks.",
  },
  {
    id: 116,
    topic: "React",
    question:
      "What is React primarily defined as, according to the official documentation quoted by the course?",
    answerOptions: [
      {
        text: "A complete Model-View-Controller (MVC) framework for front-end development.",
        rationale:
          "React is specifically defined as a library for building user interfaces (the 'View' layer), not a full framework.",
        isCorrect: false,
      },
      {
        text: "A styling solution that compiles CSS into JavaScript objects.",
        rationale: "React handles UI and logic, not primarily styling.",
        isCorrect: false,
      },
      {
        text: "A JavaScript library for building user interfaces.",
        rationale:
          "The course quotes reactjs.org's definition of React as a UI library.",
        isCorrect: true,
      },
      {
        text: "A server-side runtime environment for executing JavaScript.",
        rationale: "This is the definition of Node.js.",
        isCorrect: false,
      },
    ],
    hint: "Focus on its official designation as a software tool.",
  },
  {
    id: 117,
    topic: "React",
    question:
      "React is based around creating reusable units that contain both markup (HTML) and logic (JavaScript). What is the term for these units?",
    answerOptions: [
      {
        text: "Modules",
        rationale:
          "Modules are general files for organization, but not the specific reusable UI units.",
        isCorrect: false,
      },
      {
        text: "Classes",
        rationale:
          "React can use classes, but the term for the UI unit itself is component.",
        isCorrect: false,
      },
      {
        text: "Fragments",
        rationale:
          "Fragments are structural wrappers, not the main reusable units.",
        isCorrect: false,
      },
      {
        text: "Components",
        rationale:
          "Components are the core building blocks of any React application, combining UI and behavior.",
        isCorrect: true,
      },
    ],
    hint: "The concept is often compared to building with LEGO bricks.",
  },
  {
    id: 118,
    topic: "React",
    question:
      "One of React's properties is **Declarative**. What does this mean in practice?",
    answerOptions: [
      {
        text: "We explicitly tell React every single step to update the DOM (Imperative).",
        rationale:
          "This describes **Imperative** programming, which React aims to replace.",
        isCorrect: false,
      },
      {
        text: "We tell React how we want the application to behave, and React manages the underlying DOM changes.",
        rationale:
          "The declarative approach focuses on the desired *state* of the UI, rather than the steps to get there.",
        isCorrect: true,
      },
      {
        text: "All component logic must be written using pure functions.",
        rationale:
          "While preferred, this is related to immutability, not the declarative property itself.",
        isCorrect: false,
      },
      {
        text: "All application data must be defined globally before components can use it.",
        rationale:
          "This relates to state management, not the declarative property.",
        isCorrect: false,
      },
    ],
    hint: "The focus is on the *what* (the end state), not the *how* (the steps).",
  },
  {
    id: 119,
    topic: "React",
    question:
      "Which term describes the ability to combine encapsulated components to build complex user interfaces in React, similar to building with LEGOs?",
    answerOptions: [
      {
        text: "Inheritance",
        rationale:
          "Inheritance is a concept from Object-Oriented Programming (OOP).",
        isCorrect: false,
      },
      {
        text: "Encapsulation",
        rationale:
          "Encapsulation means containing markup and logic within the component, but Composition is the act of combining them.",
        isCorrect: false,
      },
      {
        text: "Modularity",
        rationale:
          "Modularity is a general concept; the specific React term is Composable.",
        isCorrect: false,
      },
      {
        text: "Composability",
        rationale:
          "Composability (or composable) is a key property of React, allowing developers to create complex UIs by nesting simple, reusable components.",
        isCorrect: true,
      },
    ],
    hint: "This concept is about how components are combined to form the final UI.",
  },
  {
    id: 120,
    topic: "React",
    question:
      "What is a primary advantage of React related to performance optimization for user interfaces?",
    answerOptions: [
      {
        text: "It automatically converts all CSS to be rendered on the server.",
        rationale:
          "React's performance benefit is related to DOM updates, not CSS rendering location.",
        isCorrect: false,
      },
      {
        text: "It minimizes direct DOM operations when updating the UI.",
        rationale:
          "React uses the Virtual DOM and an efficient reconciliation algorithm to apply minimal changes to the actual DOM, leading to faster updates.",
        isCorrect: true,
      },
      {
        text: "It eliminates the need for JavaScript entirely by using components.",
        rationale: "React is a JavaScript library.",
        isCorrect: false,
      },
      {
        text: "It forces all data fetching to be done synchronously.",
        rationale:
          "Asynchronous fetching is standard practice for modern performance.",
        isCorrect: false,
      },
    ],
    hint: "This relates to the efficiency of rendering changes to the browser window.",
  },
  {
    id: 121,
    topic: "React",
    question:
      "JSX is the syntax extension used in React to embed markup and logic. What does JSX stand for?",
    answerOptions: [
      {
        text: "JavaScript Extended",
        rationale: "The name is similar but incorrect.",
        isCorrect: false,
      },
      {
        text: "JavaScript XML",
        rationale:
          "JSX allows writing XML-like syntax directly within JavaScript code.",
        isCorrect: true,
      },
      {
        text: "Java Syntax Extension",
        rationale: "React is based on JavaScript, not Java.",
        isCorrect: false,
      },
      {
        text: "Joint Scripting XAML",
        rationale: "Incorrect technology and syntax.",
        isCorrect: false,
      },
    ],
    hint: "This syntax is a blend of JavaScript and a common markup language format.",
  },
  {
    id: 122,
    topic: "React",
    question:
      "What is the primary mechanism for passing read-only data from a parent component to a child component in React?",
    answerOptions: [
      {
        text: "State",
        rationale: "State is data managed *internally* by a component.",
        isCorrect: false,
      },
      {
        text: "Refs",
        rationale:
          "Refs are used for accessing the DOM or component instances directly.",
        isCorrect: false,
      },
      {
        text: "Props",
        rationale:
          "Props (properties) are the mechanism for transferring data downward in the component tree.",
        isCorrect: true,
      },
      {
        text: "Context",
        rationale:
          "Context is for passing data through many levels without prop drilling, but Props is the primary mechanism for parent-child.",
        isCorrect: false,
      },
    ],
    hint: "This term represents the component's external properties.",
  },
  {
    id: 123,
    topic: "React",
    question:
      "In React functional components, which Hook is used to manage and trigger re-renders based on local component data?",
    answerOptions: [
      {
        text: "useEffect",
        rationale:
          "Used for side effects (e.g., data fetching, manual DOM changes).",
        isCorrect: false,
      },
      {
        text: "useContext",
        rationale: "Used for consuming context.",
        isCorrect: false,
      },
      {
        text: "useReducer",
        rationale: "Used for managing complex state logic.",
        isCorrect: false,
      },
      {
        text: "useState",
        rationale:
          "The `useState` Hook provides state variables and a setter function to update them, triggering a re-render.",
        isCorrect: true,
      },
    ],
    hint: "This Hook is the most fundamental way to give a functional component memory.",
  },
  {
    id: 124,
    topic: "React",
    question: "What does the `useState` Hook return?",
    answerOptions: [
      {
        text: "A single object containing the current state value and all component methods.",
        rationale: "It returns an array of two items.",
        isCorrect: false,
      },
      {
        text: "An array containing the current state value and a function to update it.",
        rationale:
          "This array destructuring pattern is standard: `[value, setValue]`.",
        isCorrect: true,
      },
      {
        text: "A Promise that resolves with the next state value.",
        rationale: "State updates are scheduled, not handled via Promises.",
        isCorrect: false,
      },
      {
        text: "The entire component's JSX output.",
        rationale: "The JSX output is what the function returns.",
        isCorrect: false,
      },
    ],
    hint: "The return value is typically immediately destructured into two separate variables.",
  },
  {
    id: 125,
    topic: "React",
    question:
      "What is the primary rule for the data flow between parent and child components in React?",
    answerOptions: [
      {
        text: "Bidirectional flow: Child components can directly modify parent component props.",
        rationale: "Props are read-only, making the flow unidirectional.",
        isCorrect: false,
      },
      {
        text: "Side-to-side flow: Data must be passed between sibling components first.",
        rationale: "Siblings pass data via a common ancestor.",
        isCorrect: false,
      },
      {
        text: "Unidirectional flow: Data is passed down via props, and events/callbacks are used to communicate changes up.",
        rationale:
          "This top-down, one-way flow is a core architectural principle of React.",
        isCorrect: true,
      },
      {
        text: "Global flow: All data must be placed in Context before use.",
        rationale: "Global state is optional, not mandatory.",
        isCorrect: false,
      },
    ],
    hint: "This principle is often described as 'one-way data binding'.",
  },
  {
    id: 126,
    topic: "React",
    question:
      "Which component type, common in older React code, extends `React.Component` and includes lifecycle methods like `componentDidMount`?",
    answerOptions: [
      {
        text: "Functional Component",
        rationale: "Functional components use Hooks for state and lifecycle.",
        isCorrect: false,
      },
      {
        text: "High Order Component (HOC)",
        rationale:
          "HOCs are functions that take a component and return a new component.",
        isCorrect: false,
      },
      {
        text: "Class Component",
        rationale:
          "Class Components rely on the `class` syntax and lifecycle methods.",
        isCorrect: true,
      },
      {
        text: "Stateful Component",
        rationale:
          "This is a descriptive term, not a type (both functional and class can be stateful).",
        isCorrect: false,
      },
    ],
    hint: "This type of component uses the JavaScript `class` keyword.",
  },
  {
    id: 127,
    topic: "React",
    question:
      "Which of the following is a key reason the course notes suggest using React to build DHIS2 applications?",
    answerOptions: [
      {
        text: "React is the only JavaScript library that supports mobile development.",
        rationale:
          "Other libraries also support mobile, but this isn't the key reason provided.",
        isCorrect: false,
      },
      {
        text: "React is specifically optimized for DHIS2 database queries.",
        rationale:
          "React is UI-focused; optimization is done via dedicated DHIS2 libraries.",
        isCorrect: false,
      },
      {
        text: "React simplifies the creation of complex applications by allowing HTML and JavaScript logic to be combined.",
        rationale:
          "The course notes explicitly state this combination makes complex applications easier to manage than separate files.",
        isCorrect: true,
      },
      {
        text: "React provides built-in tools for CSS pre-processing.",
        rationale: "CSS pre-processing is external to React.",
        isCorrect: false,
      },
    ],
    hint: "This relates to the file organization and maintenance of code.",
  },
  {
    id: 128,
    topic: "React",
    question:
      "What is the correct way to embed a JavaScript variable named `username` inside JSX?",
    answerOptions: [
      {
        text: "<p>{username}</p>",
        rationale:
          "Curly braces are the standard way to escape JSX and inject a JavaScript expression.",
        isCorrect: true,
      },
      {
        text: "<p>$(username)</p>",
        rationale:
          "This is a syntax used in some template languages, but not JSX.",
        isCorrect: false,
      },
      {
        text: '<p>"username"</p>',
        rationale: "This displays the literal string 'username'.",
        isCorrect: false,
      },
      {
        text: "<p>[[username]]</p>",
        rationale: "Incorrect syntax.",
        isCorrect: false,
      },
    ],
    hint: "This mechanism is essential for rendering dynamic data.",
  },
  {
    id: 129,
    topic: "React",
    question: "What is the purpose of the **Virtual DOM** in React?",
    answerOptions: [
      {
        text: "To serve as a persistent backend database for component data.",
        rationale: "The VDOM is memory-based for rendering.",
        isCorrect: false,
      },
      {
        text: "To cache external API responses for faster data fetching.",
        rationale: "This is a function of a network cache.",
        isCorrect: false,
      },
      {
        text: "To maintain a lightweight, in-memory representation of the actual DOM, optimizing updates.",
        rationale:
          "React uses the VDOM to compare the previous and current state, minimizing expensive updates to the browser's slow native DOM.",
        isCorrect: true,
      },
      {
        text: "To provide a secure layer for transferring data between components.",
        rationale: "Security is handled by other mechanisms.",
        isCorrect: false,
      },
    ],
    hint: "This data structure is key to React's performance advantage.",
  },
  {
    id: 130,
    topic: "React",
    question:
      "In a functional component, what is the correct way to ensure the `useEffect` Hook runs only *once* after the initial render (similar to `componentDidMount`)?",
    answerOptions: [
      {
        text: "By omitting the dependency array entirely.",
        rationale:
          "Omitting the array causes the effect to run after *every* render.",
        isCorrect: false,
      },
      {
        text: "By setting the second argument to `false`.",
        rationale: "The dependency array is not a boolean flag.",
        isCorrect: false,
      },
      {
        text: "By providing an empty dependency array (`[]`).",
        rationale:
          "The empty array tells React that the effect has no dependencies that will change, so it only needs to run on mount.",
        isCorrect: true,
      },
      {
        text: "By using the `useMountEffect` Hook instead.",
        rationale: "This is not a built-in React Hook.",
        isCorrect: false,
      },
    ],
    hint: "This array tells React to only run the effect if the listed values have changed.",
  },
  {
    id: 131,
    topic: "React",
    question:
      "When defining an event handler in JSX (e.g., `onClick`), what is the case convention used?",
    answerOptions: [
      {
        text: "snake_case (e.g., `on_click`)",
        rationale: "Not the convention.",
        isCorrect: false,
      },
      {
        text: "kebab-case (e.g., `on-click`)",
        rationale: "Kebab-case is used for standard HTML attributes.",
        isCorrect: false,
      },
      {
        text: "lowercase (e.g., `onclick`)",
        rationale:
          "Lowercase is used for standard HTML event attributes (e.g., `<button onclick='...'>`), but React uses camelCase.",
        isCorrect: false,
      },
      {
        text: "camelCase (e.g., `onClick`)",
        rationale:
          "React converts all standard DOM event names to camelCase for use in JSX.",
        isCorrect: true,
      },
    ],
    hint: "This convention matches standard JavaScript style for methods and properties.",
  },
  {
    id: 132,
    topic: "React",
    question:
      "What is the primary purpose of the `key` prop when rendering a list of components (e.g., using `map`)?",
    answerOptions: [
      {
        text: "To provide a unique CSS selector for styling each item.",
        rationale: "CSS selection is done via `id` or `class`.",
        isCorrect: false,
      },
      {
        text: "To define the sort order of the list items on the screen.",
        rationale: "Sorting must be done on the array data *before* rendering.",
        isCorrect: false,
      },
      {
        text: "To help React efficiently identify which list items have changed, been added, or been deleted.",
        rationale:
          "The `key` provides a stable identity, critical for the reconciliation process.",
        isCorrect: true,
      },
      {
        text: "To pass the index of the item to the child component.",
        rationale:
          "The index can be passed as a prop, but the `key` is special for React's internal use.",
        isCorrect: false,
      },
    ],
    hint: "This prop is used internally by the Virtual DOM algorithm.",
  },
  {
    id: 133,
    topic: "React",
    question:
      "Which statement best describes the term **Props Immutability** in React?",
    answerOptions: [
      {
        text: "Props can be modified by the parent component at any time, but not by the child.",
        rationale:
          "The parent can pass new props, but the child cannot modify them.",
        isCorrect: false,
      },
      {
        text: "Props must be defined using the `const` keyword in the parent component.",
        rationale:
          "While preferred, this isn't the core principle of immutability.",
        isCorrect: false,
      },
      {
        text: "Props are read-only and should never be modified by the child component that receives them.",
        rationale:
          "A component must treat its props as fixed and immutable to ensure predictable state flow.",
        isCorrect: true,
      },
      {
        text: "Props must always contain primitive data types (strings, numbers, booleans).",
        rationale: "Props can contain objects and functions.",
        isCorrect: false,
      },
    ],
    hint: "The data passed down is fixed; if it needs to change, the parent must provide a new value.",
  },
  {
    id: 134,
    topic: "React",
    question:
      'In the JSX expression `className="header"`, why is `className` used instead of the standard HTML attribute `class`?',
    answerOptions: [
      {
        text: "`class` is a reserved keyword in JavaScript, so React uses `className` to avoid conflicts.",
        rationale:
          "Since JSX is JavaScript, using reserved words like `class` or `for` is avoided.",
        isCorrect: true,
      },
      {
        text: "`className` is a specific React component property for styling.",
        rationale: "It maps directly to the HTML `class` attribute.",
        isCorrect: false,
      },
      {
        text: "The Virtual DOM only supports attributes starting with `class`.",
        rationale: "Incorrect; the VDOM supports standard HTML attributes.",
        isCorrect: false,
      },
      {
        text: "It is an older syntax used before HTML5 was adopted by React.",
        rationale: "It is the current, modern syntax.",
        isCorrect: false,
      },
    ],
    hint: "This is necessary because of a conflict with a fundamental JavaScript concept.",
  },
  {
    id: 135,
    topic: "React",
    question:
      "What is the primary role of the cleanup function returned by `useEffect`?",
    answerOptions: [
      {
        text: "To define the next state value after the effect runs.",
        rationale: "The state setter handles the next value.",
        isCorrect: false,
      },
      {
        text: "To execute synchronous code before the component first mounts.",
        rationale: "The cleanup runs on unmount or before the next effect.",
        isCorrect: false,
      },
      {
        text: "To reverse side effects (e.g., unsubscribe from a timer or remove event listeners) when the component unmounts or before the effect re-runs.",
        rationale:
          "Cleanup prevents memory leaks by reversing setup operations.",
        isCorrect: true,
      },
      {
        text: "To prevent the component from re-rendering if props are unchanged.",
        rationale:
          "This is the job of `React.memo` or `shouldComponentUpdate`.",
        isCorrect: false,
      },
    ],
    hint: "This function is crucial for preventing memory leaks in components that perform subscriptions or setup external resources.",
  },
  {
    id: 136,
    topic: "React",
    question:
      "Which Hook is designed to optimize performance by memoizing (caching) the return value of a function, re-calculating only when dependencies change?",
    answerOptions: [
      {
        text: "useCallback",
        rationale: "Memoizes the function definition itself, not its result.",
        isCorrect: false,
      },
      {
        text: "useMemo",
        rationale:
          "The `useMemo` Hook is used to calculate and cache a value that is only recomputed when one of its dependencies changes.",
        isCorrect: true,
      },
      {
        text: "useRef",
        rationale: "Used for direct access to the DOM or mutable values.",
        isCorrect: false,
      },
      {
        text: "useLayoutEffect",
        rationale: "Used for synchronous DOM changes.",
        isCorrect: false,
      },
    ],
    hint: "The name implies remembering or caching a calculated value.",
  },
  {
    id: 137,
    topic: "React",
    question: "What is the purpose of the `useRef` Hook?",
    answerOptions: [
      {
        text: "To store a value that triggers a re-render when changed.",
        rationale: "This is the function of `useState`.",
        isCorrect: false,
      },
      {
        text: "To perform asynchronous data fetching from an API.",
        rationale: "This is done via `useEffect` and `fetch`.",
        isCorrect: false,
      },
      {
        text: "To access the DOM element directly or to store a mutable value that does *not* cause a re-render when changed.",
        rationale:
          "The `current` property of the ref object is mutable and is commonly used to interact with the underlying DOM node or keep a mutable value.",
        isCorrect: true,
      },
      {
        text: "To manage global application state for the entire component tree.",
        rationale: "This is the function of the Context API.",
        isCorrect: false,
      },
    ],
    hint: "This Hook is essential when you need to bypass React's declarative flow.",
  },
  {
    id: 138,
    topic: "React",
    question:
      "What is the consequence of updating a component's state using the setter function from `useState`?",
    answerOptions: [
      {
        text: "The entire application reloads from the server.",
        rationale:
          "State changes only trigger re-renders of the component tree.",
        isCorrect: false,
      },
      {
        text: "The component is immediately unmounted and remounted.",
        rationale: "The component is re-rendered, not unmounted.",
        isCorrect: false,
      },
      {
        text: "React schedules a re-render of the component and its child components.",
        rationale:
          "The update function tells React to re-run the component function with the new state value.",
        isCorrect: true,
      },
      {
        text: "Only the component's internal data is updated, and the UI remains unchanged.",
        rationale: "The UI change is the entire purpose of the state update.",
        isCorrect: false,
      },
    ],
    hint: "The setter function is the bridge from data change to UI update.",
  },
  {
    id: 139,
    topic: "React",
    question:
      "Which method is commonly passed as a prop from a parent to a child component to allow the child to communicate a change back up to the parent?",
    answerOptions: [
      {
        text: "A standard data variable (string or number).",
        rationale: "Data variables are read-only.",
        isCorrect: false,
      },
      {
        text: "A callback function defined in the parent component.",
        rationale:
          "The child calls this function, passing data back, and the parent executes the function to handle the state change.",
        isCorrect: true,
      },
      {
        text: "The parent's `useState` setter function directly.",
        rationale:
          "While possible, a custom wrapper function is often preferred for encapsulation.",
        isCorrect: false,
      },
      {
        text: "An imported external utility function.",
        rationale:
          "The function must be defined in the parent to access the parent's state.",
        isCorrect: false,
      },
    ],
    hint: "This preserves the unidirectional data flow principle.",
  },
  {
    id: 140,
    topic: "React",
    question:
      "What is the primary role of the `key` prop in a list of rendered elements?",
    answerOptions: [
      {
        text: "To define the initial value of the list element's state.",
        rationale: "State is defined internally.",
        isCorrect: false,
      },
      {
        text: "To provide a stable identity for each element, improving DOM reconciliation performance.",
        rationale:
          "The key helps React manage the identity and ordering of dynamic children.",
        isCorrect: true,
      },
      {
        text: "To force the component to re-render on every state change.",
        rationale:
          "The key helps *prevent* unnecessary re-renders when ordering changes.",
        isCorrect: false,
      },
      {
        text: "To pass the element's index to the child component as a prop.",
        rationale:
          "The index can be passed as a prop, but the key is for React's internal use.",
        isCorrect: false,
      },
    ],
    hint: "The value must be unique among the element's siblings.",
  },
  {
    id: 141,
    topic: "React",
    question:
      "When conditionally rendering content in React JSX, which standard JavaScript technique is often used for simple `if/else` logic within the return statement?",
    answerOptions: [
      {
        text: "Switch statement (inside JSX)",
        rationale:
          "Switch statements cannot be used directly inside JSX braces.",
        isCorrect: false,
      },
      {
        text: "Logical OR operator (`||`)",
        rationale: "Used for default values, not dual conditional rendering.",
        isCorrect: false,
      },
      {
        text: "Ternary operator (`condition ? <True /> : <False />`)",
        rationale:
          "The ternary operator is compact and is commonly used for conditional rendering within the JSX return.",
        isCorrect: true,
      },
      {
        text: "Traditional `if...else` block (inside JSX)",
        rationale:
          "Traditional `if/else` can be used *before* the return, but not *inside* the JSX braces.",
        isCorrect: false,
      },
    ],
    hint: "This operator has three parts and is often used as a concise replacement for `if...else`.",
  },
  {
    id: 142,
    topic: "React",
    question: "What is the function of the `useContext` Hook?",
    answerOptions: [
      {
        text: "To define a component's local state that is visible to all children.",
        rationale: "This is done via the Context Provider.",
        isCorrect: false,
      },
      {
        text: "To create a global state wrapper that eliminates the need for any props.",
        rationale: "The Hook *consumes* Context, it doesn't create it.",
        isCorrect: false,
      },
      {
        text: "To allow a functional component to consume values provided by a React Context object.",
        rationale:
          "The Hook allows components to access data stored in a Context object higher up the tree without receiving props.",
        isCorrect: true,
      },
      {
        text: "To execute side effects whenever a component is unmounted.",
        rationale: "This is the job of the `useEffect` cleanup function.",
        isCorrect: false,
      },
    ],
    hint: "This Hook is essential for avoiding 'prop drilling' (passing props through many intermediate components).",
  },
  {
    id: 143,
    topic: "React",
    question:
      "By convention, why should React component function names start with a capital letter (e.g., `MyComponent`)?",
    answerOptions: [
      {
        text: "To ensure they are correctly exported as default functions.",
        rationale: "Exporting is independent of capitalization.",
        isCorrect: false,
      },
      {
        text: "To align with standard JavaScript naming conventions for functions.",
        rationale: "Standard JavaScript functions use lowercase camelCase.",
        isCorrect: false,
      },
      {
        text: "To allow React to distinguish them from standard HTML elements (which are lowercase) during JSX compilation.",
        rationale:
          "React treats lowercase names like `<div>` as DOM tags and capitalized names like `<Component>` as custom components.",
        isCorrect: true,
      },
      {
        text: "To provide them with global scope across the application.",
        rationale: "Scope is controlled by imports/exports.",
        isCorrect: false,
      },
    ],
    hint: "This is a syntactic requirement for the JSX compiler.",
  },
  {
    id: 144,
    topic: "React",
    question:
      "Which method is called on the synthetic event object (e.g., in a form `onSubmit` handler) to stop the browser from performing its default action?",
    answerOptions: [
      {
        text: "event.stopPropagation()",
        rationale: "This stops event bubbling.",
        isCorrect: false,
      },
      {
        text: "event.preventDefault()",
        rationale:
          "This method prevents the default browser behavior, such as navigating to a new page after a link click or submitting a form.",
        isCorrect: true,
      },
      {
        text: "event.stopDefault()",
        rationale: "Incorrect method name.",
        isCorrect: false,
      },
      {
        text: "return false",
        rationale:
          "This is an outdated method that does not work reliably in modern React.",
        isCorrect: false,
      },
    ],
    hint: "The name implies stopping the expected, standard behavior.",
  },
  {
    id: 145,
    topic: "React",
    question:
      "What is the advantage of the **Declarative property** of React regarding debugging?",
    answerOptions: [
      {
        text: "It eliminates the need for external debugging tools.",
        rationale: "Debugging tools are still needed.",
        isCorrect: false,
      },
      {
        text: "It makes the code more predictable and debugging easier.",
        rationale:
          "By focusing on state transitions, the code is more predictable, which simplifies identifying bugs.",
        isCorrect: true,
      },
      {
        text: "It forces all console logs to be displayed in a separate panel.",
        rationale: "This is a feature of browser developer tools.",
        isCorrect: false,
      },
      {
        text: "It automatically generates unit tests for all components.",
        rationale: "Tests must be written manually.",
        isCorrect: false,
      },
    ],
    hint: "If you know what state should result in what UI, tracking errors is simpler.",
  },
];

/**
 * Function to get a random subset of 60 questions for the quiz.
 */
export const getShuffledQuizQuestions = (): Question[] => {
  // 1. Shuffle all questions
  const shuffledAll = shuffleArray(ALL_QUIZ_QUESTIONS);
  // 2. Select the first 60 questions for the quiz
  const quizQuestions = shuffledAll.slice(0, 60);
  return quizQuestions;
};
