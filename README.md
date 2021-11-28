[contributing]: CONTRIBUTING.md
[code_of_conduct]: CODE_OF_CONDUCT.md
[license]: LICENSE.txt

# SEI's landing page

[![Netlify Status](https://api.netlify.com/api/v1/badges/7eaf047e-5f4c-42d4-b55b-985977260d84/deploy-status)](https://app.netlify.com/sites/landing-2021-seium/deploys)

A landing page for the Software Engineering Week website built with React.

## :rocket: Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### :inbox_tray: Prerequisites

The following software is required to be installed on your system:

- [nodejs 15.7+](https://nodejs.org/en/download/)

Install all dependencies using `npm install`.

### :hammer: Development

Starting the development server.

```
npm start
```

Format your code.

```
npm format
```

Lint your code.

```
npm lint
```

Thanks to [husky](https://github.com/typicode/husky), the `lint` and `format`
script will run every time you make a commit. If you receive any warnings or
your code isn't properly formatted, you should update your commit before pushing
your code.

### :package: Deployment

Bundling the app into static files for production.

```
npm build
```

## :handshake: Contributing

Please read [CONTRIBUTING][contributing] and [CODE_OF_CONDUCT][code_of_conduct]
for details on our code of conduct and the process for submitting pull requests
to us.

## :memo: License

This project is licensed under the MIT License - see the [LICENSE][license] file
for details.
