# Social-Network

im finna finish this

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

## Screenshot

![image](https://user-images.githubusercontent.com/112663656/221658330-f9225c93-e470-467d-97c5-0ef19a0aafdc.png)

## Demo Vids  <a name="demo"></a>

### User Routes

https://drive.google.com/file/d/1MxNX96agKRi3Oks-FXmo_ERX3uDhl9aS/view?usp=share_link 

### Thought Routes

https://drive.google.com/file/d/1m3PVKLnquS7F-9mj979-zDXaOck8VcsQ/view?usp=share_link

### Friend and Reaction Routes

https://drive.google.com/file/d/1Ubwj3SqrGFWgeJ_PW0Xzq8PL7NwVGH5V/view?usp=share_link
