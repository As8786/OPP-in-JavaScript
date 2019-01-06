// Code using prototypes here

// In JS there is two type of creating objects  : Factory Function and Constructor Function

// The factory function is simply a function that return an object
/*function User(name, email, password) {
    return {
        name,
        password,
        email,
        logIn : function () {
            console.log("the user is logged")
        }
    }
*/

// The constructor function for the User Object
// The first letter of the constructor function name must be an uppercase
function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;

  //To avoid repition, we declare and set up Object Methods outside the constructor function
  /*this.logIn = function() {
    console.log(this.name, " logged in");
  };*/
}

// To define methods with constructor function, we set up the mothods to the prototype of the constructor to avoid repetition
User.prototype.logIn = function() {
  console.log(this.name, " logged in");
};

User.prototype.logOut = function() {
  console.log(this.name, " logged out");
};

//Create a new Books instance
let user1 = new User("user1", "user1Email", "user1Paswword");
let user2 = new User("user2", "user2Email", "user2Paswword");

//The constructor function for the Admin Object that inherits from the User Object
function Admin(name, email, password, role) {
  this.role = role;

  // Set up the inheritance of Admin to User Class
  User.call(this, name, email, password);
}

// Set Up the User Methods to the Admin Object
Admin.prototype = Object.create(User.prototype);

//Add an admin user
let adminUser = new Admin(
  "admin",
  "adminEmail",
  "adminPassword",
  "SuperrAdmin"
);

// Define users Array
let users = [user1, user2, adminUser];

// Define a new Admin Method
Admin.prototype.deleteUser = function(user) {
  return (users = users.filter(el => el.name !== user.name));
};
