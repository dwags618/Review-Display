# Review Display

The goal of this excercise is to build a simple version of a review display widget commonly found on retailer product detail pages.

The widget will primarily fetch and render a list of reviews. It will allow users to sort reviews, and vote for helpful or unhelpful reviews. The widget must be implemented using [React](https://reactjs.org/), but you are free to use any other dependencies.

The starter project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), usage details can be found [here](CREATE_REACT_APP_README.md). The starter project includes a webservice that returns review data, as well as some helpful components.

## Requirements

* Node JS >= 4 https://nodejs.org/en/
* Yarn >= 1 https://yarnpkg.com/en/

## Usage

Run `yarn` inside the project to install all dependencies.

```
yarn
```

Additional dependencies can be added by running:

```
yarn add ${pkg-name}
```

### Available Commands

| Command   | Description                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `start`   | Concurrently starts dev server and review service. **Your solution will be evaluated using this command.** |
| `app`     | Starts webpack dev server on port 3000                                                                     |
| `service` | Starts review service on port 5000                                                                         |

