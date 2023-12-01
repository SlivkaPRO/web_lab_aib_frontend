document.addEventListener("DOMContentLoaded", function() {
  const colorArea = document.getElementById("color-area");
  const redInput = document.getElementById("red");
  const greenInput = document.getElementById("green");
  const blueInput = document.getElementById("blue");

  // Изменение цвета
  function changeColor() {
      const red = parseInt(redInput.value) || 0;
      const green = parseInt(greenInput.value) || 0;
      const blue = parseInt(blueInput.value) || 0;
    
      colorArea.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  // Добавить прослушиватели событий к входам цвета
  redInput.addEventListener("input", changeColor);
  greenInput.addEventListener("input", changeColor);
  blueInput.addEventListener("input", changeColor);
});