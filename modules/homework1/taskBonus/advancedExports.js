// function as default export
module.exports = function(){ console.log("Default function"); };
// named helper
exports.helper = () => console.log("Helper function");
// named config
module.exports.config = { version: "1.0", env: "dev" };
