function greetUser() {
  let name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "!");
  }
}
function greetColor() {
    let name = document.getElementById("nameInput").value;
    let color = document.getElementById("colorInput").value;
    if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "! " + "Im happy to hear your favorite color is" + color);
  }

}

document.getElementById("greetBtn").addEventListener("click", greetUser);
document.getElementById("colorBtn").addEventListener("click", greetColor);

