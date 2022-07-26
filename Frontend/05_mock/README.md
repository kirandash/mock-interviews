# Mock Interview 5
## 01 Non Tech
### 01.01 Short Intro
- Qn:
    - I am working as Lead FE Dev for --- since last 2 years. Where I helped the company build FE of the trading platform, go to production and maintain or release new features afterwards. During the process I helped the company build the FE, QA team.
    - Prior to that I have 6 years working as FE developer in different domains: banking, real estate, healthcare etc.
- Qn: Current role and career history
    - I am working as a Lead FE dev for the dev team
    - role:
        - lead: 
            - dsu, 
            - biweekly sprint planning, 
            - weekly cross team status report, 
            - task grooming with product team
            - monthly one to one with team members
            - review pull requests
        - dev:
            - develop, 
            - debug, 
            - code refactor, 
            - documentation etc
- Qn: Why React?
    - Jobs and community
    - Learn once and use any where. Ex: Web, desktop
    - Popular
- Qn: React vs React native?
    - Styling on react native or mobile app is way limited compared to web
    - managing backward compatibilty is a burden

## 02 Tech - Coding challenge
### 02.01 setup and isInDict [Easy]
- create a setup constructor fn with a method to check if a word isInDict or not
- also add optimization if possible

### 02.02 isInDict with wild card (*) check [Hard]
- 
    ```
      const result = this.dict.some((dictWord) => {
        const regexTemplate = word.replace(/\*/g, "."); // . is for any in regex Note: replaceAll() can be used in ES12+
        const regex = new RegExp(`^${regexTemplate}$`);
        return regex.test(dictWord);
      });
    ```

### 02.03 
