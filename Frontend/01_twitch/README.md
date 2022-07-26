# 01 Twitch FE Mock Interview

## 01 Non-technical

1. Can you share one major solution you implemented in your project?

- The major solutions would be:
  - implement the trading screen and the multimarket screens for the trading platform.
  - implement orderbook
  - draggable and resizable trading screens
  - implement one click trading
  - implement custom trading view chart
- Improved the order book performance significantly by
  - clearing data based on bucket size ex: clear once both BID and ASK reaches 10000 entries

2. What major learning would you take from this feature implementation?

- While building the orderbook, I was not aware of all the edge cases and only came to find out them during or after implementing it. 
    And then made the design changes to fit the edge cases. I have learnt about the **IDEA OF COLLECTING INFORMATION BEFORE DESIGN AND DEVELOPMENT**. 
    That it would be nice to brainstorm with your colleagues or by yourself to find out as many edge cases as possible so that the first design draft or implementation is solid. 
    And later we did the same for all features, as a team lead I would basically write down all the cases that the feature should satisfy. And also ask my team members to go through it and add or remove any case if required.
- bugs or edge cases are basically a step back. So I tried not to have many for all the future features by sitting with testing team and write as many test cases as possible
- I have learnt how to deal with large amount of data
- I have learnt how to brainstorm with colleagues while designing some persistent layouts which might be difficult to change at a later stage
- What I wish? To have a BA to help tech team finalize the requirements

3. How did you implement the orderbook?

## 02 Technical - Tasks
### 02.01 Chat system
- Focused on React and React Patterns
- For socket connection use library: https://github.com/socketio/socket.io-client 
- Challenges:
  - Read all messages from socket connection [Easy]
    - `useEffect to initialize socket conn and disconnect on unmount`
  - When a new message comes: scroll to the new last message [Hard]
    - `flushSync(() => {})`, `listRef = useRef<HTMLUListElement>(null);`, `let lastChild = listRef.current?.lastElementChild;`, `lastChildd?.scrollIntoView`
  - Add checkbox to switch b/w colorblindmode [Easy]
  - input and button to send message [Hard]
    - to work with instance of socket via multiple events use `const socketRef = useRef<Socket | null>(null);` since it is already initialized in useEffect
    - use a form to send message to socket. make sure to add a check if socket.current exists or not
  - format message: replace all string "LUL" with image [Easy]

## 03 Technical - Questions
### 03.01 Performance
1. How did you improve performance of the trading app?
- Using performance analyzing tools like https://pagespeed.web.dev/ or lighthouse
- Use libraries that doesn't load the whole package at once. Ex: Fontawesome icons were replaced by material icons. Since FA doesn't allow you to use individual icons. 
    - Then we added our own cusotm icon library to make it even faster
- built our own custom notification library instead of using existing one
- 

### 03.02 What factors you see while choosing a package
- Around 8 list
- If package provides all the features we need
- If customizable
- Support from community
- Actively maintained
- Popularity with stars and forks
- Bundle size
- TypeScript support
- If individual items can be imported without importing the whole package

### 03.03 How you maintain security in your FE project
- Keep packages updated
- make sure there is no HTML injection and carefully review the content when there is HTML injection with `dangerouslySetInnerHTML` etc
