# Mini Project
Mini Project as a proof of concept for the role of **Frontend Developer at CleverX**. Please read the following document carefully and feel free to ask any questions on Angel List, in case you are confused about anything.

**This repo contains a very minimalist API server for the frontend that you have to create.**


# Setup

* Fork this repo. We want to see your commits too.
* Clone the forked repo to your local machine.
* Install node.js 10 or higher if not already installed.
* Install packages by running `npm install` in the project root.
* Run the project by running `npm start` or `node app.js` in the project root.
* A web server will be started at `http://localhost:3000`.


# APIs

* **GET** /project - Get the project data.
* **POST** /project - Post the project data.
  
Sample body for POST request
```
{
  "name":"Mini Project",
  "summary":"This is a project for the applicants at cleverx",
  "cost":"980",
  "date":"2021-01-11T18:30:00.000Z"
}
```


# Your Task

* Create a `client` folder in the project root and create a React app inside that. You are free to use **Create React App** or set it up from scratch.
* Use the screenshots as a reference for designs and create the pages and modals accordingly. 
* Implement the APIs provided in the best and cleanest way you can.
* Write documentation for your code inside `client` folder in a `README.md` file.

# Task explanation
* On a page create a button and on clicking that button, the following modal should open.

![image](https://user-images.githubusercontent.com/5981804/102990160-ee1a7e00-453c-11eb-9761-deb17b863d51.png)

* **You don't have to implement the "upload attachment" field.** But other than that, use the `POST /project` API to post the values of fields.
Field types:
* Title : string (max characters 80), variable name for API: "name"
* Description: string (max characters 200), variable name for API: "summary"
* Delivery date: date (only future dates), variable name for API: "date"
* Project cost: number (range 100-100000), variable name for API: "cost"

Please use the applicable validations.

* After the user clicks `Create Project` Button. Close the modal and open a new modal with the following design. You don't have to implement any APIs here.
* You have to make sure that the first card is selected by default and user can select any card.
* `Add card` button is non-functional.

![image](https://user-images.githubusercontent.com/5981804/102990816-08089080-453e-11eb-8700-debf2d75f280.png)

* When the user clicks on `Pay` button. it should take them to a page with following section. Which you have to populate using `GET /project` API.

![image](https://user-images.githubusercontent.com/5981804/102991069-7f3e2480-453e-11eb-99ba-8d8f96f63002.png)


# You will be judged on:
* Git skills. (We will go through your commits)
* Ability to convert the mockup/screenshots to a pixel perfect React code. (CSS skills)
* Ability to write clean, readable and well structured code. (While structuring your code, think about how you'd structure it in a large React app)
* Ability to write documentation for your code.
