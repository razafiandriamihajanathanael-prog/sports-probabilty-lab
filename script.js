
/* Sports Probability Lab
   Probability Engine - Version 1.0
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("Sports Probability Lab initialized!");

  function poissonProbability(goals, expectedGoals) {
    let factorial = 1;

    for (let i = 2; i <= goals; i++) {
      factorial *= i;
    }

    return (
      Math.exp(-expectedGoals) *
      Math.pow(expectedGoals, goals) /
      factorial
    );
  }

  // Initial test: probability of scoring 2 goals
  const result = poissonProbability(2, 1.5);

  console.log(
    "Probability of scoring exactly 2 goals:",
    (result * 100).toFixed(2) + "%"
  );
});
