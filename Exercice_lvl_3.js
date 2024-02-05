//1. CREATE A PERSONACCOUNT OUT FUNCTION. IT HAS FIRSTNAME, LASTNAME, INCOMES, EXPENSES INNER VARIABLES.
//   IT HAS TOTALINCOME, TOTALEXPENSE, ACCOUNTINFO,ADDINCOME, ADDEXPENSE AND ACCOUNTBALANCE INNER FUNCTIONS.
//   INCOMES IS A SET OF INCOMES AND ITS DESCRIPTION AND EXPENSES IS ALSO A SET OF EXPENSES AND ITS DESCRIPTION.   


function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];
  

    function addIncome(description, amount) {
      incomes.push({ description, amount });
      console.log(`Income added: ${description} - ${amount}`);
    }
  
    function addExpense(description, amount) {
      expenses.push({ description, amount });
      console.log(`Expense added: ${description} - ${amount}`);
    }
  
    function totalIncome() {
      return incomes.reduce((total, income) => total + income.amount, 0);
    }
  
    function totalExpense() {
      return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    function accountInfo() {
      console.log(`Account Information for ${firstName} ${lastName}:`);
      console.log(`Total Income: ${totalIncome()}`);
      console.log(`Total Expense: ${totalExpense()}`);
      console.log(`Account Balance: ${accountBalance()}`);
    }
  

    return {
      addIncome,
      addExpense,
      totalIncome,
      totalExpense,
      accountBalance,
      accountInfo
    };
  }
  
  const johnDoeAccount = personAccount("John", "Doe");
  
  johnDoeAccount.addIncome("Salary", 5000);
  johnDoeAccount.addExpense("Rent", 1200);
  johnDoeAccount.addExpense("Utilities", 200);
  johnDoeAccount.addIncome("Freelance", 800);
  
  johnDoeAccount.accountInfo();
  