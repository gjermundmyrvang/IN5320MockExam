import { Question } from "./types";

// Utility function to shuffle an array
const shuffleArray = (array: Question[]) =>
  [...array].sort(() => Math.random() - 0.5);

// The total pool of 80 questions
export const ALL_QUIZ_QUESTIONS: Question[] = [
  // ------------------------------------
  // --- HTML QUESTIONS (IDs 1 - 20) ---
  // ------------------------------------
  {
    id: 1,
    topic: "HTML",
    question: "What is the primary purpose of the <!DOCTYPE html> declaration?",
    answerOptions: [
      {
        text: "To define a global variable for JavaScript.",
        rationale:
          "The DOCTYPE is an instruction for the web browser, not a mechanism for JavaScript variable definition.",
        isCorrect: false,
      },
      {
        text: "To inform the browser about the document type and HTML version.",
        rationale:
          "The declaration is a signal to the web browser to use HTML5 standards mode for rendering the page.",
        isCorrect: true,
      },
      {
        text: "To specify the document's language for search engines.",
        rationale:
          "The language is specified using the `lang` attribute on the `<html>` tag, not the DOCTYPE.",
        isCorrect: false,
      },
      {
        text: "To link an external CSS stylesheet.",
        rationale:
          "External stylesheets are linked using the `<link>` tag within the `<head>` section.",
        isCorrect: false,
      },
    ],
    hint: "It helps the browser decide which set of rules to follow when displaying the page content.",
  },
  {
    id: 2,
    topic: "HTML",
    question:
      "Which HTML5 element should be used to enclose a set of navigation links?",
    answerOptions: [
      {
        text: "<header>",
        rationale:
          "The `<header>` element is for introductory content, typically containing headings or a logo, not exclusively navigation links.",
        isCorrect: false,
      },
      {
        text: "<nav>",
        rationale:
          "The `<nav>` element is specifically designed to contain navigation links for a document or section.",
        isCorrect: true,
      },
      {
        text: "<section>",
        rationale:
          "The `<section>` element is for grouping related content, but `<nav>` is more specific and semantically correct for navigation.",
        isCorrect: false,
      },
      {
        text: "<ul>",
        rationale:
          "While navigation is often presented as an unordered list, the `<nav>` tag provides the correct semantic wrapper.",
        isCorrect: false,
      },
    ],
    hint: "Think about the semantic meaning intended for major site navigation blocks.",
  },
  {
    id: 3,
    topic: "HTML",
    question:
      "Which element is used to group related form elements and give them a caption?",
    answerOptions: [
      {
        text: "<form> and <title>",
        rationale:
          "The `<form>` element encloses the entire form, and `<title>` is for the document's title.",
        isCorrect: false,
      },
      {
        text: "<group> and <name>",
        rationale:
          "`<group>` is not a standard HTML element, and `name` is an attribute for form control data.",
        isCorrect: false,
      },
      {
        text: "<fieldset> and <legend>",
        rationale:
          "The `<fieldset>` element groups controls, and its `<legend>` element provides a caption for the group.",
        isCorrect: true,
      },
      {
        text: "<section> and <h1>",
        rationale:
          "These are general elements for document structure, not specifically for form grouping and captioning.",
        isCorrect: false,
      },
    ],
    hint: "One element creates the border/grouping, and the other names the group.",
  },
  {
    id: 4,
    topic: "HTML",
    question:
      "What is the correct HTML for creating a hyperlink that opens in a new tab?",
    answerOptions: [
      {
        text: '<a href="url" target="new">Link Text</a>',
        rationale:
          'The value `"new"` is not the standard attribute value; `"_blank"` is correct.',
        isCorrect: false,
      },
      {
        text: '<a href="url" newtab>Link Text</a>',
        rationale:
          "`newtab` is not a standard HTML attribute for the anchor tag.",
        isCorrect: false,
      },
      {
        text: '<a href="url" target="_blank">Link Text</a>',
        rationale:
          'The `target="_blank"` attribute instructs the browser to open the linked document in a new browsing context (tab or window).',
        isCorrect: true,
      },
      {
        text: '<a src="url" target="_new">Link Text</a>',
        rationale:
          'Hyperlinks use the `href` attribute, not `src`, and the target value should be `"_blank"`.',
        isCorrect: false,
      },
    ],
    hint: "This is controlled by a specific attribute on the anchor tag.",
  },
  {
    id: 5,
    topic: "HTML",
    question:
      "Which attribute is mandatory for the <img> tag and provides text for accessibility and when the image cannot be displayed?",
    answerOptions: [
      {
        text: "title",
        rationale:
          "The `title` attribute provides a tooltip but is not mandatory and not the primary fallback text.",
        isCorrect: false,
      },
      {
        text: "src",
        rationale:
          "`src` is mandatory to specify the image source, but `alt` provides the accessibility and fallback text.",
        isCorrect: false,
      },
      {
        text: "alt",
        rationale:
          "The `alt` (alternative text) attribute is required for accessibility and is shown if the image fails to load.",
        isCorrect: true,
      },
      {
        text: "data-image",
        rationale:
          "`data-image` is a custom data attribute and has no inherent meaning for accessibility.",
        isCorrect: false,
      },
    ],
    hint: "This attribute is crucial for screen readers and search engine optimization.",
  },
  {
    id: 6,
    topic: "HTML",
    question:
      "Which tags define the body and a standard cell within an HTML table, respectively?",
    answerOptions: [
      {
        text: "<tfootfoot> and <tc>",
        rationale:
          "Neither `<tfootfoot>` nor `<tc>` are standard HTML table elements.",
        isCorrect: false,
      },
      {
        text: "<body> and <datacell>",
        rationale:
          "The standard `<body>` element is for the main document content, and `<datacell>` is not a valid tag.",
        isCorrect: false,
      },
      {
        text: "<tbody> and <td>",
        rationale:
          "`<tbody>` wraps the main content rows, and `<td>` (table data) defines a standard data cell.",
        isCorrect: true,
      },
      {
        text: "<main> and <data>",
        rationale:
          "`<main>` is a document-level element, and `<data>` is for machine-readable content, not standard table cells.",
        isCorrect: false,
      },
    ],
    hint: "Remember the structural components: head, body, and the individual data points.",
  },
  {
    id: 7,
    topic: "HTML",
    question: "Which of the following is a *block-level* element?",
    answerOptions: [
      {
        text: "<span>",
        rationale: "The `<span>` element is an inline-level element.",
        isCorrect: false,
      },
      {
        text: "<a>",
        rationale:
          "The `<a>` (anchor) element is typically an inline-level element.",
        isCorrect: false,
      },
      {
        text: "<strong>",
        rationale: "The `<strong>` element is an inline-level element.",
        isCorrect: false,
      },
      {
        text: "<div>",
        rationale:
          "`<div>` is a generic block-level container, meaning it starts on a new line and takes up the full width available.",
        isCorrect: true,
      },
    ],
    hint: "Block elements typically force a line break before and after them.",
  },
  {
    id: 8,
    topic: "HTML",
    question:
      "How do you specify multiple video sources for different browsers within a <video> element?",
    answerOptions: [
      {
        text: "By using the `fallback` attribute with comma-separated sources.",
        rationale:
          "There is no standard `fallback` attribute for this purpose; multiple `<source>` elements are used instead.",
        isCorrect: false,
      },
      {
        text: "By using multiple <source> elements inside the <video> element.",
        rationale:
          "Multiple `<source>` elements allow the browser to choose the first source it supports.",
        isCorrect: true,
      },
      {
        text: "By adding multiple `src` attributes to the `<video>` tag.",
        rationale:
          "The `src` attribute is singular and only allows one source; the `<source>` tag is necessary for multiple options.",
        isCorrect: false,
      },
      {
        text: "By using CSS `@media` queries to select the correct video file.",
        rationale:
          "Media queries are for styling based on device characteristics, not for selecting video sources.",
        isCorrect: false,
      },
    ],
    hint: "The container element allows for fallback mechanisms for media files.",
  },
  {
    id: 9,
    topic: "HTML",
    question:
      "Which HTML input type is best suited for collecting an email address?",
    answerOptions: [
      {
        text: "text",
        rationale:
          "The `text` type is generic and does not offer the built-in validation of the `email` type.",
        isCorrect: false,
      },
      {
        text: "url",
        rationale: "The `url` type is for web addresses, not email addresses.",
        isCorrect: false,
      },
      {
        text: "email",
        rationale:
          "The `email` input type automatically provides client-side validation for a correctly formatted email address.",
        isCorrect: true,
      },
      {
        text: "address",
        rationale: "`address` is not a standard HTML input type.",
        isCorrect: false,
      },
    ],
    hint: "This type offers built-in validation features directly in the browser.",
  },
  {
    id: 10,
    topic: "HTML",
    question: 'What is the purpose of the <meta charset="UTF-8"> tag?',
    answerOptions: [
      {
        text: "To set the default text size for the document.",
        rationale:
          "Text size is controlled by CSS, typically via the `font-size` property.",
        isCorrect: false,
      },
      {
        text: "To define the character encoding for the HTML document.",
        rationale:
          "UTF-8 is the universally recommended character encoding for most web pages, and this tag specifies it.",
        isCorrect: true,
      },
      {
        text: "To specify the author of the HTML document.",
        rationale:
          'The author is typically specified using a different meta tag, like `<meta name="author" content="...">` .',
        isCorrect: false,
      },
      {
        text: "To enable responsive design by setting the viewport.",
        rationale:
          "The viewport is configured with a separate meta tag, often containing `width=device-width`.",
        isCorrect: false,
      },
    ],
    hint: "This is essential for proper display of international characters.",
  },
  {
    id: 11,
    topic: "HTML",
    question:
      "Which semantic element is typically used to represent a self-contained, independent piece of content, such as a blog post or news story?",
    answerOptions: [
      {
        text: "<section>",
        rationale:
          "A `<section>` is a generic grouping of content; `<article>` is more specific for independent content.",
        isCorrect: false,
      },
      {
        text: "<aside>",
        rationale:
          "The `<aside>` element is for content related to the surrounding content but should be considered separate, like a sidebar or pull quote.",
        isCorrect: false,
      },
      {
        text: "<article>",
        rationale:
          "The `<article>` element is appropriate for content that could be distributed independently of the rest of the site.",
        isCorrect: true,
      },
      {
        text: "<main>",
        rationale:
          "The `<main>` element contains the dominant content of the document, which may contain multiple `<article>` elements.",
        isCorrect: false,
      },
    ],
    hint: "Consider content that could stand on its own in an RSS feed or on another site.",
  },
  {
    id: 12,
    topic: "HTML",
    question:
      "What is the correct structure for a description list (definition list) in HTML?",
    answerOptions: [
      {
        text: "<ul> with <li> and <def>",
        rationale:
          "`<ul>` is for unordered lists, and `<def>` is not a standard list element.",
        isCorrect: false,
      },
      {
        text: "<ol> with <li> and <dd>",
        rationale:
          "`<ol>` is for ordered lists, which is not the correct semantic element here.",
        isCorrect: false,
      },
      {
        text: "<dl> with <dt> for the term and <dd> for the description.",
        rationale:
          "The Description List (`<dl>`) contains a list of terms (`<dt>`) and their descriptions (`<dd>`).",
        isCorrect: true,
      },
      {
        text: "<list> with <term> and <description>",
        rationale:
          "These are not the correct standard HTML tags for a definition list.",
        isCorrect: false,
      },
    ],
    hint: "This list type is used for associating names with values.",
  },
  {
    id: 13,
    topic: "HTML",
    question:
      "What is a global attribute that specifies an element's custom data?",
    answerOptions: [
      {
        text: "id",
        rationale:
          "The `id` attribute is for providing a unique identifier for an element, not for custom data storage.",
        isCorrect: false,
      },
      {
        text: "data-*",
        rationale:
          "The `data-*` attributes are a class of attributes that allow you to store extra information on standard HTML elements.",
        isCorrect: true,
      },
      {
        text: "custom",
        rationale: "`custom` is not a standard global attribute prefix.",
        isCorrect: false,
      },
      {
        text: "attribute",
        rationale:
          "This is a generic term, not a specific attribute for custom data.",
        isCorrect: false,
      },
    ],
    hint: "This attribute is used to embed proprietary data, often manipulated by JavaScript.",
  },
  {
    id: 14,
    topic: "HTML",
    question:
      "Which form attribute dictates where the form data will be sent upon submission?",
    answerOptions: [
      {
        text: "method",
        rationale:
          "The `method` attribute specifies the HTTP method (GET or POST) used to send the data, not the destination URL.",
        isCorrect: false,
      },
      {
        text: "name",
        rationale:
          "The `name` attribute is used to identify the form or its controls within the submitted data.",
        isCorrect: false,
      },
      {
        text: "action",
        rationale:
          "The `action` attribute specifies the URL or path to the server-side script that will process the form submission.",
        isCorrect: true,
      },
      {
        text: "target",
        rationale:
          "The `target` attribute specifies where to display the response received after submitting the form.",
        isCorrect: false,
      },
    ],
    hint: "This determines the destination of the submitted data.",
  },
  {
    id: 15,
    topic: "HTML",
    question: "How many levels of headings does HTML provide?",
    answerOptions: [
      {
        text: "Three, from <h1> to <h3>.",
        rationale:
          "HTML provides more than three levels of headings for document structure.",
        isCorrect: false,
      },
      {
        text: "Six, from <h1> to <h6>.",
        rationale:
          "HTML defines six heading levels, where `<h1>` is the most important and `<h6>` is the least important.",
        isCorrect: true,
      },
      {
        text: "Five, from <h1> to <h5>.",
        rationale: "HTML includes a sixth heading level, `<h6>`.",
        isCorrect: false,
      },
      {
        text: "Four, from <h1> to <h4>.",
        rationale: "HTML includes two more heading levels, `<h5>` and `<h6>`.",
        isCorrect: false,
      },
    ],
    hint: "The structure for document hierarchy is quite well-defined.",
  },
  {
    id: 16,
    topic: "HTML",
    question: "What is the purpose of the HTML Web Workers API?",
    answerOptions: [
      {
        text: "To enable asynchronous communication with a server.",
        rationale:
          "This is handled by technologies like Fetch or XMLHttpRequest.",
        isCorrect: false,
      },
      {
        text: "To allow scripts to run heavy computational tasks in a separate background thread.",
        rationale:
          "Web Workers execute code in an isolated thread, preventing the main thread (UI) from freezing.",
        isCorrect: true,
      },
      {
        text: "To create new windows or tabs in the browser.",
        rationale: "This is handled by the `window.open()` method.",
        isCorrect: false,
      },
      {
        text: "To securely store large amounts of client-side data.",
        rationale: "This is handled by IndexDB or Web Storage.",
        isCorrect: false,
      },
    ],
    hint: "Think about offloading complex calculations from the main thread.",
  },
  {
    id: 17,
    topic: "HTML",
    question:
      "Which HTML attribute can be added to a form input to automatically receive focus when the page loads?",
    answerOptions: [
      {
        text: "focus",
        rationale: "`focus` is a CSS pseudo-class, not an HTML attribute.",
        isCorrect: false,
      },
      {
        text: "autofill",
        rationale: "`autofill` relates to browser history and saving data.",
        isCorrect: false,
      },
      {
        text: "autofocus",
        rationale:
          "The `autofocus` boolean attribute specifies that an element should automatically get focus when the page is loaded.",
        isCorrect: true,
      },
      {
        text: 'tabindex="0"',
        rationale:
          "`tabindex` manages keyboard navigation order, but does not force focus on load.",
        isCorrect: false,
      },
    ],
    hint: 'It is a boolean attribute that starts with "auto".',
  },
  {
    id: 18,
    topic: "HTML",
    question: "The `<picture>` element is primarily used for what purpose?",
    answerOptions: [
      {
        text: "To display video files with multiple quality options.",
        rationale:
          "Video files use the `<video>` element with nested `<source>` tags.",
        isCorrect: false,
      },
      {
        text: "To enable lazy loading of images for performance.",
        rationale:
          "Lazy loading is usually handled by the `loading` attribute or JavaScript.",
        isCorrect: false,
      },
      {
        text: "To provide responsive image handling based on viewport size or device capabilities.",
        rationale:
          "The `<picture>` element works with `<source>` tags to allow the browser to pick the best image source based on media queries.",
        isCorrect: true,
      },
      {
        text: "To render vector graphics using XML syntax.",
        rationale: "Vector graphics are handled by the `<svg>` element.",
        isCorrect: false,
      },
    ],
    hint: "It helps the browser choose the best image for the current screen size.",
  },
  {
    id: 19,
    topic: "HTML",
    question: "What is the main difference between SVG and Canvas?",
    answerOptions: [
      {
        text: "SVG is for 3D graphics, and Canvas is for 2D graphics.",
        rationale:
          "Both can handle 2D, and 3D graphics are typically done with WebGL (often using Canvas).",
        isCorrect: false,
      },
      {
        text: "SVG is text-based and resolution-independent, while Canvas draws pixel-based images.",
        rationale:
          "SVG is vector-based (XML) and scales without quality loss; Canvas is a raster (pixel) drawing surface.",
        isCorrect: true,
      },
      {
        text: "SVG is only supported in modern browsers, while Canvas has broad legacy support.",
        rationale: "Both have similar levels of modern browser support.",
        isCorrect: false,
      },
      {
        text: "SVG is best for animation, and Canvas is best for static images.",
        isCorrect: false,
        rationale:
          "Canvas is generally better for complex, fast-paced animations (like games).",
      },
    ],
    hint: "One is vector graphics defined by math; the other is a pixel grid.",
  },
  {
    id: 20,
    topic: "HTML",
    question:
      "Which attribute can be used on an `<input>` element to prevent a form from being submitted unless a value is provided?",
    answerOptions: [
      {
        text: "check",
        rationale:
          "`check` is not a standard attribute for client-side required validation.",
        isCorrect: false,
      },
      {
        text: "validate",
        rationale: "`validate` is not a standard HTML attribute.",
        isCorrect: false,
      },
      {
        text: "required",
        rationale:
          "The `required` boolean attribute forces the browser to check that the input field is not empty before submitting the form.",
        isCorrect: true,
      },
      {
        text: "non-empty",
        rationale: "`non-empty` is not a standard HTML attribute.",
        isCorrect: false,
      },
    ],
    hint: "This is a simple boolean attribute for basic form checking.",
  },

  // ------------------------------------
  // --- CSS QUESTIONS (IDs 21 - 40) ---
  // ------------------------------------
  {
    id: 21,
    topic: "CSS",
    question:
      "Which selector targets all `p` elements that are direct children of a `div` element?",
    answerOptions: [
      {
        text: "div p",
        rationale:
          "This is the descendant combinator, which selects all `p` elements *anywhere* inside a `div`.",
        isCorrect: false,
      },
      {
        text: "div > p",
        rationale:
          "The `>` symbol is the child combinator, selecting elements that are direct children of the first element.",
        isCorrect: true,
      },
      {
        text: "div ~ p",
        rationale: "This is the general sibling combinator.",
        isCorrect: false,
      },
      {
        text: "div + p",
        rationale: "This is the adjacent sibling combinator.",
        isCorrect: false,
      },
    ],
    hint: "The key here is the *direct* relationship between the two elements.",
  },
  {
    id: 22,
    topic: "CSS",
    question:
      "What is the correct order of CSS Box Model properties from the inside out?",
    answerOptions: [
      {
        text: "Content, Margin, Border, Padding",
        rationale:
          "Padding is inside the border, and margin is outside the border.",
        isCorrect: false,
      },
      {
        text: "Content, Border, Padding, Margin",
        rationale:
          "Padding is directly adjacent to the content, and the border surrounds the padding.",
        isCorrect: false,
      },
      {
        text: "Content, Padding, Border, Margin",
        rationale:
          "The Box Model dictates that content is surrounded by padding, which is surrounded by the border, which is surrounded by the margin.",
        isCorrect: true,
      },
      {
        text: "Margin, Border, Padding, Content",
        rationale:
          "Margin is the outermost layer, and content is the innermost layer.",
        isCorrect: false,
      },
    ],
    hint: "The properties expand outward from the actual visible content.",
  },
  {
    id: 23,
    topic: "CSS",
    question:
      "Which selector has the highest specificity (excluding inline styles and `!important`)?",
    answerOptions: [
      {
        text: ".classSelector",
        rationale: "Class selectors have a specificity value of 0-1-0.",
        isCorrect: false,
      },
      {
        text: "p",
        rationale:
          "Element (type) selectors have the lowest specificity value of 0-0-1.",
        isCorrect: false,
      },
      {
        text: "#idSelector",
        rationale:
          "ID selectors have a specificity value of 1-0-0, which is higher than class (0-1-0) or element (0-0-1) selectors.",
        isCorrect: true,
      },
      {
        text: '[type="text"]',
        rationale:
          "Attribute selectors have a specificity value of 0-1-0, the same as a class selector.",
        isCorrect: false,
      },
    ],
    hint: "Specificity rules are based on the count of ID, class, and element selectors.",
  },
  {
    id: 24,
    topic: "CSS",
    question:
      "Which CSS `position` value takes an element out of the normal document flow and positions it relative to its closest *positioned* ancestor?",
    answerOptions: [
      {
        text: "fixed",
        rationale:
          "Fixed positioning is relative to the viewport, not the closest positioned ancestor.",
        isCorrect: false,
      },
      {
        text: "relative",
        rationale:
          "Relative positioning is relative to the element's original position and keeps it in the flow.",
        isCorrect: false,
      },
      {
        text: "static",
        rationale: "Static is the default and is not positioned.",
        isCorrect: false,
      },
      {
        text: "absolute",
        rationale:
          "Elements with `position: absolute` are positioned relative to their nearest ancestor that has a position value other than `static`.",
        isCorrect: true,
      },
    ],
    hint: "This positioning method makes an element's placement dependent on a parent, not the viewport.",
  },
  {
    id: 25,
    topic: "CSS",
    question:
      "Which Flexbox property is used to align items along the **main** axis?",
    answerOptions: [
      {
        text: "align-items",
        rationale: "`align-items` aligns items along the *cross* axis.",
        isCorrect: false,
      },
      {
        text: "flex-direction",
        rationale:
          "`flex-direction` sets the direction of the main axis but doesn't handle alignment along it.",
        isCorrect: false,
      },
      {
        text: "align-content",
        rationale:
          "`align-content` aligns lines of items in the container, primarily used when there is wrapping.",
        isCorrect: false,
      },
      {
        text: "justify-content",
        rationale:
          "`justify-content` controls how items are spaced and aligned within the container along the primary axis (horizontal by default).",
        isCorrect: true,
      },
    ],
    hint: "The property's name suggests it controls the 'justification' or spacing *between* and *around* the items.",
  },
  {
    id: 26,
    topic: "CSS",
    question:
      "Which CSS unit represents a measurement relative to the font-size of the **root** element?",
    answerOptions: [
      {
        text: "em",
        rationale: "`em` is relative to the font-size of the *parent* element.",
        isCorrect: false,
      },
      {
        text: "px",
        rationale: "`px` (pixels) is an absolute, fixed-size unit.",
        isCorrect: false,
      },
      {
        text: "rem",
        rationale:
          "`rem` (root em) is relative to the font size of the `<html>` element, providing consistent scaling across the document.",
        isCorrect: true,
      },
      {
        text: "vw",
        rationale:
          "`vw` (viewport width) is relative to the width of the viewport, not the root element's font size.",
        isCorrect: false,
      },
    ],
    hint: "This unit helps with accessibility and scaling based on the base document size.",
  },
  {
    id: 27,
    topic: "CSS",
    question:
      'What is the correct way to link an external CSS file named "styles.css" to an HTML document?',
    answerOptions: [
      {
        text: '<style src="styles.css">',
        rationale: "The `<style>` tag is used for internal CSS.",
        isCorrect: false,
      },
      {
        text: '<link rel="stylesheet" href="styles.css">',
        rationale:
          "The `<link>` tag is used in the `<head>` of an HTML document to establish a relationship with an external stylesheet.",
        isCorrect: true,
      },
      {
        text: '<css rel="stylesheet" source="styles.css">',
        rationale:
          "`<css>` is not a standard HTML tag for linking stylesheets.",
        isCorrect: false,
      },
      {
        text: '<import url("styles.css")>',
        rationale:
          "This syntax is used within CSS files (`@import`), not directly in the HTML file.",
        isCorrect: false,
      },
    ],
    hint: "This tag is placed in the head and specifies the relationship type and the source file.",
  },
  {
    id: 28,
    topic: "CSS",
    question:
      "Which pseudo-class is used to style an element only when the mouse cursor is over it?",
    answerOptions: [
      {
        text: ":active",
        rationale:
          "`:active` styles an element while it is being activated (clicked/pressed).",
        isCorrect: false,
      },
      {
        text: ":focus",
        rationale: "`:focus` styles an element when it has focus.",
        isCorrect: false,
      },
      {
        text: ":over",
        rationale: "`:over` is not a standard CSS pseudo-class.",
        isCorrect: false,
      },
      {
        text: ":hover",
        rationale:
          "The `:hover` pseudo-class applies styles when a user's pointing device is over an element.",
        isCorrect: true,
      },
    ],
    hint: "This is the most common way to create interactive visual feedback for elements.",
  },
  {
    id: 29,
    topic: "CSS",
    question:
      "What is the correct syntax for a media query that applies styles when the viewport width is **at least** 600 pixels?",
    answerOptions: [
      {
        text: "@media screen and (max-width: 600px)",
        rationale:
          "`max-width` applies styles when the viewport is 600 pixels or *less*.",
        isCorrect: false,
      },
      {
        text: "@media (width >= 600px)",
        rationale:
          "This syntax is not the standard way to write range features in a media query.",
        isCorrect: false,
      },
      {
        text: "@media (min-width: 600px)",
        rationale:
          "`min-width` is used to apply styles for viewports *equal to or wider* than the specified value.",
        isCorrect: true,
      },
      {
        text: "@media only screen and (screen-width: 600px)",
        rationale: "This only targets a width *exactly* at 600px.",
        isCorrect: false,
      },
    ],
    hint: 'This is the key component for a "mobile-first" approach to responsive design.',
  },
  {
    id: 30,
    topic: "CSS",
    question:
      "Which CSS property is used to control the tiling or repetition of a background image?",
    answerOptions: [
      {
        text: "background-tile",
        rationale: "`background-tile` is not a standard CSS property.",
        isCorrect: false,
      },
      {
        text: "background-position",
        rationale:
          "`background-position` controls the initial position of the background image, not its repetition.",
        isCorrect: false,
      },
      {
        text: "background-repeat",
        rationale:
          "`background-repeat` determines whether a background image is repeated, and if so, how.",
        isCorrect: true,
      },
      {
        text: "background-size",
        rationale:
          "`background-size` controls the dimensions of the background image.",
        isCorrect: false,
      },
    ],
    hint: "You can specify options like `repeat-x`, `repeat-y`, or `no-repeat`.",
  },
  {
    id: 31,
    topic: "CSS",
    question:
      "What is the difference between `display: none;` and `visibility: hidden;`?",
    answerOptions: [
      {
        text: "There is no functional difference; they are interchangeable.",
        rationale:
          "These two properties have fundamentally different effects on the document layout.",
        isCorrect: false,
      },
      {
        text: "`display: none;` hides the content, while `visibility: hidden;` hides the element's children but not the element itself.",
        isCorrect: false,
        rationale:
          "Both properties hide the element itself; the difference is in how they affect the layout flow.",
      },
      {
        text: "`display: none;` removes the element from the flow, while `visibility: hidden;` hides it but reserves its space.",
        rationale:
          "`display: none` causes a reflow and the element takes up no space, whereas `visibility: hidden` keeps the element's box model space intact.",
        isCorrect: true,
      },
      {
        text: "`display: none;` is for text-only elements, and `visibility: hidden;` is for images.",
        rationale: "Both properties apply to all HTML elements.",
        isCorrect: false,
      },
    ],
    hint: "One property affects layout flow, and the other only affects the element's rendering.",
  },
  {
    id: 32,
    topic: "CSS",
    question:
      "In CSS Grid Layout, which property is used to specify the number and size of the columns?",
    answerOptions: [
      {
        text: "grid-template-rows",
        rationale:
          "This property defines the size and number of the rows in the grid.",
        isCorrect: false,
      },
      {
        text: "grid-gap",
        rationale:
          "This property controls the spacing between the rows and columns.",
        isCorrect: false,
      },
      {
        text: "grid-auto-flow",
        rationale:
          "This property controls how auto-placed items flow into the grid.",
        isCorrect: false,
      },
      {
        text: "grid-template-columns",
        rationale:
          "This property allows you to define the structure of the columns in the grid container.",
        isCorrect: true,
      },
    ],
    hint: "The name implies defining the pattern or arrangement for the vertical tracks.",
  },
  {
    id: 33,
    topic: "CSS",
    question:
      "How do you define a custom CSS property (CSS Variable) within a rule set?",
    answerOptions: [
      {
        text: "$main-color: blue;",
        rationale:
          "The `$` prefix is often used in pre-processors (like Sass), but not for native CSS variables.",
        isCorrect: false,
      },
      {
        text: "var main-color: blue;",
        rationale: "`var` is used to *call* a variable, not to define it.",
        isCorrect: false,
      },
      {
        text: "--main-color: blue;",
        rationale:
          "CSS custom properties are defined with a name starting with two hyphens (`--`).",
        isCorrect: true,
      },
      {
        text: "let main-color = blue;",
        rationale: "This is JavaScript variable syntax, not CSS.",
        isCorrect: false,
      },
    ],
    hint: "The syntax is similar to standard CSS properties but requires a special prefix.",
  },
  {
    id: 34,
    topic: "CSS",
    question:
      "The `+` combinator in a selector (e.g., `h1 + p`) selects which element?",
    answerOptions: [
      {
        text: "All `p` elements inside the `h1` element.",
        rationale:
          "The `+` is a sibling combinator and does not select descendants.",
        isCorrect: false,
      },
      {
        text: "All `p` elements that are siblings of the `h1` element.",
        rationale:
          "The `~` (general sibling) combinator selects all subsequent siblings.",
        isCorrect: false,
      },
      {
        text: "The first `p` element immediately preceded by an `h1` element.",
        rationale:
          "The adjacent sibling combinator (`+`) selects an element that is immediately preceded by the first element.",
        isCorrect: true,
      },
      {
        text: "Any `p` element that is a child of an `h1` element.",
        rationale:
          "The `h1` element cannot have a `p` element as a child; `>` is the child combinator.",
        isCorrect: false,
      },
    ],
    hint: "The elements must be next to each other in the source order.",
  },
  {
    id: 35,
    topic: "CSS",
    question:
      "Which pseudo-element is used to insert content before the actual content of an element?",
    answerOptions: [
      {
        text: "::after",
        rationale:
          "The `::after` pseudo-element inserts content *after* the element's content.",
        isCorrect: false,
      },
      {
        text: ":first-child",
        rationale:
          "`:first-child` is a pseudo-class used to select the first element among a group of siblings.",
        isCorrect: false,
      },
      {
        text: "::before",
        rationale:
          "The `::before` pseudo-element allows you to insert and style content that appears before the element's content.",
        isCorrect: true,
      },
      {
        text: ":root",
        rationale:
          "`:root` is a pseudo-class that represents the document's root element (`<html>`).",
        isCorrect: false,
      },
    ],
    hint: "This is often used with the `content` property to add decorative elements.",
  },
  {
    id: 36,
    topic: "CSS",
    question:
      "The property `box-sizing: border-box;` changes the CSS Box Model calculation how?",
    answerOptions: [
      {
        text: "It prevents the element from inheriting its parent's padding and border.",
        rationale: "It affects the box calculation, not inheritance.",
        isCorrect: false,
      },
      {
        text: "The `width` and `height` properties include the content and padding, but exclude the border.",
        rationale:
          "Border is also included in the calculation of width/height.",
        isCorrect: false,
      },
      {
        text: "The `width` and `height` properties include the content, padding, and border.",
        rationale:
          "This is the definition of `border-box`. The total width/height remains fixed at the declared value.",
        isCorrect: true,
      },
      {
        text: "It converts a block-level element into an inline-level element.",
        rationale: "This is handled by the `display` property.",
        isCorrect: false,
      },
    ],
    hint: "This property makes layout calculations much more predictable.",
  },
  {
    id: 37,
    topic: "CSS",
    question:
      "For an element to be affected by the `z-index` property, what must also be set?",
    answerOptions: [
      {
        text: "It must have a `background-color` set.",
        rationale: "`z-index` is independent of color.",
        isCorrect: false,
      },
      {
        text: "Its `display` property must be `block` or `inline-block`.",
        rationale: "`z-index` primarily relies on positioning.",
        isCorrect: false,
      },
      {
        text: "Its `position` property must be set to something other than `static`.",
        rationale:
          "Only elements with `position: absolute`, `relative`, `fixed`, or `sticky` create a stacking context and respond to `z-index`.",
        isCorrect: true,
      },
      {
        text: "It must be a direct child of the `<body>` element.",
        rationale: "Positioning works on any nested element.",
        isCorrect: false,
      },
    ],
    hint: "This property determines the element's stacking layer in a 3D context.",
  },
  {
    id: 38,
    topic: "CSS",
    question:
      "Which pseudo-class is often used to define global CSS variables (custom properties)?",
    answerOptions: [
      {
        text: ":global",
        rationale:
          "`:global` is often found in CSS modules/pre-processors, but not standard CSS.",
        isCorrect: false,
      },
      {
        text: ":document",
        rationale: "`:document` is not a standard pseudo-class.",
        isCorrect: false,
      },
      {
        text: ":root",
        rationale:
          "The `:root` pseudo-class represents the `<html>` element and is the convention for defining variables accessible globally.",
        isCorrect: true,
      },
      {
        text: ":defined",
        rationale:
          "`:defined` selects any element that has been successfully defined.",
        isCorrect: false,
      },
    ],
    hint: "This is the top-most element in the document tree.",
  },
  {
    id: 39,
    topic: "CSS",
    question:
      "What is the fundamental difference between CSS Flexbox and CSS Grid Layout?",
    answerOptions: [
      {
        text: "Flexbox is for aligning content, while Grid is only for sizing.",
        rationale: "Grid also handles alignment.",
        isCorrect: false,
      },
      {
        text: "Flexbox only supports positioning for IE11, while Grid is universal.",
        rationale: "Both are widely supported, and Flexbox is older.",
        isCorrect: false,
      },
      {
        text: "Flexbox is designed for one-dimensional layouts (row or column), while Grid is for two-dimensional layouts (rows and columns simultaneously).",
        rationale: "This is the core conceptual difference.",
        isCorrect: true,
      },
      {
        text: "Grid is for small components, while Flexbox is for large page layouts.",
        rationale:
          "The opposite is often true, but neither is strictly limited.",
        isCorrect: false,
      },
    ],
    hint: "Think about the number of axes (dimensions) they manage.",
  },
  {
    id: 40,
    topic: "CSS",
    question:
      "Which pseudo-element can be used to style the portion of a text that has been highlighted (selected) by the user?",
    answerOptions: [
      {
        text: "::highlight",
        rationale:
          "`::highlight` is part of a different standard; `::selection` is for text selection.",
        isCorrect: false,
      },
      {
        text: "::active-text",
        rationale: "`::active-text` is not a standard pseudo-element.",
        isCorrect: false,
      },
      {
        text: "::focus",
        rationale:
          "`::focus` is a pseudo-class for elements that have focus, not for selected text.",
        isCorrect: false,
      },
      {
        text: "::selection",
        rationale:
          "The `::selection` pseudo-element allows you to apply styles to the content highlighted by the user.",
        isCorrect: true,
      },
    ],
    hint: "It describes the user's action of marking text with the mouse.",
  },

  // ------------------------------------
  // --- JAVASCRIPT QUESTIONS (IDs 41 - 60) ---
  // ------------------------------------
  {
    id: 41,
    topic: "JavaScript",
    question:
      "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    answerOptions: [
      { text: "var", rationale: "`var` is function-scoped.", isCorrect: false },
      {
        text: "const",
        rationale:
          "`const` is block-scoped but cannot be reassigned (it's constant).",
        isCorrect: false,
      },
      {
        text: "let",
        rationale:
          "`let` declares a block-scoped local variable, which can be updated but not redeclared in the same scope.",
        isCorrect: true,
      },
      {
        text: "scope",
        rationale: "`scope` is not a keyword for variable declaration.",
        isCorrect: false,
      },
    ],
    hint: "This variable type is flexible but respects curly brace boundaries.",
  },
  {
    id: 42,
    topic: "JavaScript",
    question:
      "What is the data type of `[1, 2, 3]` in JavaScript (according to `typeof`)?",
    answerOptions: [
      {
        text: "array",
        rationale:
          'The `typeof` operator returns `"object"` for arrays in JavaScript.',
        isCorrect: false,
      },
      {
        text: "number",
        rationale:
          "The elements inside are numbers, but the structure itself is not a number data type.",
        isCorrect: false,
      },
      {
        text: "list",
        rationale: "`list` is not a standard JavaScript data type.",
        isCorrect: false,
      },
      {
        text: "object",
        rationale:
          'Although arrays have their own methods, `typeof` operator returns "object" for arrays in JavaScript.',
        isCorrect: true,
      },
    ],
    hint: "The `typeof` operator sometimes yields results that are technically correct but semantically confusing for arrays.",
  },
  {
    id: 43,
    topic: "JavaScript",
    question:
      "What is the primary feature of an **Arrow Function** (`() => {}`) compared to a traditional function?",
    answerOptions: [
      {
        text: "It can only be used to return a single line of code.",
        rationale:
          "Arrow functions can have multi-line bodies enclosed in curly braces.",
        isCorrect: false,
      },
      {
        text: "It is hoisted to the top of its scope like a `var` declaration.",
        rationale:
          "Arrow functions are not hoisted; they must be defined before they are used.",
        isCorrect: false,
      },
      {
        text: "It does not have its own `this` binding and inherits `this` from the surrounding scope.",
        rationale: "Arrow functions use Lexical Scoping for `this`.",
        isCorrect: true,
      },
      {
        text: "It is automatically bound to the global `window` object.",
        isCorrect: false,
        rationale:
          "Traditional functions can sometimes be bound to the global object, but arrow functions specifically avoid having their own binding.",
      },
    ],
    hint: "Look at how it handles its context or execution environment.",
  },
  {
    id: 44,
    topic: "JavaScript",
    question:
      "Which method is used to select the first element in the document that matches a specified CSS selector?",
    answerOptions: [
      {
        text: "document.getElementById()",
        rationale:
          "This method selects an element by its ID attribute, not a CSS selector.",
        isCorrect: false,
      },
      {
        text: "document.getElementsByClassName()",
        rationale:
          "This method returns a collection of elements by class name.",
        isCorrect: false,
      },
      {
        text: "document.querySelector()",
        rationale:
          "This method returns the first Element within the document that matches the specified selector(s).",
        isCorrect: true,
      },
      {
        text: "document.querySelectorAll()",
        rationale: "This method returns a list of all matching elements.",
        isCorrect: false,
      },
    ],
    hint: "This is the go-to method for selecting a single element using a CSS-like string.",
  },
  {
    id: 45,
    topic: "JavaScript",
    question: "What does the `await` keyword do in an `async` function?",
    answerOptions: [
      {
        text: "It throws an error if the Promise is not resolved within a specified time limit.",
        rationale: "The `await` keyword does not handle timeouts.",
        isCorrect: false,
      },
      {
        text: "It automatically converts a traditional function into a Promise.",
        rationale: "The `async` keyword does this.",
        isCorrect: false,
      },
      {
        text: "It immediately executes the next line of code without waiting for the Promise to complete.",
        rationale: "This is the behavior of non-awaited asynchronous code.",
        isCorrect: false,
      },
      {
        text: "It pauses the execution of the `async` function until the `Promise` is settled (resolved or rejected).",
        rationale:
          "`await` makes asynchronous code execution appear sequential (synchronous).",
        isCorrect: true,
      },
    ],
    hint: "This keyword makes working with promises feel like traditional, blocking code.",
  },
  {
    id: 46,
    topic: "JavaScript",
    question:
      "Which array method executes a provided function once for each array element and returns a **new** array?",
    answerOptions: [
      {
        text: "forEach()",
        rationale:
          "`forEach()` executes a function for each element but returns `undefined`.",
        isCorrect: false,
      },
      {
        text: "filter()",
        rationale:
          "`filter()` returns a new array containing only elements that pass a test.",
        isCorrect: false,
      },
      {
        text: "reduce()",
        rationale: "`reduce()` reduces the array to a single output value.",
        isCorrect: false,
      },
      {
        text: "map()",
        rationale:
          "The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.",
        isCorrect: true,
      },
    ],
    hint: "This is the primary method for transforming all elements into a new, parallel array.",
  },
  {
    id: 47,
    topic: "JavaScript",
    question:
      'How do you access a property of an object named `person` with a key that contains a space, like "first name"?',
    answerOptions: [
      {
        text: "person.first name",
        rationale: "Dot notation cannot be used for keys containing spaces.",
        isCorrect: false,
      },
      {
        text: 'person("first name")',
        rationale: "Parentheses are used for function calls.",
        isCorrect: false,
      },
      {
        text: 'person["first name"]',
        rationale:
          "Bracket notation (`[]`) must be used when accessing object properties with names that are not valid JavaScript identifiers (e.g., contain spaces or hyphens).",
        isCorrect: true,
      },
      {
        text: "person.get('first name')",
        rationale:
          "This is a method that might be available on a Map, but not the standard object access mechanism.",
        isCorrect: false,
      },
    ],
    hint: "This notation is necessary when the property name isn't a simple, legal variable name.",
  },
  {
    id: 48,
    topic: "JavaScript",
    question:
      "What is the purpose of the **strict equality** operator (`===`)?",
    answerOptions: [
      {
        text: "It compares two values for equality, allowing type coercion if necessary.",
        rationale: "This describes the loose equality operator (`==`).",
        isCorrect: false,
      },
      {
        text: "It checks if two variables reference the exact same object in memory.",
        rationale:
          "While true for objects, its primary rule is for type and value comparison.",
        isCorrect: false,
      },
      {
        text: "It compares two values for equality without performing type coercion.",
        rationale:
          "`===` checks if both the value AND the data type are the same.",
        isCorrect: true,
      },
      {
        text: "It is used for assignment within a conditional expression.",
        rationale: "Assignment is done with the single equals sign (`=`).",
        isCorrect: false,
      },
    ],
    hint: "It's a safer comparison operator that avoids automatic type conversion.",
  },
  {
    id: 49,
    topic: "JavaScript",
    question: "What value is considered **falsy** in JavaScript?",
    answerOptions: [
      {
        text: "{}",
        rationale: "An empty object (`{}`) is considered truthy.",
        isCorrect: false,
      },
      {
        text: '"false"',
        rationale:
          'The string containing the word "false" is considered truthy because it\'s a non-empty string.',
        isCorrect: false,
      },
      {
        text: "null",
        rationale:
          'In JavaScript, falsy values include `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`.',
        isCorrect: true,
      },
      {
        text: "[]",
        rationale: "An empty array (`[]`) is generally considered truthy.",
        isCorrect: false,
      },
    ],
    hint: "This is one of the distinct values that evaluates to `false` in a boolean context.",
  },
  {
    id: 50,
    topic: "JavaScript",
    question:
      "Which loop is most suitable for iterating over the *values* of an iterable object (like an Array)?",
    answerOptions: [
      {
        text: "for...in",
        rationale:
          "`for...in` iterates over the *keys* (property names/indices).",
        isCorrect: false,
      },
      {
        text: "while",
        rationale:
          "The `while` loop is a condition-controlled loop that is less idiomatic for simple array iteration.",
        isCorrect: false,
      },
      {
        text: "for...of",
        rationale:
          "The `for...of` statement creates a loop iterating over iterable objects, retrieving the value of each element.",
        isCorrect: true,
      },
      {
        text: "do...while",
        rationale:
          "The `do...while` loop executes the body at least once before checking the condition.",
        isCorrect: false,
      },
    ],
    hint: "This is the modern, simpler way to iterate directly over the content of collections.",
  },
  {
    id: 51,
    topic: "JavaScript",
    question:
      "Which method is used to remove whitespace from both ends of a string?",
    answerOptions: [
      {
        text: "strip()",
        rationale:
          "`strip()` is a common method in other languages (like Python), but not standard JavaScript.",
        isCorrect: false,
      },
      {
        text: "clean()",
        rationale: "`clean()` is not a standard JavaScript string method.",
        isCorrect: false,
      },
      {
        text: "substring()",
        rationale:
          "`substring()` extracts a portion of a string based on index.",
        isCorrect: false,
      },
      {
        text: "trim()",
        rationale:
          "The `trim()` method removes whitespace characters from the start and end of a string.",
        isCorrect: true,
      },
    ],
    hint: "This is useful for cleaning up user input that might have extra spaces.",
  },
  {
    id: 52,
    topic: "JavaScript",
    question:
      "In the context of an event listener, what is the `callback` function?",
    answerOptions: [
      {
        text: "A string that specifies the event to listen for (e.g., 'click').",
        rationale: "The event type is the first argument.",
        isCorrect: false,
      },
      {
        text: "An object that stores data to be passed to the event handler.",
        rationale: "The data is often passed via the event object.",
        isCorrect: false,
      },
      {
        text: "A function that is passed as an argument to another function and is executed later.",
        rationale:
          "A callback function is one that gets executed once the event (or a promise) has completed.",
        isCorrect: true,
      },
      {
        text: "A Boolean value indicating whether the event should bubble or capture.",
        rationale:
          "The bubbling/capturing option is an optional third argument.",
        isCorrect: false,
      },
    ],
    hint: "It's a function designed to be called by another mechanism at an appropriate time.",
  },
  {
    id: 53,
    topic: "JavaScript",
    question: 'What is the result of the expression `"10" + 5` in JavaScript?',
    answerOptions: [
      {
        text: "15",
        rationale:
          "The number is coerced to a string; concatenation happens first.",
        isCorrect: false,
      },
      {
        text: '"15"',
        rationale:
          "The number is coerced to a string, resulting in concatenation, not mathematical addition.",
        isCorrect: false,
      },
      {
        text: "105",
        rationale:
          "The result is a number if a non-string operator is used, which is not the case here.",
        isCorrect: false,
      },
      {
        text: '"105"',
        rationale:
          'The `+` operator, when used with strings, performs string concatenation, coercing the number `5` into the string `"5"` .',
        isCorrect: true,
      },
    ],
    hint: "String concatenation takes precedence when the operands have mixed types.",
  },
  {
    id: 54,
    topic: "JavaScript",
    question:
      "Given `const [a, b] = [1, 2, 3];`, what are the values of `a` and `b`?",
    answerOptions: [
      {
        text: "a is 1, b is 3.",
        rationale:
          "Destructuring is based on order, so `b` would be the second element.",
        isCorrect: false,
      },
      {
        text: "a is 1, b is 2.",
        rationale:
          "Array destructuring assigns variables based on the position in the array; the third element is simply ignored.",
        isCorrect: true,
      },
      {
        text: "a is [1, 2], b is 3.",
        rationale:
          "The expression uses array destructuring, not the rest parameter for `a`.",
        isCorrect: false,
      },
      {
        text: "a is undefined, b is undefined.",
        rationale:
          "The variables successfully receive the first two values from the array.",
        isCorrect: false,
      },
    ],
    hint: "The variables only receive values for the elements they are explicitly mapped to.",
  },
  {
    id: 55,
    topic: "JavaScript",
    question:
      "Which function is used to repeatedly execute a block of code after a specified delay?",
    answerOptions: [
      {
        text: "setTimeout()",
        rationale:
          "`setTimeout()` executes a block of code only once after the delay.",
        isCorrect: false,
      },
      {
        text: "setInterval()",
        rationale:
          "`setInterval()` repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.",
        isCorrect: true,
      },
      {
        text: "requestAnimationFrame()",
        rationale:
          "This function is optimized for animations and runs before the browser's next repaint.",
        isCorrect: false,
      },
      {
        text: "setDelay()",
        rationale: "`setDelay()` is not a standard JavaScript timing function.",
        isCorrect: false,
      },
    ],
    hint: "This function is specifically for recurring execution, unlike its single-use counterpart.",
  },
  {
    id: 56,
    topic: "JavaScript",
    question:
      "What is the behavior of `Promise.all([p1, p2, p3])` if `p2` rejects?",
    answerOptions: [
      {
        text: "It waits for all promises to settle, returning the results of the resolved ones and ignoring the rejected one.",
        rationale:
          "This describes `Promise.allSettled`. `Promise.all` fails fast.",
        isCorrect: false,
      },
      {
        text: "It immediately rejects with the reason from `p2` without waiting for `p1` or `p3`.",
        rationale:
          '`Promise.all` is "fail-fast"; it rejects as soon as any of the input promises rejects.',
        isCorrect: true,
      },
      {
        text: "It resolves successfully, but the result array contains `undefined` for the rejected promise.",
        rationale: "This is incorrect for `Promise.all`.",
        isCorrect: false,
      },
      {
        text: "It is converted into a synchronous function call.",
        rationale: "Promises are inherently asynchronous.",
        isCorrect: false,
      },
    ],
    hint: 'This method is known for its "fail-fast" nature.',
  },
  {
    id: 57,
    topic: "JavaScript",
    question:
      "What is the correct way to define a default value of `1` for the parameter `count` in a function?",
    answerOptions: [
      {
        text: "function increment(count || 1) { ... }",
        rationale:
          "The OR operator (`||`) is used inside the function body, not the signature.",
        isCorrect: false,
      },
      {
        text: "function increment(count: 1) { ... }",
        rationale:
          "This is incorrect TypeScript or JavaScript syntax for a default value.",
        isCorrect: false,
      },
      {
        text: "function increment(count = 1) { ... }",
        rationale:
          "Default parameters are defined in the function signature using the assignment operator (`=`).",
        isCorrect: true,
      },
      {
        text: "function increment(count: number = 1) { ... }",
        rationale:
          "This is the correct TypeScript syntax, but the simplest JS form omits the type annotation.",
        isCorrect: false,
      },
    ],
    hint: "The default value is set directly in the parameter list.",
  },
  {
    id: 58,
    topic: "JavaScript",
    question:
      "What is the primary use of the spread syntax (`...`) with an array?",
    answerOptions: [
      {
        text: "To concatenate arrays, ensuring the original arrays are not modified.",
        rationale:
          "The spread syntax creates shallow copies, making it safe for concatenation.",
        isCorrect: true,
      },
      {
        text: "To convert array elements into strings for logging.",
        rationale:
          "This is typically done with `join()` or `JSON.stringify()`.",
        isCorrect: false,
      },
      {
        text: "To define a new function that accepts an array as its first argument.",
        rationale:
          "This is the rest parameter syntax when used in a function parameter list.",
        isCorrect: false,
      },
      {
        text: "To perform deep cloning of complex objects nested within the array.",
        rationale: "The spread operator only performs a shallow copy.",
        isCorrect: false,
      },
    ],
    hint: "It is excellent for immutability when combining or copying collections.",
  },
  {
    id: 59,
    topic: "JavaScript",
    question:
      "In JavaScript, how does the hoisting behavior of `let` and `const` differ from `var`?",
    answerOptions: [
      {
        text: "They are not hoisted at all.",
        rationale: "All declarations are technically hoisted.",
        isCorrect: false,
      },
      {
        text: "They are only hoisted within block scopes, not function scopes.",
        rationale: "Hoisting is based on variable type, not scope type.",
        isCorrect: false,
      },
      {
        text: 'Their declarations are hoisted, but initialization is not, creating a "Temporal Dead Zone".',
        rationale:
          "This is the definition of the TDZ, where variables exist but cannot be accessed until initialization.",
        isCorrect: true,
      },
      {
        text: "They are hoisted only in strict mode, while `var` is hoisted always.",
        rationale: "Hoisting behavior is consistent regardless of strict mode.",
        isCorrect: false,
      },
    ],
    hint: "The concept that prevents accessing the variable before its definition.",
  },
  {
    id: 60,
    topic: "JavaScript",
    question: "What is the result of the comparison `NaN === NaN`?",
    answerOptions: [
      {
        text: "true",
        rationale:
          "NaN is the only value in JavaScript that is not equal to itself.",
        isCorrect: false,
      },
      {
        text: "false",
        rationale:
          "NaN (Not a Number) is specifically defined as not equal to any value, including itself, to represent the result of an undefined mathematical operation.",
        isCorrect: true,
      },
      {
        text: "undefined",
        rationale: "The result of a comparison is always a boolean value.",
        isCorrect: false,
      },
      {
        text: "Error",
        rationale:
          "The comparison is syntactically valid and returns a boolean.",
        isCorrect: false,
      },
    ],
    hint: "This is a unique characteristic of a special numeric value.",
  },

  // ------------------------------------
  // --- REACT QUESTIONS (IDs 61 - 80) ---
  // ------------------------------------
  {
    id: 61,
    topic: "React",
    question: "What is the purpose of the curly braces `{}` in JSX?",
    answerOptions: [
      {
        text: "To define a component's local state.",
        rationale: "State is defined using the `useState` hook.",
        isCorrect: false,
      },
      {
        text: "To embed JavaScript expressions, variables, or functions within the JSX structure.",
        rationale:
          "Curly braces are used to escape from the JSX syntax back into JavaScript for dynamic content.",
        isCorrect: true,
      },
      {
        text: "To enclose CSS styles for inline styling.",
        rationale:
          "While used for inline styles, the primary function is to contain any valid JavaScript expression.",
        isCorrect: false,
      },
      {
        text: "To define a custom hook.",
        rationale: "Custom hooks are defined as standard functions.",
        isCorrect: false,
      },
    ],
    hint: "This mechanism allows you to inject dynamic data directly into the markup.",
  },
  {
    id: 62,
    topic: "React",
    question:
      "In React, what is the term for a plain JavaScript object that stores a component's local data and is managed within the component?",
    answerOptions: [
      {
        text: "Props",
        rationale: "Props are read-only data passed from a parent component.",
        isCorrect: false,
      },
      {
        text: "Context",
        rationale:
          "Context is a mechanism to pass data through the component tree without prop drilling.",
        isCorrect: false,
      },
      {
        text: "State",
        rationale:
          "`State` is a built-in object that is used to contain data or information about the component that may change over time.",
        isCorrect: true,
      },
      {
        text: "Ref",
        rationale:
          "Refs (references) are primarily used to access the underlying DOM elements.",
        isCorrect: false,
      },
    ],
    hint: "This data is managed internally and triggers re-renders when updated.",
  },
  {
    id: 63,
    topic: "React",
    question: "How are props passed to a child component in React?",
    answerOptions: [
      {
        text: "By calling a dedicated `setProps()` method within the child component.",
        rationale:
          "Props are immutable and cannot be set directly by the child.",
        isCorrect: false,
      },
      {
        text: "As arguments to the component's render method.",
        isCorrect: false,
        rationale:
          "They are the single argument to the functional component, but passed via JSX attributes.",
      },
      {
        text: "As attributes on the component tag in JSX.",
        rationale:
          "Props are passed from a parent component to a child component using a key-value pair syntax that resembles HTML attributes.",
        isCorrect: true,
      },
      {
        text: "By modifying the child component's internal state.",
        rationale: "Props are distinct from state and are generally read-only.",
        isCorrect: false,
      },
    ],
    hint: "This is the one-way channel for data flow from parent to child.",
  },
  {
    id: 64,
    topic: "React",
    question:
      "What is the correct way to update state using the `useState` Hook in a functional component?",
    answerOptions: [
      {
        text: "By directly modifying the state variable (e.g., `count = count + 1;`).",
        rationale:
          "Direct modification does not notify React to re-render the component.",
        isCorrect: false,
      },
      {
        text: "By calling the setter function returned by `useState`.",
        rationale:
          "The setter function must be used to update state, as directly modifying the state object will not trigger a re-render.",
        isCorrect: true,
      },
      {
        text: "By calling `this.setState()` within the functional component.",
        rationale:
          "`this.setState()` is used in class components, not functional components with Hooks.",
        isCorrect: false,
      },
      {
        text: "By assigning a new value to the state variable and calling `forceUpdate()`.",
        rationale:
          "`forceUpdate()` is generally discouraged and not the intended mechanism for state changes with Hooks.",
        isCorrect: false,
      },
    ],
    hint: "Always use the dedicated function provided by the Hook to ensure React detects the change.",
  },
  {
    id: 65,
    topic: "React",
    question:
      "What is the purpose of the second argument (dependency array) in the `useEffect` Hook?",
    answerOptions: [
      {
        text: "To provide the initial data for the effect to use.",
        rationale: "The initial data is passed into the callback function.",
        isCorrect: false,
      },
      {
        text: "To specify the cleanup function to run when the component unmounts.",
        rationale:
          "The cleanup function is returned by the effect callback itself.",
        isCorrect: false,
      },
      {
        text: "To specify variables that, when changed, should trigger the effect function to run again.",
        rationale:
          "The dependency array controls when the side effect should re-run, optimizing performance and preventing infinite loops.",
        isCorrect: true,
      },
      {
        text: "To pass props directly to the effect callback without using closure.",
        rationale:
          "The effect callback has access to all variables in its scope due to closure.",
        isCorrect: false,
      },
    ],
    hint: "This array tells React which specific values the effect is dependent on.",
  },
  {
    id: 66,
    topic: "React",
    question:
      'What is a "side effect" in React, which the `useEffect` hook is designed to manage?',
    answerOptions: [
      {
        text: "Any logical operation that produces an incorrect result.",
        rationale:
          "A side effect is a technical term for operations that interact with the outside world, not an error state.",
        isCorrect: false,
      },
      {
        text: "The return value of the component's render function (the JSX).",
        rationale: "The JSX rendering is the component's primary output.",
        isCorrect: false,
      },
      {
        text: "Operations like data fetching, subscriptions, or manually changing the DOM.",
        rationale:
          "Side effects are any interactions with the outside world that occur after rendering.",
        isCorrect: true,
      },
      {
        text: "The process of updating a component's state using its setter function.",
        rationale:
          "State update is a core part of the component's internal logic.",
        isCorrect: false,
      },
    ],
    hint: "These are activities that are not purely related to computing the output of the render function.",
  },
  {
    id: 67,
    topic: "React",
    question:
      "What is a common way to conditionally render a component or element in React?",
    answerOptions: [
      {
        text: "Using a `<conditional>` JSX tag which React translates.",
        rationale:
          "There is no `<conditional>` tag; logic must be expressed using standard JavaScript constructs.",
        isCorrect: false,
      },
      {
        text: "Defining the components in separate files and importing only the one needed.",
        rationale: "The *rendering* choice is made inside the parent's JSX.",
        isCorrect: false,
      },
      {
        text: "Using the ternary operator (`condition ? <ComponentA /> : <ComponentB />`) inside JSX.",
        rationale:
          "The ternary operator is a concise way to choose one of two expressions to execute based on a condition within the JSX.",
        isCorrect: true,
      },
      {
        text: "Calling `if/else` statements outside the functional component's return block.",
        rationale:
          "While `if/else` can be used *before* the return, the ternary operator or logical AND are more common *inside* the JSX return.",
        isCorrect: false,
      },
    ],
    hint: "This involves standard JavaScript logic embedded directly into the markup.",
  },
  {
    id: 68,
    topic: "React",
    question:
      "When rendering a list of elements in React, what is the importance of the `key` prop?",
    answerOptions: [
      {
        text: "It is used to pass unique styling to each list item via CSS.",
        rationale:
          "The `key` prop is for React's internal reconciliation process, not for styling.",
        isCorrect: false,
      },
      {
        text: "It helps React efficiently identify which items have changed, been added, or been removed.",
        rationale:
          "The `key` prop provides a stable identity to list items, which is crucial for performance during re-renders.",
        isCorrect: true,
      },
      {
        text: "It defines the HTML element type for each item in the list.",
        rationale: "The element type is defined by the surrounding JSX tags.",
        isCorrect: false,
      },
      {
        text: "It is the only way to pass data from the parent to the list item component.",
        rationale: "Data is passed via other props.",
        isCorrect: false,
      },
    ],
    hint: "This prop must be unique among its siblings in the list.",
  },
  {
    id: 69,
    topic: "React",
    question:
      "Which of the following best describes a **Functional Component** in modern React?",
    answerOptions: [
      {
        text: "A class that extends `React.Component` and uses a `render()` method.",
        rationale: "This describes a Class Component.",
        isCorrect: false,
      },
      {
        text: "A JavaScript object that contains state and lifecycle methods.",
        rationale:
          "This is a simplified description of a Class Component instance.",
        isCorrect: false,
      },
      {
        text: "A custom HTML tag that is defined using JSX syntax.",
        rationale:
          "Functional components are JavaScript functions that *return* JSX.",
        isCorrect: false,
      },
      {
        text: "A JavaScript function that accepts a single `props` object and returns React elements.",
        rationale:
          "Functional components are now the standard way to write components.",
        isCorrect: true,
      },
    ],
    hint: "They are essentially functions that map props to UI elements.",
  },
  {
    id: 70,
    topic: "React",
    question:
      "How do you prevent the default browser action (like a form submitting) in a React event handler?",
    answerOptions: [
      {
        text: "By returning `false` from the event handler function.",
        rationale:
          "Returning `false` does not reliably stop the default behavior in React's synthetic event system.",
        isCorrect: false,
      },
      {
        text: "By setting the event's `default` property to `false`.",
        rationale:
          "There is no standard `default` property to set on the event object.",
        isCorrect: false,
      },
      {
        text: "By calling the `preventDefault()` method on the synthetic event object.",
        rationale:
          "The synthetic event object passed to the handler has a `preventDefault()` method, which stops the default action.",
        isCorrect: true,
      },
      {
        text: "By using the `<PreventDefault>` custom component wrapper.",
        rationale:
          "Preventing default behavior is done with a method on the event object.",
        isCorrect: false,
      },
    ],
    hint: "This method is common to event objects in both plain JavaScript and React's event system.",
  },
  {
    id: 71,
    topic: "React",
    question:
      "In a functional component, which hook is primarily used to perform an action when the component is *first* mounted?",
    answerOptions: [
      {
        text: "useLayoutEffect with an empty dependency array.",
        rationale:
          "This hook runs synchronously after all DOM mutations, but `useEffect` is the standard for mount-time side effects.",
        isCorrect: false,
      },
      {
        text: "useState with an initial function argument.",
        rationale:
          "`useState` is for managing state, not for running a side effect upon mounting.",
        isCorrect: false,
      },
      {
        text: "useEffect with a return function for cleanup.",
        rationale:
          "The return function in `useEffect` is for cleanup on unmount.",
        isCorrect: false,
      },
      {
        text: "useEffect with an empty dependency array (`[]`).",
        rationale:
          "An empty dependency array ensures the effect only runs once after the initial render and not again.",
        isCorrect: true,
      },
    ],
    hint: "This mimics the 'setup' phase of a class component's lifecycle.",
  },
  {
    id: 72,
    topic: "React",
    question:
      "React follows a **unidirectional data flow**. What does this primarily mean?",
    answerOptions: [
      {
        text: "All data must flow through a global state management library.",
        rationale: "The principle applies even without a dedicated library.",
        isCorrect: false,
      },
      {
        text: "Data can be freely passed between any component without restriction.",
        rationale: "This is the opposite of the principle.",
        isCorrect: false,
      },
      {
        text: "The entire application is re-rendered whenever any piece of data changes.",
        rationale: "React uses a Virtual DOM and smart reconciliation.",
        isCorrect: false,
      },
      {
        text: "Data and state are typically passed down from parent components to child components via props.",
        rationale: "The primary data flow is top-down (parent to child).",
        isCorrect: true,
      },
    ],
    hint: "The main direction of data transmission is from the top of the component tree downwards.",
  },
  {
    id: 73,
    topic: "React",
    question:
      "In a controlled form component, what is the role of the `onChange` event handler on an input element?",
    answerOptions: [
      {
        text: "It prevents the browser from changing the input value to control the input's behavior.",
        rationale:
          "It handles the change, but it's the `value` prop that ultimately controls the input's displayed content.",
        isCorrect: false,
      },
      {
        text: "It automatically submits the form data to the server upon any input change.",
        rationale: "Submission is handled by the form's `onSubmit` handler.",
        isCorrect: false,
      },
      {
        text: "It is not needed, as React automatically handles input changes for controlled components.",
        rationale:
          "The developer must explicitly provide the `onChange` handler to update state.",
        isCorrect: false,
      },
      {
        text: "It updates the component's state with the input's new value on every keystroke.",
        rationale:
          'Controlled components rely on state to be the "source of truth," and `onChange` is essential for keeping the state synchronized with the input.',
        isCorrect: true,
      },
    ],
    hint: "This is how you connect the user's interaction back to the component's internal data.",
  },
  {
    id: 74,
    topic: "React",
    question: "By convention, how should all React components be named?",
    answerOptions: [
      {
        text: "With all lowercase letters (kebab-case).",
        rationale: "Kebab-case is used for standard HTML attributes/tags.",
        isCorrect: false,
      },
      {
        text: "With an underscore (snake_case).",
        rationale: "Snake case is not the standard for React component names.",
        isCorrect: false,
      },
      {
        text: "With a capital letter (PascalCase).",
        rationale:
          "Components should start with a capital letter (e.g., `MyComponent`) to distinguish them from regular HTML elements in JSX.",
        isCorrect: true,
      },
      {
        text: "With a lowercase letter (camelCase).",
        rationale:
          "Camel case is typically used for function names, variables, and properties.",
        isCorrect: false,
      },
    ],
    hint: "This naming convention is necessary for React to differentiate between a custom component and a built-in element.",
  },
  {
    id: 75,
    topic: "React",
    question:
      "What is a React Fragment (`<></>` or `<React.Fragment>`) used for?",
    answerOptions: [
      {
        text: "To add external libraries or stylesheets to the component.",
        rationale: "Libraries are added via imports.",
        isCorrect: false,
      },
      {
        text: "To create a reusable, self-closing component for complex logic.",
        rationale: "This describes a custom component.",
        isCorrect: false,
      },
      {
        text: "To group multiple elements without adding an extra node to the DOM.",
        rationale:
          "Fragments allow a component's `render` method to return multiple elements without wrapping them in an unnecessary `<div>` or other container.",
        isCorrect: true,
      },
      {
        text: "To define the section of the component that should not be re-rendered.",
        rationale:
          "Optimizing re-renders is typically done with hooks like `useMemo` or `React.memo`.",
        isCorrect: false,
      },
    ],
    hint: "This is useful when a component needs to return sibling elements but must satisfy the single-root rule.",
  },
  {
    id: 76,
    topic: "React",
    question:
      "The `useReducer` Hook is an alternative to `useState` that is typically used for what purpose?",
    answerOptions: [
      {
        text: "To handle asynchronous data fetching only.",
        rationale:
          "It can handle async actions, but its primary role is state management.",
        isCorrect: false,
      },
      {
        text: "To manage complex state logic involving multiple sub-values or when the next state depends on the previous one.",
        rationale:
          "`useReducer` follows the Redux pattern (reducer and action), making complex state transitions predictable.",
        isCorrect: true,
      },
      {
        text: "To perform manual DOM manipulation inside a component.",
        rationale: "This is handled by `useRef` and `useEffect`.",
        isCorrect: false,
      },
      {
        text: "To subscribe to values from a parent component.",
        rationale: "This is handled by the Context API and `useContext`.",
        isCorrect: false,
      },
    ],
    hint: "This hook is often compared to a pattern from the Redux state library.",
  },
  {
    id: 77,
    topic: "React",
    question:
      "What is the primary benefit of creating a Custom Hook (e.g., `useFetcher`)?",
    answerOptions: [
      {
        text: "It guarantees that the wrapped component will never re-render.",
        rationale: "Hooks don't guarantee no re-renders; they simplify logic.",
        isCorrect: false,
      },
      {
        text: "It allows for the reuse of stateful logic across multiple components without duplicating code.",
        rationale:
          "Custom hooks are a convention for sharing logic (state and effects) between functional components.",
        isCorrect: true,
      },
      {
        text: "It converts a functional component into a class component internally.",
        rationale: "Hooks are specifically for functional components.",
        isCorrect: false,
      },
      {
        text: "It gives direct access to the component's internal render method.",
        rationale: "Hooks abstract away the render details.",
        isCorrect: false,
      },
    ],
    hint: "Think about code sharing and abstraction.",
  },
  {
    id: 78,
    topic: "React",
    question: "In React, what is the **SyntheticEvent** system?",
    answerOptions: [
      {
        text: "A way to automatically convert class component events to functional component events.",
        rationale: "It handles cross-browser compatibility.",
        isCorrect: false,
      },
      {
        text: "A custom event listener that attaches directly to the browser's window object.",
        rationale: "Events are attached to the document root.",
        isCorrect: false,
      },
      {
        text: "A wrapper around the browser's native event system to ensure cross-browser consistency and unified behavior.",
        rationale:
          "Synthetic Events normalize event objects across different browsers and implement event pooling.",
        isCorrect: true,
      },
      {
        text: "A mechanism to delay event handling until the component has fully rendered.",
        rationale: "Event handling occurs immediately.",
        isCorrect: false,
      },
    ],
    hint: "This system is responsible for making event handling reliable across all browsers.",
  },
  {
    id: 79,
    topic: "React",
    question: "A React Portal is used to render a component's output where?",
    answerOptions: [
      {
        text: "Inside the component's own JSX structure, but wrapped in a Fragment.",
        rationale: "This is standard rendering, not a Portal.",
        isCorrect: false,
      },
      {
        text: "Into a different DOM node that exists outside the parent component's DOM hierarchy.",
        rationale:
          "Portals allow components to escape clipping or positioning issues of their parent, commonly used for modals or tooltips.",
        isCorrect: true,
      },
      {
        text: "Only in the component's shadow DOM for isolated styling.",
        rationale:
          "React does not typically use Shadow DOM; Portals use standard DOM.",
        isCorrect: false,
      },
      {
        text: "Asynchronously after the entire component tree has completed rendering.",
        rationale: "Portals render synchronously like normal components.",
        isCorrect: false,
      },
    ],
    hint: "This feature is often needed for things like modals or floating tooltips.",
  },
  {
    id: 80,
    topic: "React",
    question:
      "The `React.memo` High Order Component (HOC) is used for what performance optimization purpose?",
    answerOptions: [
      {
        text: "To wrap class components and convert them to functional components.",
        rationale: "It only wraps functional components.",
        isCorrect: false,
      },
      {
        text: "To automatically cache the result of expensive calculations within the component.",
        rationale: "This is the job of `useMemo`.",
        isCorrect: false,
      },
      {
        text: "To prevent a functional component from re-rendering if its props have not changed (a form of memoization).",
        rationale:
          "This is the exact purpose of `React.memo`, performing a shallow comparison of props.",
        isCorrect: true,
      },
      {
        text: "To limit the number of times the `useEffect` hook runs.",
        rationale: "This is controlled by the dependency array in `useEffect`.",
        isCorrect: false,
      },
    ],
    hint: "This tool helps to avoid unnecessary component updates based on prop stability.",
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
