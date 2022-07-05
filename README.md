<div id="top"></div>

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MiguelCollado/mapit-motorbikes">
    <img src="public/images/logo.png" alt="Logo" width="385" height="138">
  </a>

<h3 align="center">Mapit Motorbikes</h3>

  <p align="center">
    Technical test for Mapit IoT selection process.
    <br />
    <a href="https://github.com/MiguelCollado/mapit-motorbikes"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://mapit.ironmike.es">View Demo</a>
    ·
    <a href="https://github.com/MiguelCollado/mapit-motorbikes/issues">Report Bug</a>
    ·
    <a href="https://github.com/MiguelCollado/mapit-motorbikes/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://mapit.ironmike.es)

This project is a technical test for Mapit IoT selection process. The goal is to build a web application that will be 
used to see and sell your already bought motorbikes. The application has two main views: Dashboard, where a list of all
your motorbikes will appear; and a detail view, thats will show the details of a specific motorbike.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Vue.js](https://vuejs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In order to start a local server for development, you'll need to do the following:

### Prerequisites

Your will need to install NPM installed in your system:
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a Google Cloud Maps API Key at [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
2. Clone the repo
   ```sh
   git clone https://github.com/MiguelCollado/mapit-motorbikes.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env` (already provided one for testing)
   ```js
   const VITE_GOOGLE_MAPS_API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can execute several scripts defined in `package.json` to start the application:

 - `npm run dev`: Starts the application in development mode.
 - `npm run preview`: Starts the application in production mode.
 - `npm run build`: Builds the application for production.
 - `npm run test`: Runs the vitest tests.
 - `npm run lint`: Runs the linting tests.
 - `npm run cypress:e2e`: Runs cypress e2e tests with GUI
 - `npm run cypress:e2e:ci`: Runs cypress e2e tests with terminal cli
 - `npm run cypress:component`: Runs cypress component tests with GUI
 - `npm run cypress:component:ci`: Runs cypress component tests with terminal cli

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the Apache License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Miguel Collado - [@iironmiike](https://twitter.com/iironmiike) - hi@ironmike.es

Project Link: [https://github.com/MiguelCollado/mapit-motorbikes](https://github.com/MiguelCollado/mapit-motorbikes)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/MiguelCollado/mapit-motorbikes.svg?style=for-the-badge
[stars-url]: https://github.com/MiguelCollado/mapit-motorbikes/stargazers
[issues-shield]: https://img.shields.io/github/issues/MiguelCollado/mapit-motorbikes.svg?style=for-the-badge
[issues-url]: https://github.com/MiguelCollado/mapit-motorbikes/issues
[license-shield]: https://img.shields.io/github/license/MiguelCollado/mapit-motorbikes.svg?style=for-the-badge
[license-url]: https://github.com/MiguelCollado/mapit-motorbikes/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/miguel-collado-dev
[product-screenshot]: public/images/screenshot.png
