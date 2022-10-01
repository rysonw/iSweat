# iSweat

### Overview/Home Page

Here is the Home Page:

![Landing Page](https://user-images.githubusercontent.com/91065673/190895110-7779f6fa-4b8c-45c1-b313-649414dd902d.png)

This single-paged application utilizes the MERN stack to create a web application that hits all the basics when it comes to accurate exercise tracking. The front-end of the app was built React and includes global design features. The backend uses MongoDB, Mongoose, Express and NodeJS.

<br>

### Create Exercises

Here is the creation page.

![Create](https://user-images.githubusercontent.com/91065673/190895174-94b87d3d-2d0f-4e8c-a190-0e25bfb2a0df.png)

There is the page where exercise enteries are created and sent to the database. After adding an exercise, the user is automaticallyt sent back to the home page so they may see their exercise added to the list. 

<br>

### Edit and Delete Exercises

Users are able to edit and delete existing exercises when needed.

![Exercise](https://user-images.githubusercontent.com/91065673/190895196-b4e5e488-bfe3-4e5d-ab60-693c27601ae9.png)

By clicking on the trash can icon, users are able to delete exercise entries from the database which will, in turn, remove those exercises from the home page. Clicking on the pencil icon, allows users to edit the fields of existing exercises and have then reflected on the home page.

![Edit_Page](https://user-images.githubusercontent.com/91065673/190895181-7f2fb322-382d-4df1-9dd4-0dddac72a60e.png)

<br>

## Features List

- Stores exercise statistics in a MongoDB Database
- Allows users to edit and delete exercise enteries when needed
- Provides a sleek front-end that enhances user-experience
- Uses a REST API to request and store exercise data from the database 
- Presents the data in a simple table for ease of reference
- Utilizes error messages to ensure user knows what issues the application faces
- Includes unit tests to ensure application is working as intended
- Backend includes a controller and model file for CRUD application functions

### `To run this app`

Run the command 'npm install' followed by 'npm start' in your terminal.
<br>
Change the name of the "example.env" to ".env" and add a connect string to your database.
