function calculateBodyFat() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (gender === "male" || gender === "female") {
        const bodyFatPercentage = calculateFormula(gender, age, weight, height);
        displayResult(bodyFatPercentage);
    } else {
        alert("Lütfen cinsiyeti seçin.");
    }
}

function calculateFormula(gender, age, weight, height) {
    if (gender === "male") {
        return 0.29288 * weight + 0.0005 * Math.pow(weight, 2) - 0.00028826 * age - 0.00000013 * Math.pow(age, 2) + 0.0000025 * height;
    } else if (gender === "female") {
        return 0.29669 * weight + 0.00043 * Math.pow(weight, 2) - 0.000128 * age - 0.000004 * Math.pow(age, 2) + 0.0000055 * height;
    }
}

function displayResult(bodyFatPercentage) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Vücut Yağ Oranı: ${bodyFatPercentage.toFixed(2)}%`;
}