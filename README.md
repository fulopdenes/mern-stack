# Mern Stack - Employee Data Manager

Employee data can be recorded, such as: favorite color, current salary, name, desired salary, position name.

## Features
1. Add new / update existing / delete employee paramters.
2. Filtering, sorting existing data.
3. Add new / update existing / delete equipment parameters.

## Installation Guide & Getting Started

1. Fork this repository.
2. Navigate to the project directory: cd mern-stack
3. Install dependencies for the backend:
   * Run cd backend to enter the backend directory.
   * Run mvn install to install the required Java dependencies. `npm install`
4. Install dependencies for the frontend:
   * Run cd frontend to enter the frontend directory.
   * Run npm install to install the required dependencies. `npm install`
5. Database setup:
   * Make sure you have PostgreSQL installed and running.
   * Configure the database connection in the application.properties file located in the backend/src/main/resources
     directory.
   * Create the necessary database tables by running the provided SQL scripts in the database directory.
6. Start the backend server:
   * Run cd backend to enter the backend directory.
   * Run mvn spring-boot:run to start the Spring Boot server. `npm start`
7. Start the frontend development server:
   * Run cd frontend to enter the frontend directory.
   * Run npm start to start the React development server.
8. Open your web browser and access the application at http://localhost:3000

### Server side

#### Install dependencies
```bash
cd ./server
npm install
```

#### .env file
Copy the .env.sample as .env and fill up the environment variable for your personal mongodb connecttion url.

#### Prepare the database

```bash
cd ./server
npm run populate
```

**populate command** will run the populate.js file as a script and it will generate a buch of starter data for your database. 
#### Running the code

```bash
cd ./server
npm run dev
```

It will start the server with nodemon. So it will watch the changes and restart the server if some ot the files changed.

#### Testing with test.http

If you like to try the endpoints of the rest api, you can check the test.http file for urls are should work on your environment as well. And if you install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extenstion for vscode you can actually run those in your editor.



### Client side

#### Install dependencies

```bash
cd ./client
npm install
```

#### Proxy

Watch for the port of your rest api. By default it will bind on port 8080 and the frontend proxy settings also depend on this configuration. If you for some reasons change the port of the backend, don't forget to change the ./client/package.json proxy settings as well.

#### Runnig the code

```bash
cd ./client
npm start
```

And the create-react-app react-scripts package will start your frontend on the 3000 port and you can visit the http://localhost:3000 on your preferred browser.

## Screenshots
In progress..

## Used Technologies

This fullstack project was developed using the following technologies and frameworks:

#### Backend:

* **Programming Language**: Java 17
* **Framework**: Spring Boot 3.1.0
* **Database**: PostgreSQL 15.1
* **API Development**: Spring Web
* **Authentication/Authorization**: -----. _(not implemented yet, planned to be Spring Security)_
* **Caching**: -----. _(not implemented yet, planned to be Caffeine Cache)_
* **Testing**: -----. _(not implemented yet, planned to be JUnit, Mockito)_
* **Deployment**: Docker, Render.com (Render.com - Web Services)

#### Frontend:

* **Framework/Library:**  React
* **JavaScript Version**: JavaScript ES6+
* **Styling**: CSS
* **State Management**: ----.  _(not implemented yet, planned to be Redux)_
* **Routing**: React Router
* **UI Components**: Material-UI
* **API Communication**: Fetch API
* **Testing**: ----.  _(not implemented yet, planned to be Jest, React Testing Library)_
* **Build/Bundle**: ----.  _(not implemented yet, planned to be Webpack)_
* **Deployment**: Docker, Render.com (Render.com - Static Site)


## Configuration
Open the application.properties file located in [path/to/application.properties].

Configure the database connection settings by modifying the following properties:
* spring.datasource.url: [Database URL]
* spring.datasource.username: [Database username]
* spring.datasource.password: [Database password] 

## Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to submit a pull request.
Modify the code and customize the application according to your specific requirements.
Add new components, endpoints, or database models as needed to extend the application's functionality.
Please ensure that your changes are well-documented and tested.

## License
This project is licensed under the MIT License.
See the LICENSE file for more details.
MIT © Fülöp Dénes

## Contact Information

If you have any questions, suggestions, or feedback, please feel free to contact me at denes.fulopp@gmail.com.

## Acknowledgments

In progress..
