// // Code using Classes here

//Creating a new Class User
// The first letter of the class name must to be an uppercase

class User {
  // declare the constructor method for class User to set up proprieties
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.counter = 0;
    this.isLogged = false;
  }
  // LogIn Method
  login() {
    console.log(this.name, " logged");
    // Method LogIn return this(courrent instance) to can make a chain of method(call anoter method after the end of execution of the previous one)
    return this;
  }
  // Login Method
  logOut() {
    console.log(this.name, " logged out");
    return this;
  }
  // Like Method
  like() {
    this.counter++;
    console.log(this.name, " liked ", this.counter, " times");
    return this;
  }

  // Define Method accessible by the Class not by the instance
  static getStatus() {
    console.log("this is User Class");
  }
}

// Create user by using new User()
// new operator has three roles :
// first one  : create a empty object {}
// second one  : set the this to the created empty object
// third one : execute the constructor method

let userOne = new User("user1", "user1@user1.com", "user1test");
let userTwo = new User("user2", "user2@user2.com", "user2test");
let userThree = new User("user3", "user3@user3.com", "user3test");

// Creating a chain methods
// By returning this on every method, we can create a method chain
userOne
  .login()
  .like()
  .like()
  .like()
  .logOut();

// Create a new class Admin that inherits from the User Class
class Admin extends User {
  // Set up the constrcutor method for the Admin Method
  constructor(name, email, password, role) {
    super(name, email, password);
    this.role = role;
  }
  // Add a new method for the class Admin not accesible to class User
  deleteUser(user) {
    return (users = users.filter(el => user.name !== el.name));
  }
}

let userAdmin = new Admin(
  "admin",
  "admin Email",
  "admin Password",
  "Superrr Admin"
);

let users = [userOne, userTwo, userThree, userAdmin];

console.log(userAdmin);
