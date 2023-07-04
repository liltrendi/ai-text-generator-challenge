<div align="center">

  <img src="public/static/images/app-logo.svg" alt="logo" width="100" height="auto" />
  <h1>OpenAI Text Generator Challenge</h1>
  
  <p>
    A polished, user-friendly web application that leverages OpenAI's API to generate text based on user prompts 
  </p>

<h4>
    <a href="https://ai-text-generator-challenge.netlify.app">View Demo</a>
  <span> · </span>
    <a href="https://github.com/liltrendi/ai-text-generator-challenge/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/liltrendi/ai-text-generator-challenge/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

-   [About the Project](#star2-about-the-project)
    -   [Live Demo](#triangular_flag_on_post-live-demo)
    -   [Screenshots](#camera-screenshots)
    -   [Tech Stack](#space_invader-tech-stack)
    -   [Features](#dart-features)
    -   [Color Reference](#art-color-reference)
    -   [Environment Variables](#key-environment-variables)
-   [Getting Started](#toolbox-getting-started)
    -   [Prerequisites](#bangbang-prerequisites)
    -   [Installation](#gear-installation)
    -   [Running Tests](#test_tube-running-tests)
    -   [Run Locally](#running-run-locally)
-   [License](#warning-license)
-   [Contact](#handshake-contact)
-   [Acknowledgements](#gem-acknowledgements)

<!-- About the project -->

## :star2: About the Project

This is a submission for [this event](https://community.distributed.com/networks/events/117733) by Distributed, whose challenge is to build an operational AI-powered conversational interface that interacts with OpenAI to give responses based on user input.

For reference, the challenge details are on this page: [Distributed Challenge](https://649cd07e63b6a10f6bd568d0--gentle-cat-7fd94b.netlify.app/challenge)

<!-- Live Demo -->

### :triangular_flag_on_post: Live Demo

This web app is hosted on [Netlify](https://netlify.com) (crucial choice as I needed to use their identity service for authentication). You can try it out here: [OpenAI Text Generator Challenge](https://ai-text-generator-challenge.netlify.app)

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
  <img src="public/static/images/demo-chat-ui.svg" alt="screenshot" width="400" height="500" />
</div>

<!-- TechStack -->

### :space_invader: Tech Stack

<details>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a> - viewing library</li>
    <li><a href="https://www.typescriptlang.org/">Typescript</a> - type safety</li>
    <li><a href="https://styled-components.com/">Styled components</a> - styles organization</li>
    <li><a href="https://storybook.js.org/">Storybook</a> - component library</li>
    <li><a href="https://nextjs.org/">Next.js</a> - static site generator</li>
  </ul>
</details>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://netlify.com">Netlify</a> - deployment</li>
    <li><a href="https://docs.netlify.com/visitor-access/identity/">Identity</a> - authentication</li>
    <li><a href="https://www.netlify.com/products/functions/">Cloud Functions</a> - lambda endpoints</li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> - local message persistence</li>
  </ul>
</details>

<!-- Features -->

### :dart: Features

-   Login
-   Signup
-   Chat

<!-- Color Reference -->

### :art: Color Reference

| Color         | Hex                                                                    |
| ------------- | ---------------------------------------------------------------------- |
| White         | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff       |
| Light White 1 | ![#f1f1f1](https://via.placeholder.com/10/f1f1f1?text=+) #f1f1f1       |
| Light White 2 | ![#e0e0e0](https://via.placeholder.com/10/e0e0e0?text=+) #e0e0e0       |
| Light Gray 1  | ![#a4a9bf](https://via.placeholder.com/10/a4a9bf?text=+) #a4a9bf       |
| Light Gray 2  | ![#9f9f9f](https://via.placeholder.com/10/9f9f9f?text=+) #9f9f9f       |
| Mid Gray      | ![#656c8c](https://via.placeholder.com/10/656c8c?text=+) #656c8c       |
| Dark Gray     | ![#2d3142](https://via.placeholder.com/10/2d3142?text=+) #2d3142       |
| Pink          | ![#ff007a](https://via.placeholder.com/10/ff007a?text=+) #ff007a       |
| Green         | ![#46b455](https://via.placeholder.com/10/46b455?text=+) #46b455       |
| Black         | ![#000000](https://via.placeholder.com/10/000000?text=+) #000000       |
| Black 1       | ![#00000033](https://via.placeholder.com/10/00000033?text=+) #00000033 |
| Red           | ![#FF0000](https://via.placeholder.com/10/FF0000?text=+) #FF0000       |
| Transparent   | ![#00000000](https://via.placeholder.com/10/00000000?text=+) #00000000 |

<!-- Env Variables -->

### :key: Environment Variables

To run this project, create a `.env` file first, then copy the contents of the `.env.sample` file and paste them in the created file. Finally, obtain the relevant keys and use them in the newly created `.env` file.

<!-- Getting Started -->

## :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

This project uses [npm](npmjs.com) as package manager (version 17.19.1 of [Node.js](https://nodejs.org) was used). You will also need [Git](https://git-scm.com) installed.

<!-- Installation -->

### :gear: Installation

Open up a terminal, clone (download) the project from [Github](https://github.com/liltrendi/ai-text-generator-challenge), and navigate to it:

```bash
  git clone https://github.com/liltrendi/ai-text-generator-challenge
```

<!-- Running Tests -->

### :test_tube: Running Tests

To run one-off tests, run the following command

```bash
  npm test
```

Run the following to have the reload on code changes:

```bash
  npm run test:watch
```

Update snapshots using:

```bash
  npm run test:updatesnapshots
```

Generate coverage reports with:

```bash
  npm run test:coverage
```

<!-- Run Locally -->

### :running: Run Locally

Go to the project directory

```bash
  cd ai-text-generator-challenge
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<!-- License -->

## :warning: License

Distributed under the MIT license. See LICENSE for more information.

<!-- Contact -->

## :handshake: Contact

Your Name - [Brian Njogu](https://brayo.co) - briancanspit@gmail.com

Project Link: [https://github.com/liltrendi/ai-text-generator-challenge](https://github.com/liltrendi/ai-text-generator-challenge)

<!-- Acknowledgments -->

## :gem: Acknowledgements

-   [Awesome README](https://github.com/Louis3797/awesome-readme-template)
