// question 1
function describeValue(val) {
  return `${typeof val} | ${val ? "truthy" : "falsy"}`;
}

// question 2
function getDayType(day) {
  const lowerCaseDay = day.toLowerCase();

  switch (lowerCaseDay) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

// question 3
function validateUsername(username) {
  if (username.length < 4) return "Too Short";

  if (username.includes(" ")) return "No Space Allowed";

  if (username.toLowerCase().includes("admin")) return "Reserved Word";

  return "Available";
}

// question 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let sum = 0;
  if (distance <= 2) {
    sum += 50;
    return (sum + 2 * waitingMinutes) * (isNight ? 1.2 : 1);
  }

  distance -= 2;
  sum += 50 + distance * 15;

  return (sum + 2 * waitingMinutes) * (isNight ? 1.2 : 1);
}

// question 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  if (runsNeeded <= 0) return "Won";
  if (ballsLeft <= 0) return "Lost";

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict = "";

  if (requiredRate <= 6) verdict = "Comfortable";
  else if (requiredRate >= 12) verdict = "Tough";
  else verdict = "Almost Impossible";

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
