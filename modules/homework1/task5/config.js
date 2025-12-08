const PORT = 3000;
const DB_URL = "mongodb://localhost:27017/mydb";
const isProduction = false;

function getEnvironmentInfo(){
  return `Port: ${PORT}, DB: ${DB_URL}, Production: ${isProduction}`;
}

module.exports = { PORT, DB_URL, isProduction, getEnvironmentInfo };
