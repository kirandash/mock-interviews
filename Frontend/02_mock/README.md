# 02 Mock Interview

## 01 Technical - Theories

### 01.01 let vs const [Easy]
- both are ES6 keywords to create a binding or a variable. But let allows you to reassign the variable while const doesn't allow you to reassign
    - Note: This shouldn't be confused with immutability. Bcoz if const has an object then it is mutable but not reassigned

### 01.02 Redux [Easy]
- Qn: When Shall I use redux in my react project?
- project is already using it
- team already knows it
- server/data -> should go in cache in redux
    - alternate to redux for shairng server data: react-query, relay, apollo etc
- share local UI state across components
    - alternate: Context

### 01.03 dangerouslySetInnerHTML [Easy]
- Qn: When shall I use `dangerouslySetInnerHTML` or if I should ever use it?
- Use it when you get HTML from server. 
    - Ex: in case where data from CMS or BE which has some HTML needs to be injected to the page. Use `dangerouslySetInnerHTML` if you are sure the content to be injected is entirely safe and prepared by us.
- If HTML is coming from user, we should sanitize it first before injecting to HTML

## 02 Technical Tasks
### 02.01 Center a div to page [Easy]

### 02.02 Algo: Invert a tree [Hard]
- Qn: node: {value: 5, left: {...}, right: {...}} Each node has a value and left and right obj. Left and right can be null
- Qn: By inverting each nodes left and right value should be swapped
- Solution: Swap and Recursion

### 02.03 Algo: Rabbit hole [Medium]
- Qn: There are 100 holes in line and rabbit can hide in one of the holes. u can look at only one hole at a time. Every time you look at a hole, if rabbit is not in it then it jumps to the adjacent hole.
- Pseudocode:
    - Start from left
    - if true return index
    - if false go to next index and check if rabbit is there return index else also check if rabbit at prev/next index and return prev/next index
    - keep looping till end
