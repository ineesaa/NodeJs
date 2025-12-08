const { User, validateUser, ROLES } = require("./userService");

const user1 = new User("user","student");
console.log("Is valid:", validateUser(user1));
console.log("Roles:", ROLES);
