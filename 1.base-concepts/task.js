"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let root1, root2;

  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);

  } else if (discriminant === 0) {
    root1 = -b / (2 * a);
    arr.push(root1);

  } else {
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = parseInt(percent) / 100 / 12; //процентная ставка
  if (isNaN(per) || per < 0) {
    return false;
  } else if (isNaN(contribution) || contribution < 0) {
    return false;
  } else if (isNaN(amount) || amount < 0) {
    return false;
  }
    else {
      let s = amount - contribution;						  //тело кредита
      let n = countMonths; //срок кредита в месяцах
      let pay = s * (per+per / (((1 + per) ** n) - 1));			//ежемесячная оплата
      let totalAmount = (pay * n).toFixed(2);
      return Number(totalAmount);
  }
}

calculateTotalMortgage(10, 0, 50000, 12)