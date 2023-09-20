const colorDisplay = document.querySelector("#color");
const newColorBtn = document.querySelector("#generator");

let showRGB = true;
let rgbColor;
let hexColor;

colorDisplay.addEventListener("dblclick", () => {
  if (showRGB) {
    colorDisplay.innerText = hexColor;
    showRGB = false;
  } else {
    colorDisplay.innerText = rgbColor;
    showRGB = true;
  }
});
newColorBtn.addEventListener("click", () => {
  const newRGBValues = randomColor();
  const newRGBColor = `rgb(${newRGBValues.r}, ${newRGBValues.g}, ${newRGBValues.b})`;
  rgbColor = newRGBColor;
  const newHexColor = rgbToHex(newRGBValues.r, newRGBValues.g, newRGBValues.b);
  hexColor = newHexColor;
  if (showRGB) {
    colorDisplay.innerText = newRGBColor;
  } else {
    colorDisplay.innerText = newHexColor;
  }
  document.body.style.backgroundColor = newRGBColor;
  newColorBtn.style.color = newRGBColor;
});

const randomColor = () => {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);
  return {r: randomR, g: randomG, b: randomB};
}

const rgbToHex = (r, g, b) => {
  // Ensure the RGB values are within valid ranges (0-255)
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  // Convert each RGB component to a hexadecimal string
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  // Concatenate the hexadecimal values to form the final hex color
  const hexColor = `#${rHex}${gHex}${bHex}`;

  return hexColor;
}