// Node.js Url Modülü

const url = require("url");

const address = "http://localhost:3000/default.html?year=2025&month=february";

const parsedUrl = url.parse(address, true); // true parametresi query stringi objeye çevirir

console.log(parsedUrl.host); // localhost:3000
console.log(parsedUrl.pathname); // /default.html
console.log(parsedUrl.query); // { year: '2025', month: 'february' }
console.log(parsedUrl.search); // ?year=2025&month=february 
console.log(parsedUrl.query.year); // 2025
console.log(parsedUrl.query.month); // february
console.log(parsedUrl.href); // http://localhost:3000/default.html?year=2025&month=february
console.log(parsedUrl.port); // 3000
console.log(parsedUrl.protocol); // http
console.log(parsedUrl.path); // /default.html?year=2025&month=february










