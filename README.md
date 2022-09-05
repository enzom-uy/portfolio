<div align="center">
  <img src="https://enzomdev.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ft86s25v4%2Fproduction%2F2975627b748c46694c0b62c18f88893b3634c8b3-1355x722.png%3Frect%3D190%2C0%2C1010%2C722&w=1920&q=75" alt="logo" width="800" />
  <h1>Portfolio</h1>
  <p>
    Personal portfolio to showcase my projects and achievements.
  </p>
<!-- Badges -->
<p>
  <a href="https://github.com/enzom-uy/portfolio/commits">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/enzom-uy/portfolio">
  </a>
  <a href="https://github.com/enzom-uy/portfolio/commits">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/enzom-uy/portfolio" /> 
  </a>
</p>
<h4>
    <a href="https://enzomdev.vercel.app/">Website</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# :notebook_with_decorative_cover: Table of Contents

- [:notebook_with_decorative_cover: Table of Contents](#notebook_with_decorative_cover-table-of-contents)
  - [:star2: About the project](#star2-about-the-project)
    - [:camera: Screenshots](#camera-screenshots)
  - [:space_invader: Technologies](#space_invader-technologies)
  - [Starting the project](#starting-the-project)
    - [Prerequirements](#prerequirements)
    - [:running: Running the project locally](#running-running-the-project-locally)
<!-- About the Project -->

## :star2: About the project

<!-- Screenshots -->

### :camera: Screenshots

<div align="center"> 
  <img src="https://enzomdev.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ft86s25v4%2Fproduction%2F2975627b748c46694c0b62c18f88893b3634c8b3-1355x722.png%3Frect%3D190%2C0%2C1010%2C722&w=1920&q=75" alt="Demo screenshot" width="800" />
</div>

<!-- TechStack -->

## :space_invader: Technologies

* [Typescript](https://www.typescriptlang.org/)
  * Javascript superset that makes it actually safe (and kinda fun 😁) to use.
* [React.js](https://nextjs.org/)
  * Next is the Javascript/React framework that I chose for this project, since it's currently the one that interests me the most and fits my needs.
* [Express](https://expressjs.com/es/)
  * I used Express as my main Nodejs framework to build a really small API.
* [Chakra UI](https://chakra-ui.com/).
  * I chose to use a Component Library like Chakra UI because it allowed me to be more focused on my code, instead of styling. It increased my development time, and it's the one that I find more easy to customize if I need to.
  * Chakra needs [Framer-motion](https://www.framer.com/motion/) to work 
* [Sanity.io](https://www.sanity.io/)
  * Since my portfolio has a Works and Posts section and I didn't wanted to reinvent the wheel, I used Sanity.io as my (headless) cms, to store and manage all my posts.

<!-- Getting Started -->

## Starting the project.

<!-- Prerequisites -->

### Prerequirements

This project uses either yarn or npm as dependency/package manager. You should have npm installed if you already have Node. If you choose to use yarn, run the next command to install it:

```bash
 npm i -g yarn
```

<!-- Run Locally -->

### :running: Running the project locally

Clone the project:

```bash
  git clone git@github.com:enzom-uy/portfolio.git
```

Go to the project directory:

```bash
  cd portfolio
```

Install dependencies:

```bash
# with yarn:
  yarn
# with npm:
  npm install
```

Start the development server:

```bash
# with yarn:
  yarn start
# with npm:
  npm start
```

You'll need to declare some env variables if you actually want it to work.
