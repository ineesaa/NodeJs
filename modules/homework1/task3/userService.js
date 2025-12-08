class User {
    constructor(name, role){
      this.name = name;
      this.role = role;
    }
  }
  
  function validateUser(user){
    if(!user.name) return false;
    if(!ROLES.includes(user.role)) return false;
    return true;
  }
  
  const ROLES = ["student","admin"];
  
  module.exports = { User, validateUser, ROLES };
  