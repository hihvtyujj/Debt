document.addEventListener("DOMContentLoaded", () => { const form = document.getElementById("debt-form"); const debtList = document.getElementById("debt-list"); const reminder = document.getElementById("reminder");

// Load saved data const savedDebts = JSON.parse(localStorage.getItem("debts")) || []; savedDebts.forEach(debt => addDebtToDOM(debt)); checkReminders();

form.addEventListener("submit", function (e) { e.preventDefault();

const name = document.getElementById("name").value;
const amount = document.getElementById("amount").value;
const dueDate = document.getElementById("due-date").value;

const newDebt = { name, amount, dueDate };
savedDebts.push(newDebt);
localStorage.setItem("debts", JSON.stringify(savedDebts));

addDebtToDOM(newDebt);
checkReminders();
form.reset();

});

function addDebtToDOM(debt) { const listItem = document.createElement("li"); listItem.textContent = ${debt.name} owes Rs. ${debt.amount} (Due: ${debt.dueDate}); debtList.appendChild(listItem); }

function checkReminders() { const now = new Date(); let alertText = "";

savedDebts.forEach(debt => {
  const dueDate = new Date(debt.dueDate);
  const diffTime = dueDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays <= 2 && diffDays >= 0) {
    alertText += `${debt.name} owes Rs. ${debt.amount} (Due: ${debt.dueDate})\n`;
  }
});

reminder.textContent = alertText ? `Upcoming dues:\n${alertText}` : "";

} });


