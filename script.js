
/* SPORTS PROBABILITY LAB
   Probability Engine - Version 1.1
*/

document.addEventListener("DOMContentLoaded", () => {

  // Calculate factorial
  function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  // Poisson probability formula
  function poissonProbability(goals, expectedGoals) {
    return (
      Math.exp(-expectedGoals) *
      Math.pow(expectedGoals, goals) /
      factorial(goals)
    );
  }

  // Connect calculator to dashboard
  const calculateBtn = document.getElementById("calculateBtn");

  calculateBtn.addEventListener("click", () => {

    const expectedGoals = Number(
      document.getElementById("expectedGoals").value
    );

    const goalCount = Number(
      document.getElementById("goalCount").value
    );

    const resultElement = document.getElementById("probabilityResult");

    // Validate inputs
    if (
      !Number.isFinite(expectedGoals) ||
      expectedGoals < 0 ||
      expectedGoals > 10 ||
      !Number.isInteger(goalCount) ||
      goalCount < 0 ||
      goalCount > 20 ||
      document.getElementById("expectedGoals").value.trim() === "" ||
      document.getElementById("goalCount").value.trim() === ""
    ) {
      resultElement.textContent =
        "Please enter valid values for expected goals and goal count.";
      return;
    }

    // Calculate probability
    const probability = poissonProbability(
      goalCount,
      expectedGoals
    );

    // Display result
    resultElement.innerHTML = `
      <h4>Probability Result</h4>
      <p>
        Probability of scoring exactly
        <strong>${goalCount} goals</strong>:
      </p>
      <h2>${(probability * 100).toFixed(2)}%</h2>
    `;

  });

});
