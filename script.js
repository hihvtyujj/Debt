document.getElementById("debt-form").addEventListener("submit", function (e) { e.preventDefault();

const name = document.getElementById("name").value; const amount = document.getElementById("amount").value; const dueDate = document.getElementById("due-date").value;

const listItem = document.createElement("li"); listItem.textContent = ${name} owes Rs. ${amount} (Due: ${dueDate}); document.getElementById("debt-list").appendChild(listItem);

checkReminders();

// Clear inputs document.getElementById("debt-form").reset(); });

function checkReminders() { const now = new Date(); const items = document.querySelectorAll("#debt-list li"); let alertText = "";

items.forEach(item => { const text = item.textContent; const dueMatch = text.match(/Due: (\d{4}-\d{2}-\d{2})/); if (dueMatch) { const dueDate = new Date(dueMatch[1]); const diffTime = dueDate - now; const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); if (diffDays <= 2 && diffDays >= 0) { alertText += ${text}\n; } } });

document.getElementById("reminder").textContent = alertText ? Upcoming dues:\n${alertText} : ""; }

