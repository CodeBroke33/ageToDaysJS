function convertAgeToDays() {
    const ageInput = document.getElementById('ageInput').value;
    const daysInYear = 365;
    const ageInDays = ageInput * daysInYear;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your age in days is approximately ${ageInDays} days.`;
  }