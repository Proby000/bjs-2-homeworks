function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
let sum = 0;
for (let i=0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
      min = arr[i];
    }
    else if (arr[i] > max) {
        max = arr[i];
    }
  }
  return (max - min);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    } else if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
  }
  let diff = sumEvenElement - sumOddElement;
  return diff;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  let aver = sumEvenElement / countEvenElement;
  return aver;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

