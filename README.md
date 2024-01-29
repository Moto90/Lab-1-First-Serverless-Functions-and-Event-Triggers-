Lab1-First Serverless Functions and Event Triggers 
This repository contains three serverless functions developed using Azure Functions with Node.js. Each function serves a specific purpose as outlined below:

1. Login Function
Description:
The Login Function handles user authentication by accepting a username and password as input. It returns a JSON Web Token (JWT) upon successful authentication. Additionally, the function performs error 
checking to validate that the username is a valid email address.
Usage:
Input: Username and password in the request payload.
Output: JSON Web Token (JWT) upon successful authentication.

2. Order Processing Function
Description:
The Order Processing Function processes incoming orders by logging each item being ordered. It takes an object with two parameters: orderId (the ID for the order) and an items array 
(a list of items being purchased).
Usage:
Input: An object containing orderId and items array in the request payload.
Output: Logs each item being ordered.

3. Daily Sales Report Function
Description:
The Daily Sales Report Function generates a random number between 1 and 100 and produces a generic text report outlining the number of sales made that day. This function is triggered on 
a daily basis using a Timer Trigger.
