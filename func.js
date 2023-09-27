document.addEventListener("DOMContentLoaded", function () {
    const unitSelector = document.getElementById("unit");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultElement = document.getElementById("result");
    const classificationElement = document.getElementById("classification");
    const healthyRangeElement = document.getElementById("healthy-range");
  
    // Función para calcular el IMC
    function calculateBMI() {
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);
      const unit = unitSelector.value;
      let bmi;
  
      if (unit === "metric") {
        // Fórmula métrica para el IMC: peso (kg) / (altura (m) * altura (m))
        bmi = weight / ((height / 100) ** 2);
      } else if (unit === "imperial") {
        // Fórmula imperial para el IMC: (peso (lb) / (altura (in) * altura (in))) * 703
        bmi = (weight / (height ** 2)) * 703;
      }
  
      // Mostrar el resultado del IMC
      resultElement.textContent = bmi.toFixed(2);
  
      // Clasificar el IMC
      if (bmi < 18.5) {
        classificationElement.textContent = "Bajo peso";
        healthyRangeElement.textContent = "Peso saludable: Menor de 18.5";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        classificationElement.textContent = "Peso saludable";
        healthyRangeElement.textContent = "Peso saludable: 18.5 - 24.9";
      } else if (bmi >= 25 && bmi < 29.9) {
        classificationElement.textContent = "Sobrepeso";
        healthyRangeElement.textContent = "Peso saludable: 18.5 - 24.9";
      } else {
        classificationElement.textContent = "Obeso";
        healthyRangeElement.textContent = "Peso saludable: 18.5 - 24.9";
      }
    }
  
    // Agregar eventos para calcular el IMC en tiempo real
    unitSelector.addEventListener("change", calculateBMI);
    heightInput.addEventListener("input", calculateBMI);
    weightInput.addEventListener("input", calculateBMI);
  });
  