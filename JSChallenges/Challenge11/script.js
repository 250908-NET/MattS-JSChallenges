function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Result: " + sum;
}
function subNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let res = n1 - n2;

  document.getElementById("result").textContent = "Result: " + res;
}
function mulNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let res = n1 * n2;

  document.getElementById("result").textContent = "Result: " + res;
}
function divNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let res = n1 / n2;

  document.getElementById("result").textContent = "Result: " + res;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subBtn").addEventListener("click", subNumbers);
document.getElementById("mulBtn").addEventListener("click", mulNumbers);
document.getElementById("divBtn").addEventListener("click", divNumbers);