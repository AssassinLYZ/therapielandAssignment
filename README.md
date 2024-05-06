# Vue 3 + TypeScript + Vite 

According to the assignemnt, the whole project is setup from scratch. 
The Vue Cli is not used.

# The Framework/libraries I chose to use
### Typescript:
TypeScript enhances JavaScript's type system by providing static type checking, helping to catch errors in the code and offering better code hints and documentation.
### Vite:
Vite is a fast modern frontend build tool that leverages the native ES module feature, achieving fast hot reloads, quick build times, and providing a better development experience.
### pinia 
Recommanded by Vue3 team, easier than vuex to use. Updating with stable features
### eslint: 
ESLint is a JavaScript/TypeScript static analysis tool that helps discover and fix potential issues in code and ensures consistency in code style.
### prettier: 
Prettier is a code formatting tool that automatically formats code, ensuring consistency in code style and improving code readability and maintainability. 
Need to remain consistent with ESLint rules.
### husky
Automatically enforce code quality and prevent bad commits by running scripts/hooks on Git actions like commits and pushes.
{
   lint-staged: lint the code before submit
   commitLint: check the commit format before commit the files
}
### vitest：
A testing utility that helps in writing unit tests for Vue components with ease and efficiency.
### cypress:
An end-to-end testing framework for web applications, providing a robust and powerful environment to write, automate, and debug tests.
### msw: 
MSW (Mock Service Worker): Simplifies API mocking for development and testing by intercepting requests at the network level and providing a way to mock responses with ease.

# 🐵 Features：
Movies lised by genre 
Movies sorted by rating
Search by Name with debounce
Fully responsive
Well structured


# 🏗️ Project Src Dir Structure
src
- assets: static files
   - icons
   - images
-  components：components going to be used for the whole project
      - layouts:
        - app: layout for main pages
        - others: layout for other pages (404/auth)
      - ui: components used in the whole components (modal/hints)
-   lib:
      - api:fetch data encapulation
      - others:...
   - mocks: for msw use case
   - pages:
      - app:
          - *:app pages(use app layout)
            - components：
               - __test__：unit test
      - others:...
   - routes: 
      - modules: setup routes with clear structure
   - stores:pinia 
   - styles:style reset file / scss varible file / global scss file setup
   - types: ts type setup for the whole project
   - utils: tools for the whole application
   
   


