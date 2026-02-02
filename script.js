
// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const resultDiv = document.getElementById("results");

  button.addEventListener("click", function () {
    // Get user input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (isNaN(day) || day < 1 || day > 31) {
      alert("Please enter a valid day (1–31)");
      return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
      alert("Please enter a valid month (1–12)");
      return;
    }

    if (isNaN(year)) {
      alert("Please enter a valid year");
      return;
    }

    if (!gender) {
      alert("Please select a gender");
      return;
    }

    // Calculate day of the week
    const CC = Math.floor(year / 100);
    const YY = year % 100;

    const dayOfWeek =
      ((4 * CC - 2 * CC - 1) +
        (45 * YY) +
        Math.floor((10 * (month + 1)) / 3) +
        day) %
      7;

    // Akan names arrays
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame"
    ];

    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama"
    ];

    // Choose Akan name
    let akanName;
    if (gender.value === "male") {
      akanName = maleNames[dayOfWeek];
    } else {
      akanName = femaleNames[dayOfWeek];
    }

    // Display result
    resultDiv.innerHTML = `
      <p>You were born on a <strong>${days[dayOfWeek]}</strong>.</p>
      <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;
  });
});
