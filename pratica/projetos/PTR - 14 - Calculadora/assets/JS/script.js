let op = null;
document.querySelectorAll("[data-op]").forEach(btn => {
  btn.onclick = () => op = btn.dataset.op;
});

document.querySelector("#igual").onclick = (e) => {
  e.preventDefault();
  let n1 = Number(document.querySelector("#first").value);
  let n2 = Number(document.querySelector("#second").value);

  let r;

  if(op === "+") r = n1 + n2;
  if(op === "-") r = n1 - n2;
  if(op === "*") r = n1 * n2;
  if(op === "/") r = n1 / n2;

  document.querySelector("#res").textContent = "Resultado: " + r;
}










