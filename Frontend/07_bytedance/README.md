# Bytedance Frontend Mock Interview

## 01 JavaScript
### 01.01 Implement Promise.all() [Medium]
 * Psuedocode
 * Create an Object which will return all fn
 * all should return a promise
 * in promise loop through all promises and assign responses to array using index instead of push since order is important
 * also use a counter to count number of promises resolved instead of index since order is async
 * When the number of promises resolved is equal to the length of the task array we will resolve the overall results array.

### 02 Implement Array prototype fn [Easy]
- myReduce
- `accumulator = callback(accumulator, this[i], i, this)`

## 02 UI
### 02.01 Implement a Dropdown UI

## 03 Trivia
### 03.01 cookie vs localStorage vs sessionStorage
- Capacity: 4KB, 10MB, 5MB
- Browsers: HTML4, HTML5, HTML5
- Accessible From: Any window, any window, current tab
- Expiration: Manual, never, on tab close
- storage: client and server, client, client
- sent with requests: yes, no, no
- cookies are better used for tasks related to user authentication which needs data to be sent to server:
    - authenticating, session tracking, remember specific information about the user like his name, password, last visited date etc

## 04 Algorithms
### 04.01 Merge two sorted integer arrays, remove duplicates [Easy]

### 04.02 You have an image on a page, write css and js so that when mouse is over the image, it rotates 180 deg with 1 sec animation [Easy]

### 04.03 Given a list of points, find out if any four of them form a square. Return 'true' if possible, else 'false' [Hard] - INCOMPLETE
- Example: [[0, 0], [2, 0], [1, 1], [0, -1], [-1, -1], [0, 2], [0, 1], [1,0]] -> true
- https://leetcode.com/problems/valid-square/

### 04.04 Check for balanced brackets in a string [Easy]
- https://leetcode.com/problems/valid-parentheses/
 * Pseudocode
 * create a stack to hold closing paranthesis
 * loop through the string
 * For every opening paranthesis, push closing paranthesis in stack
 * if closing paranthesis encountered, pop item from stack and compare if equal fine
 * if popped item is undefined or doesn't match then return false
 * if length of stack is zero return true
 * return false

### 04.05 Path b/w two nodes - INCOMPLETE

### 04.06 Find the islands in a grid of land and sea - INCOMPLETE
- https://leetcode.com/problems/number-of-islands/solution/
