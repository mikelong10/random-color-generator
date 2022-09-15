const newColorBtn = document.querySelector("#generator");
newColorBtn.addEventListener("click", () => {
  let newColor = randomColor();
  document.querySelector("#color").innerText = newColor;
  document.body.style.backgroundColor = newColor;
  newColorBtn.style.color = newColor;
});

const randomColor = () => {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}