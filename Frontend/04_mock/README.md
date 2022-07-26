# Mock Interview 4
- URL: https://codesandbox.io/s/react-fake-interview-dtw40

## 01 Motivational Questions
### 01.01 New Skills
- Qn: Intro
- I am Kiran, working as lead FE.
    - role:
        - team lead
            - lead DSU with team of 5 UI, 2 QA and review status
            - lead bi weekly sprint planning and set/review deadlines
            - lead monthly one to one meeting with team member
            - attend grooming session for tasks/features
            - attend weekly status checks for leads
        - developer
            - working on: implementing features, fixing bugs, code refactoring, documentation
- Qn: Tell me about something you have learnt new this week
- I have been going through some case studies for popular apps for performance improvement

## 02 Tech Coding Challenge
### 02.01 React File Listing Challenge [Hard]
- This awesome feature called server components will make it to production next week, someone made an animated intro for the keynote presentation that sums up very well the feature in 10 seconds, showing a tree with different colors for client and server components.
![keynote](./public/keynote.png)
- Our client, "molecule text editor" assigned you to work on the "sidebar > files" team. They want to have a files tree component that shows `*.server` and `*.client` files with different colors (and their correct indentation).
![demo](./public/demo.png)
- They left two mock files (data-nested.json and data-plain.json) in the project for you to choose which structure do you preffer. As usual friendly backenders, they said you can pick whatever file structure you want and they will refactor everything on their side based on your decission.

- **Tasks list:**
    - [] Show all folders and files using `ul` and `li` elements.
    - [] Files and folders should have correct indentation based on how levels deep they are
    - [] Folders can be toggled to show / hide their content
    - [] `*.server` and `*.client` files should have different colors than the rest of the files
- **Solutions**: with Recursion of Functional components
    - FileSystem.tsx with object DS (Nested System)
    - FileSystemPlainDS.tsx with obj of array DS (Plain system)

## 03 Algorithms
### 03.01 Valid Paranthesis - multiple paranthesis types ([{}]) [Medium]
* Pseudocode:
   * Initialize a stack
   * Loop through the string of brackets
   * If we encounter an opening bracket, **push the corresponding closing bracket to the stack**
   * If we encounter a closing bracket, check the stack: if it is empty then invalid. otherwise pop the last item from stack and if it does not match then invalid
   * End of the loop if stack length is zero: then valid
   * Otherwise invalid

### 03.02 Count Salutes - B/w moving persons [Medium]
* Pseudocode: Approach 1 (Better)
   * Loop through string
   * Create encounters array
   * For every right person push zero salutes to salutes array - possible oncoming encounter
   * If left person comes next and encounters array has length: add one to all encounters
   * Loop through encounters - multiply by 2 and add all = salutes
   * return salutes
* Pseudocode: Approach 2
    * Loop through string
    * Create leftArrows and rightArrows arrays and store index in each arrays
    * create pairs variable to hold all pairs
    * loop through left and rightArrows
    * if index of left arrow is less than index of right arrow continue to next loop else increment pairs
    * return pairs

### 03.03 Bill to customers - Clerk [Medium]
* Pseudocode - approach 1
    * loop through queue
    * create variable counterMoney to store counterMoney after sell
    * count change to give = bill - price
    * if change is 0 add price to counterMoney
    * if change is less than counterMoney then add price to counterMoney and give back change to customer
    * else break loop and return No (change > counterMoney)
    * Return Yes in end
