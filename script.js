const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const incomeInput = document.getElementById('income');
const addExpenseBtn = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-items');
const netIncomeDisplay = document.getElementById('net-income-display');

let totalIncome = 0;
let totalExpenses = 0;

// Function to calculate and display net income
function calculateNetIncome() {
  const netIncome = totalIncome - totalExpenses;
  netIncomeDisplay.textContent = `Balance: ₦${netIncome.toFixed(2)}`;
}

// Event listener for the income input
incomeInput.addEventListener('input', () => {
  totalIncome = parseFloat(incomeInput.value);
  calculateNetIncome();
});

// Event listener for the add expense button
addExpenseBtn.addEventListener('click', () => {
  const expenseName = expenseNameInput.value;
  const expenseAmount = parseFloat(expenseAmountInput.value);

  if (!expenseName || isNaN(expenseAmount)) {
    alert('Please enter a valid expense name and amount.');
    return;
  }

  totalExpenses += expenseAmount;

  const li = document.createElement('li');
  li.textContent = `${expenseName}: ₦${expenseAmount}`;
  expenseList.appendChild(li);

  calculateNetIncome();

  expenseNameInput.value = '';
  expenseAmountInput.value = '';
});