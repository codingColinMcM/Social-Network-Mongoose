# Social-Network

I am pretty proud of 

## Description

### Problem:

A social media startup needs to build an API for its social networking web application, which can handle large amounts of unstructured data. 
They want to use MongoDB as their NoSQL database due to its speed with large datasets and flexibility with unstructured data. The application 
should allow users to share thoughts, react to friends' thoughts, and manage their friend lists. The API needs to be built using Express.js 
for routing and Mongoose ODM for interacting with the MongoDB database.

### Solution: 

To address the social media startup's needs, we will build an API for their social networking web application using Express.js and MongoDB with the Mongoose ODM. The API will allow users to perform various actions such as creating, updating, and deleting users and thoughts. It will also support reactions to thoughts and the management of user friend lists. The API will be designed to handle unstructured data efficiently, making it suitable for large datasets commonly encountered in social networking platforms.

The following are the steps we will take to fulfill the requirements:

1. Create a server using Express.js, and upon invoking the application, the server will start running. The Mongoose models for users, thoughts, reactions, and friend lists will be defined and synced with the MongoDB database.
2. Implement various API routes for handling different actions, including GET, POST, PUT, and DELETE routes. GET routes for users and thoughts will return formatted JSON data when accessed using Insomnia.
3. API POST, PUT, and DELETE routes will be implemented to allow the successful creation, updating, and deletion of users and thoughts in the database.
4. API POST and DELETE routes will be set up to enable users to create and delete reactions to thoughts.
Additional API routes will be developed to allow users to add and remove friends from their friend list.

By following this solution, the social media startup will have a fully functional API that meets its requirements. It will enable their web  
application to handle large amounts of unstructured data, making it suitable for scaling and accommodating the demands of a social networking 
platform. The use of MongoDB as a NoSQL database, coupled with Express.js and Mongoose, will provide the necessary speed and flexibility to 
support the platform's functionalities efficiently.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Demo Videos](#demo)
- [License](#license)
- [Questions?](#quest)

## Overview

The application is organized into several files and folders:

* The config folder contains connection.js, which sets up the Mongoose configuration for MongoDB. It establishes the connection to the MongoDB database, allowing the
application to interact with it using Mongoose.

* The controllers folder contains CRUD commands for the API routes. These controllers handle the logic and operations related to the data entities in the Social Network site.

* The models folder contains different Mongoose models for different data entities in the Social Network site, such as thoughts and users. These models define the schema and
structure of the data stored in MongoDB.

* The routes folder contains the API routes for the application. These routes handle incoming HTTP requests and reference the commands defined in the controllers folder. The
routes enable developers to interact with the data entities in MongoDB.

* The utils folder contains utility files used in the application. dateFormat.js is a file that provides utilities related to date formatting, which is used in the Thought
model. seed.js is a file responsible for seeding data into MongoDB, providing initial data for testing or development purposes.

* .gitignore specifies which files and folders should be ignored by Git version control, helping to keep the repository clean and prevent sensitive data from being committed.

* LICENSE contains the license agreement for the Social Network application, specifying the terms and conditions for its use and distribution.

* README.md serves as the README for the Social Network application, providing comprehensive information about the application. It includes instructions for installation, usage guidelines, and other relevant details.

* package-lock.json and package.json are related to the application's Node.js package management. They define the project's dependencies and other package-related information.

* server.jsThis file deploys the API on a local host port using Express.js. It sets up the server and handles incoming requests from clients.
The application's organization allows developers to perform CRUD operations on different data entities (thoughts and users) through API routes and controllers.

Additionally, the application includes utility files in the utils folder, such as dateFormat.js and seed.js, to enhance functionality and ease data seeding. 

The presence of a .gitignore file ensures version control ignores unnecessary files, while the LICENSE file clarifies the terms of use. 

The README.md provides all necessary information for understanding and using the Social Network application.

Overall, this Social Network application uses Mongoose as an Object Data Modeling (ODM) library to interact with a MongoDB database.

## Installation 

Run the following commands to initialize the project and install required dependencies:

```
npm init -y
npm install express
npm install mongoose
npm install moment
```

This will populate the MongoDB database with the specified seed data.

## Usage

In the utils folder, find the seed.js file.
If you want to populate the database with initial data, run the seed.js file with the following command:

```
node utils/seed.js
```

Start the server by running the following command:

```
npm start
```

The server will be up and running on the specified port, ready to handle API requests.

To test the API routes, you can use a tool like "Insomnia Core" or "Postman."
Open your preferred API testing tool and send requests to the API routes to interact with the data in MongoDB.

## Screenshot

![image](https://user-images.githubusercontent.com/112663656/221658330-f9225c93-e470-467d-97c5-0ef19a0aafdc.png)

## Demo Vids  <a name="demo"></a>

### User Routes

https://drive.google.com/file/d/1MxNX96agKRi3Oks-FXmo_ERX3uDhl9aS/view?usp=share_link 

### Thought Routes

https://drive.google.com/file/d/1m3PVKLnquS7F-9mj979-zDXaOck8VcsQ/view?usp=share_link

### Friend and Reaction Routes

https://drive.google.com/file/d/1Ubwj3SqrGFWgeJ_PW0Xzq8PL7NwVGH5V/view?usp=share_link

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<pre>
The MIT License

© Colin McMurtray University at North Carolina Chapel Hill Coding Bootcamp MIT License Copyright (c) 2023 Permission is hereby granted, free of charge, to 
any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to 
whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
</pre>

## Questions? <a name="quest"></a>

If you have any questions, please reach out to me using one of the following:

- [Email](mailto:mcmurtraycolin@gmail.com)
- [GitHub Profile](https://github.com/codingColinMcM)
