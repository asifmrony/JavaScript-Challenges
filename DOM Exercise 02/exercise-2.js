/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */

/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

var userName = document.getElementById('username');
var passWord = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
userName.insertAdjacentHTML('beforeBegin', '<label for="username">Username:</label>');

passWord.insertAdjacentHTML('beforeBegin', '<label for="username">Password:</label>');

confirmPassword.insertAdjacentHTML('beforeBegin', '<label for="username">Confirm Password:</label>');

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

function checkInput(event){
    var parent = event.target.parentElement;
    var errorElement = parent.querySelector('span');
    if(event.target.value == "" && !errorElement){           event.target.insertAdjacentHTML('beforeBegin', '<span style="color:red;">Required!</span>');
    }
    
    if(event.target.value != "" && errorElement) {
        errorElement.remove();
    }
}

userName.addEventListener('blur', checkInput);
passWord.addEventListener('blur', checkInput);
confirmPassword.addEventListener('blur', checkInput )                      

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/


