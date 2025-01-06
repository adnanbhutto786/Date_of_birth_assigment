
const day = parseInt(prompt("Enter the day (1-31):"));
const month = parseInt(prompt("Enter the month (1-12):"));
const year = parseInt(prompt("Enter the year (e.g., 2025):"));

const date = new Date(year, month - 1, day); 


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const dayOfWeek = daysOfWeek[date.getDay()];


alert(`The day on ${day}/${month}/${year} is: ${dayOfWeek}`);
