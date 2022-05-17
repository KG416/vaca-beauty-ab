# 💅 VACA Beauty AB

## Prerequisites

- You need to have [node.js](https://nodejs.org/) installed

## Installation

- Clone the repo
- In a terminal, run `npm install`
- To start the project in Development mode, run `npm run start`
- It is now running at http://localhost:3000/

## Available scripts / commands

- `npm start` - Starts in development mode

## Styling
- `SASS` (a CSS extension) is used in this project.
- Components and views have separate CSS files (modules) with locally scoped classes. _Please note that element selectors are not locally scoped._
- The `global.scss` file contains global styles and variables.
- The `index.scss` file contains default settings, fonts, accessibility etc.

## Linting & code formatting

In this project `eslint` is used for linting & `prettier` is used for code formatting.

[Starting point for setup](https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi)

## Code organisation

Code is organized into the following folders:

- **data** - Dummy data in the form of products
- **views** - The main view components, that make up the different complete views
- **components** - Reusable components, such as buttons
- **utils** - Reusable functions, such as sorting
- **assets** - Static binary assets such as images
