
function User(name) {
    this.name = name;
}

// Write your code here:
// ---------------------
User.prototype.sayName = function () {
	return console.log("Hello, my name is " + this.name + "!");
}
// ---------------------

var user1 = new User("Harry");
user1.sayName();

var user2 = new User("Ron");
user2.sayName();

var user3 = new User("Hermione");
user3.sayName();