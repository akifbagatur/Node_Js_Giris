// node app.js > //run the app in the terminal -  dosyayı çalıştır
console.log("HELLO WORLD NODE JS");

//global object and module object

//private variable
const firstname = "Akif";

//publice variable
const age = 25;
const sayHello = () => {
  console.log("Merhaba " + firstname + " " + age);
};

sayHello();

//1.yol
module.exports.sayHello = sayHello; //export the function - fonksiyonu dışa aktar

//2.yol
module.exports = {
    sayHello,//sayHello:sayHello,
    age //age:age
};
