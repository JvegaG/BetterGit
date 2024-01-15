const a = 0.1;
const b = 0.2;

const result = a + b; //?

const _result = Number(result.toFixed(2)) //?
console.log("wrong result: ", result)
console.log("rigth result: ", _result)