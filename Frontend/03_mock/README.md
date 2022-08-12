# Mock Interview

## 1 Tech - Coding Challenges
### 01.01 Counter [Easy]
- sol with context (App.js)
    - createContext: `const CountContext = createContext(null);`
    - useContext: `const setCount = useContext(CountContext);`
    - CountContext.Provider: `<CountContext.Provider value={setCount}></CountContext.Provider>`
- or use prop drilling without context (Counter.js)
- Implement undo functionality [Hard]
    - push all the increment and decrement fns to history stack
    - `const onIncrement = () => { setCount((c) => c + 1); setPrevFns((pFns) => [...pFns, () => setCount((c) => c - 1)]); };`
    - `const onDecrement = () => { setCount((c) => c - 1); setPrevFns((pFns) => [...pFns, () => setCount((c) => c + 1)]); }`
    - `<CounterWithUndoContext.Provider value={{ prevFns, setPrevFns, setCount }}>`
    - `const undo = () => { if (prevFns.length === 0) return; const lastFn = prevFns.pop(); lastFn(); };`
- How to implement online counter where multiple uesrs can inc or dec
    - the counter data has to be on server
    - reach server on regular interval to check for data or better use a websocket which will push data when there is any update
    - server should only take actions as input and update the data based on action
    - design decision: whether to update the latest value or not if data is not in sync b/w client and server

## 2 Tech - Theory
### 02.01 Technical Tradeoffs
- Qn: Can you please give us a scenario of your recent technical tradeoff
- choosing b/w build time or initial load performance by creating chunks. we preferred performance
- Use tradingview custom chart for all chart widgets for customizability and provide more features but it will need significant data from BE. Challenge: not much trade on our own platform for all markets. Only FXF_USDT had data so we had custom data for that market
- Replace okta sign in widget with our own widget to save bundle size since okta takes 5MB which is 50% of the overall bundle size but we haven't done it yet because we wanted to customize the flow with UX and UX doesn't have b/w for this task
- Keeping data in localstorage since BE team doesn't have b/w
- Switching b/w kyc providers to be cost effective
- UX Tradeoff: Show loading icon or not. Not showing it might create a bad experience for user with slower connection or in error scenarios for APIs with reattempts. But we decided to rather focus on the majority of users who will have faster internet and no error scenario.

### 02.02 Code review process
- Qn: Can you please walk me through your code review process
- If entirely new feature then: what the code should do?
- look at tests added by developer to get an idea about what the changes were meant to do. Read JIRA requirements if there is one for it
- load UI and test if feature is properly implemented
    - check for performance issues etc
- scan for potential bugs or improvements
- does the new code fit with the current project standards and not too much different in design point of view ex: a PR with class components while the existing team is using func components
- If an update then: What the code previously was doing? and why the new code is a better idea?
- psychological feedback:
    - give positive reviews if something is implemented nicely
    - give constructive reviews for something that can be improved

### 02.03 Performance issues
- Qn: How do you go about fixing performance issues ex: fixing initial load
- Tools to analyse: 
    - lighthouse, 
    - pagespeed web dev
- look for slow network calls
- waterfalls
- lazy load routes or components that are not required on first load]
- look for packages optimization and see if any other package can do the same task with less memory or build your own custom code

### 02.04 Redux vs Context
- I use redux for handling all server data and context for all UI related data to be shared across components
    - try not to use both if data is just local and doesn't need to be central
- Using redux for server data because most developers in team are familiar with it
    - But I will be more than happy to switch to something like: **relay** or **apollo** or **react-query** which are specifically designed to handle server cache
