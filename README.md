# Javascript mvc todoList app

## start

run 'npm install' to install all the dependencies

run 'npm run start' to start server

open http://localhost:8080/ to check out

## Model
Control data
Each time to change data, will send the updated array todos, and call onTodoListChanged to handle to call displayTodos() to show updated data in View. 

Then update data in localStorage. 

## View
Contol the view
Will also register event listener here, and when data changed, the data will be sent to controller, then send to model to update data.

## Controller
connect the View and Model. 
