# OWLVEY_UI (React and Bootstrap4)

## Preview

You can check out [live preview](https://comming-soon/).

## Quick Start

1.  Go to your project folder from your terminal
2.  Run: `npm install` or `yarn install`
3.  By default app is pointing to an external api. There is a way to point to a local api, just need to install mongo db
    in your local environment and change the .env file `API_URL` to `http://localhost:3060/api`. If you want populate initital data,
    just execute the following command: `node server-api/database/test/manualTest`
4.  After install, run: `npm run start` or `yarn start`
5.  It will open your browser(http://localhost:3060)

## Note

React Reduction is built on top of [Create React App](https://github.com/facebook/create-react-app), which means all features that create-react-app supports are available.

To enable basic Google Analytics page tracking, you can add "REACT_APP_GOOGLE_ANALYTICS" variable in .env(or create env.production) file. For example, `REACT_APP_GOOGLE_ANALYTICS=xxxxxx` like this.
