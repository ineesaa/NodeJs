const advanced = require("./advancedExports");
// Default function
advanced(); 
// Helper
advanced.helper(); //This will cause a TypeError when importing because  module.exports = function()` overwrites the original exports object. As a result, `exports.helper` is no longer attached to module.exports

// Config
console.log("Config:", advanced.config);
