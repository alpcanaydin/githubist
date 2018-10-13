# Github.ist

This is the Web application repo for https://github.ist. You may also want to take a look to [API](https://github.com/alpcanaydin/githubist-api) and [Fetcher](https://github.com/alpcanaydin/githubist-fetcher)

## Installation

You need to have `yarn` installed in your computer. After, simple run the command `yarn` in project directory in order to install dependencies. As last step, please copy `.env.sample` file as `.env` and update the variables with the actual values you want to use.

## Starting the Application

You can run `yarn start` command in the project directory. Browser window will pop up and you'll able to see development server.

## Isolated Development

All the components in the `components` folder **MUST HAVE** stories in their folders. By this way all developers will be able to see what does component do and how they behave various props.

To start Storybook, run the command below;

```
yarn run storybook
```

Storybook server will be available at https://0.0.0.0:6006.

## Contributing

Let's say you are developing a new future in this repository. Here are the steps you need to follow;

- Fork this repository
- While developing a component or util function and etc. Please aware of you need to test them.
- All tests must be placed to same folder with the tested file.
- You need to check the Linters whether the app state is valid via `yarn lint` command.
- You need to format your code via `yarn format`. System will also run this command automatically on commit stage.
- Run tests to check whether everything works correctly.
- Push your branch to remote repo.
- Open an Pull Request and assign the relavent people as reviewers to this PR.

> **NOTE:** Please run `yarn flow-typed-install` command after any new package added to application. This will bring flow-type definitions of newly created packages to the application or at least it will add stub definitions.
