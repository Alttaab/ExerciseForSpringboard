window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").defaultValue = 10000;
  document.getElementById("loan-years").defaultValue = 3;
  document.getElementById("loan-rate").defaultValue = 2.5;
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentVals.amount, currentVals.rate, currentVals.years))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(P, enteredYearlyRate, enteredTermInYears) {
  // let currentVals = getCurrentUIValues();

  // // Establishing vars for formula
  // let P = currentVals.amount
  // let i = (currentVals.rate*.01)/12;
  // let n = currentVals.years*12

  let i = (enteredYearlyRate*.01)/12;
  let n = enteredTermInYears*12;

  let newMonthlyPayment = (P*i)/( 1-( (1+i) ** (-1*n) ) );
  newMonthlyPayment = newMonthlyPayment.toFixed(2);

  console.log("$" + newMonthlyPayment.toString());
  return "$" + newMonthlyPayment.toString();
 // console.log(newMonthlyPayment)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById('monthly-payment').innerHTML = monthly;
  //console.log(monthly)
}
