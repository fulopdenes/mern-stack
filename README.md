# Mern Stack - Employee Data Manager
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Description 
The employee parameters (ex.: favorite color, current salary, name, desired
salary, position) can be recorded by using this program. 

## Features
1. Add new / update existing / delete employee parameters.
2. Filtering, sorting existing data.
3. Picking colors from palette.
4. Add new / update existing / delete equipment parameters.
5. Responsive UI design.

## Installation Guide & Getting Started

### I. Server side:
```bash
cd ./server
```
#### Install dependencies

```bash
npm install
  ```
#### Configuration of `.env` file:

At .env file fill up the environment variable for your personal mongodb connection url.


<!-- ABOUT THE PROJECT -->
## About The Project


#### Prepare the database
Make sure the MongoDB URL is fine. After the missing URL is completed, please follow these steps:
```bash
npm run populate
```
**Populate command** will run the populate.js file as a script and it will generate a buch of starter data for your 
database. 
#### Running server side:

```bash
npm run dev
 ```

It will start the server with nodemon. So it will watch the changes and restart the server if some ot the files changed.

### II. Client side:

```bash
cd ./client
```

#### Install dependencies

```bash
npm install
```

#### Proxy

Watch for the port of your rest api. By default it will bind on port 8080 and the frontend proxy settings also depend on this configuration. If you for some reasons change the port of the backend, don't forget to change the ./client/package.json proxy settings as well.

#### Running frontend part:

```bash
npm start
```

And the create-react-app react-scripts package will start your frontend on the 3000 port and you can visit the http://localhost:3000 on your preferred browser.

#### Testing with test.http

If you like to try the endpoints of the rest api, you can check the test.http file for urls are should work on your environment as well. And if you install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extenstion for vscode you can actually run those in your editor.

## Screenshots
In progress..

## Used Technologies

#### Backend - Express.js:

* **Programming Language**: JavaScript ES6+
* **Database**: Mongo DB

#### Frontend - React Libraries:

* **Framework/Library:**  React
* **JavaScript Version**: JavaScript ES6+
* **Styling**: CSS
* **Routing**: React Router
* **UI Components**: Material-UI
* **API Communication**: Fetch API

## License
This project is licensed under the MIT License.
See the LICENSE file for more details.
MIT © Fülöp Dénes

## Contact Information

If you have any questions, suggestions, or feedback, please feel free to contact me at denes.fulopp@gmail.com.

## Acknowledgments

In progress..
