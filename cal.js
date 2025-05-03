function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (!weight || !height || height <= 0) {
      document.getElementById("result").textContent = "Please enter valid weight and height.";
      return;
    }

    var bmi = weight / (height * height);
    var category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    document.getElementById("result").textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }
