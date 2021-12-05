// Assignment code here

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
 
// special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// space is for the Uppercase conversion
space = [];

var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// start function to generate password
function generatePassword() {
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // first if statement for user validation 
    if (!enter) {
        alert("This needs a value!");
    } else if (enter < 8 || enter > 128) {
        // start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmNumber = confirm("Will password contain numbers?");
        confirmCharacter = confirm("Will password contain special characters?");
        confirmUppercase = confirm("Will password contain Uppercase letters?");
        confirmLowercase = confirm("Will password contain Lowercase letters?");
    };

    // else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    var password = [];

    // random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// puts the password value into the textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}