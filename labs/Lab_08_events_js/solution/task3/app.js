document.addEventListener("DOMContentLoaded", function() {
  const colorArea = document.getElementById("color-area");
  const redInput = document.getElementById("red");
  const greenInput = document.getElementById("green");
  const blueInput = document.getElementById("blue");
  const generateBtn = document.getElementById("generate-btn");
  const colors = document.getElementById("block");
  const maxBlocks = 15;
  const masscolors = [];

  // Изменить цвет
  function changeColor() {
      const red = parseInt(redInput.value) || 0;
      const green = parseInt(greenInput.value) || 0;
      const blue = parseInt(blueInput.value) || 0;
    
      colorArea.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  // Добавить прослушиватели событий к входам цветов
  redInput.addEventListener("input", changeColor);
  greenInput.addEventListener("input", changeColor);
  blueInput.addEventListener("input", changeColor);

  generateBtn.addEventListener("click", function() {
    const red = parseInt(redInput.value);
    const green = parseInt(greenInput.value);
    const blue = parseInt(blueInput.value);

    if (isValidRGB(red) && isValidRGB(green) && isValidRGB(blue)) {
      const color = `rgb(${red}, ${green}, ${blue})`;
      if (!masscolors.includes(color)) {
          masscolors.push(color);
        const colorBlock = document.createElement("div");
        colorBlock.classList.add("colorBlock");
        colorBlock.style.backgroundColor = color;
        colors.appendChild(colorBlock);

        if (colors.children.length > maxBlocks) {
            colors.removeChild(colors.firstElementChild);
        }
      } else {
        alert("Color already exists in the palette!");
      }
    } else {
      alert("Invalid RGB value!");
    }
});

function isValidRGB(value) {
    return value >= 0 && value <= 255;
}
});