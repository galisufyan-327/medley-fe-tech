# Medley FE Tech


## Prerequisites

Before running the project, make sure you have the following software installed on your machine:

- Node.js v18: You can use NVM (Node Version Manager) to install Node.js v18.

## Installation

### Installing Node.js v18 using NVM

1. Install NVM (Node Version Manager) by following the instructions at [NVM repository](https://github.com/nvm-sh/nvm#installation). Choose the installation method that is suitable for your operating system.

2. Once NVM is installed, open a new terminal window or restart your terminal.

3. Install Node.js v18 by running the following command:

   ```bash
   nvm install 18
   ```

4. Verify that Node.js v18 is installed by running the following command:

   ```bash
   node --version
   ```

   You should see the version number of Node.js v18.

### Environment variables

1. Copy environment example file to .env using the following command
```bash
cp .env.example .env
```

### `npm install`
1. Run npm install to install dependencies using the following command

```bash
npm install
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Tech Specs

1. I have used the following packages to do this task

- styled-components for styling
- axios for api call.
- lodash.debounce for debouncing instead of searching as user types
- jest and it's related plugins for testing

### Loom Video
https://www.loom.com/share/bcb6664ca218436fa8c30d5cff33121c
