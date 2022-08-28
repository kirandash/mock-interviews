# Google Frontend Mock Interview
- https://www.frontendinterviewhandbook.com/companies/google-front-end-interview-questions/

## 01 JavaScript
### 01.01 Implement the outline view for a Google doc. INCOMPLETE

### 01.02 DFS on HTML nodes [Medium]
- using recursion and looping through `childNodes`

### 01.03 BFS on HTML nodes [Medium]
- using recursion and two for loops

### 01.04 Implement throttle [Easy]
- Throttle means new request will be taken only when current one is finished. All new requests will be blocked until then

### 01.05 How do you make a function that only calls input function f every 50 milliseconds? [Easy]
- setInterval

### 01.06 How do you make a function that takes f and returns a function that calls f on a timeout [Easy]
- setTimeout

### 01.07 Given a timeline write the JavaScript to select all nodes within selection of timeline - INCOMPLETE

## 02 UI Coding
### 02.01 Design a slider component - INCOMPLETE

### 02.02 Design a Tic-Tac-Toe game/design an algorithm for Tic-Tac-Toe game.
- `return WIN_CONDITIONS.some((positions) => positions.every(position => gameBoxes[position].textContent === currentPlayerSign))`

### 02.03 Nested, Indeterminate Checkboxes - INCOMPLETE
- Implement nested checkboxes (when the parent is checked, children are checked and vice versa. Use `<input type="checkbox">`)
- https://css-tricks.com/indeterminate-checkboxes/

### 02.04 Infinite Scroll [Medium]
- Design a webpage which can auto load new posts when you reach the bottom of the page by using JavaScript. You may use AJAX and JavaScript event listeners.
- 
    API: https://www.algoexpert.io/api/testimonials : returns no data
    https://www.algoexpert.io/api/testimonials?limit=5 : returns 5 entries
    https://www.algoexpert.io/api/testimonials?limit=5&after=45 : starts after 45. after is the id of last element in previous result
- sample response
    - `{"hasNext":true,"testimonials":[{"id":"42","message":"AlgoExpert was my go-to course to ace those coding interviews."},{"id":"43","message":"I would just like to point out that AlgoExpert helped me"}]}`
- Solution steps:
    - `fetchTestimonialsAndAppend`
    - `createTestimonialElement`
    - `createTestimonialsUrl`
    - `handleScroll`
    - `const spaceLeftForScroll = this.scrollHeight - this.scrollTop - this.clientHeight;` (Important)
    - after all fetched, return from fetchTestimonialsAndAppend

### 02.04b Infinite Scroll React [Medium]
- `ref={testimonialsRef}` to get the clientHeight etc on scroll

### 02.05 Table Creator [Easy]
- Write a UI using HTML, CSS, JavaScript that allows user to enter the number of rows and columns in text input fields within a form and renders a table.

## 03 Trivia
### 03.01 Explain the CSS Box Model [Easy]
- By default: margin and borders are not included in box model. We need to apply the rule `box-sizing: border-box`

### 03.02 What happens when you type a URL into the browser and hits enter?
- You type a URL in your browser and press Enter
- Browser looks up IP address for the domain
- Browser initiates TCP connection with the server
- Browser sends the HTTP request to the server
- Server processes request and sends back a response
- Browser renders the content

### 03.03 Hide text in multiple ways
- Given some text on a web page, how many ways can you make the text disappear?
- `text-indent: -9999px;`
- `text-indent: 100%; white-space: nowrap; overflow: hidden;` less resource intensive compared to the first one
- `font-size: 0;`
- `display: none`
- `clip: rect(0,0,0,0);`: to make it accessible for sr
- `visibility: hidden`
