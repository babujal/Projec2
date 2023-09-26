## Seafood Store Web Application

### Overview

The Seafood Store web application is designed to showcase a variety of seafood products. It allows users to view seafood products, add new products, edit existing products, and delete products. This README file provides an overview of the project, including the technologies used, the approach taken, unsolved problems, user stories, and notes for future reference.


### Technologies Used

-   **Node.js**: The backend server is built using Node.js, which allows me to run JavaScript on the server-side.
-   **Express.js**: I use the Express.js framework for building the web application and handling routes.
-   **MongoDB**: MongoDB was my choice of database for storing seafood product information.
-   **Mongoose**: I used Mongoose to interact with the MongoDB database.
-   **EJS**: EJS (Embedded JavaScript) was my templating engine for generating dynamic HTML content.
-   **dotenv**: dotenv is used for managing environment variables.
-   **method-override**: method-override middleware is used to enable HTTP methods like PUT and DELETE in HTML forms.
-   **HTML/CSS/Bootstrap**: I use HTML, CSS, & bootstrap for creating the front-end of the application.
-   **Heroku **: Heroku was used to deploy the application.**

### Approach

I started by creating all the folder structure necesary for the project then create all the .js, .ejs and css that I needed to start them. After that created some base route and make sure they worked, then seed the db and create a loop the render a list of products on my index route.
After that was done and working started workinng on my show route and step by step builded a full restfull web app.

### User Stories
- As an owner, I want to be able to view all seafood products, edit their details, and delete them.
- As an owner, I want to add new seafood products to the store.
- As an owner, I want to be able to choose what products to put on sales and see their sale status on my end, I want to be able to remove them from sale status and reuse them when I have them in stock.
- As a client, I want to be able to view all available seafood products.
- As a client, I want to see details of a specific seafood product.

### Unsolved Problems

-   Authentication and authorization: Currently, the application doesn't have user authentication or authorization. Implementing user accounts with different roles (owners and clients) could be a future enhancement.
-   User feedback: The application could benefit from user feedback features such as reviews and ratings for seafood products.


### Notes to Self

-   Document the code: Ensure that the codebase is well-documented to make it easier to understand and maintain in the future.
-   Consider future enhancements: Think about potential features and improvements that can be added in later stages of development.
-   Security: Implement security best practices to protect against common web application vulnerabilities.

### Link to Hosted App
The application is hosted on Heroku at: 
-Owner side: https://floating-chamber-37367-77b015f14394.herokuapp.com/seafoodstore

Clients side: https://floating-chamber-37367-77b015f14394.herokuapp.com/seafoodstore/stock

## Getting Started

To run the application locally, follow these steps:

1.  Clone the repository to your local machine.
2.  Install dependencies using `npm install`.
3.  Set up a MongoDB database and update the connection string in your `.env` file.
4.  Start the server using `npm start`.

## Author
Alex Rodriguez