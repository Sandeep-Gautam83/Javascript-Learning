// Create a new Date object for the current date and time
let myDate = new Date();
console.log(myDate); // Logs the full date and time object

// Convert the Date object to a readable string
console.log(myDate.toString()); // Logs a full string representation of the date

// Convert the Date object to a human-readable date string (no time)
console.log(myDate.toDateString()); // Example: "Mon Dec 18 2024"

// Convert the Date object to a locale-specific date string
console.log(myDate.toLocaleDateString()); // Example: "12/18/2024" (depends on your locale)

// Check the type of the `myDate` object
console.log(typeof myDate); // Logs "object" because Date is a JavaScript object

// Get the current timestamp in milliseconds since Jan 1, 1970
console.log(Date.now()); // Logs the current timestamp in milliseconds

// Convert the current timestamp to seconds (by dividing by 1000 and flooring it)
console.log(Math.floor(Date.now() / 1000)); // Logs the timestamp in seconds

// Create a new Date object (for demonstration, it's the same as `myDate`)
let newDate = new Date();
console.log(newDate); // Logs the new Date object

// Get the current month (0-based index, so January is 0, add 1 to get the correct month)
console.log(newDate.getMonth() + 1); // Logs the correct month number

// Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
console.log(newDate.getDay()); // Logs the day index (e.g., 0 for Sunday)

