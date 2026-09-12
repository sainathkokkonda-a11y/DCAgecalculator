function setDefaultDates() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('targetDate').value = today;

  const defaultDob = new Date();
  defaultDob.setFullYear(defaultDob.getFullYear() - 25);
  document.getElementById('birthDate').value = defaultDob.toISOString().split('T')[0];
}

function calculateAge() {
  const dobInput = document.getElementById('birthDate').value;
  const targetInput = document.getElementById('targetDate').value;

  if (!dobInput || !targetInput) {
    alert("Please select both Date of Birth and Target Date.");
    return;
  }

  const dob = new Date(dobInput);
  const target = new Date(targetInput);

  if (dob > target) {
    alert("Date of Birth cannot be after Target Date.");
    return;
  }

  let years = target.getFullYear() - dob.getFullYear();
  let months = target.getMonth() - dob.getMonth();
  let days = target.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Total Calculations
  const diffTime = Math.abs(target - dob);
  const totalDaysVal = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const totalWeeksVal = (totalDaysVal / 7).toFixed(1);
  const totalMonthsVal = (years * 12) + months;

  document.getElementById('exactAgeResult').innerText = `${years} Years, ${months} Months, ${days} Days`;
  document.getElementById('totalMonths').innerText = `${totalMonthsVal} Months`;
  document.getElementById('totalWeeks').innerText = `${totalWeeksVal} Weeks`;
  document.getElementById('totalDays').innerText = `${totalDaysVal.toLocaleString()} Days`;
}

// Load defaults and calculate initial age
setDefaultDates();
calculateAge();
