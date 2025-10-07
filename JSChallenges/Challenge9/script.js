function sayHello() {
  alert("Hello from the external file!");
}
function sayGoodbye()
{
    alert("Bye Bye!");
}
// Connect the function to the button
let btnBye = document.getElementById("byeBtn");
btnBye.addEventListener("click", sayGoodbye);
let btnHello = document.getElementById("helloBtn");
btnHello.addEventListener("click", sayHello);
