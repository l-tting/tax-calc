<!-- TASK 15: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
To find the Kenya NHIF Rate using THIS LINK:  
Write a normal program but use functions if you feel comfortable. -->

<!-- Employee's Monthly Gross Salary(Kshs)	Monthly NHIF Contribution (Kshs)
5,999	150
6,000 - 7,999	300
8,000 - 11,999	400
12,000 - 14,999	500
15,000 - 19,999	600
20,000 - 24,999	750
25,000 - 29,999	850
30,000 - 34,999	900
35,000 - 39,999	950
40,000 - 44,999	1,000
45,000 - 49,999	1,100
50,000 - 59,999	1,200
60,000 - 69,999	1,300
70,000 - 79,999	1,400
80,000 - 89,999	1,500
90,000 - 99,999	1,600
100,000 and above	1,700 -->

*FORM INPUT*
1.Provide a user with a form to fill basic salary and benefits 
2.User fills the form and submits it
3.JS extracts form values and performs computations with defined functions
4.Display the output from JS back to HTML

*id attribute* 
-> an attribute that is used by JS to uniquely identify and target a HTML element 
*document.getElementById()*
-> an inbuilt function used by JS to access and target html elements using their id


*JS functions*
*1.User interactivity*
-> the ability of a user to interact with an application. It gives the user the ability 
to perform actions when using an application => anything a user can when using an 
application is called an event e.g. scroll, click, zoom , hover,copy, paste,submit, typing
 *addEventListener* - a function meant to wait for a end user's action(event) and trigger JS
 *function(event)* -> a function that waits for an event to occur to trigger JS
*2.Reactivity*


addEventListener -> function(event) -> calculate_gross(),calculate_nhif()

*document.getElementById().innerHTML*
-> used by JS to access ,extract and pass values from all HTML elements
*document.getElementByID().value*
-> used by JS to access , extract and pass values from form inputs specifically

N/B:- Any value coming from user input is always a string


*After an event occurs, the default behaviour of the browser is to refresh* -> to prevent this use the 
function *event.preventDefault()*