// let outerFunc = () => {
//   let count = 0;
//   function interFunc() {
//     return ++count;
//   }
//   return interFunc();
// };
// let natija = outerFunc();
// console.log(natija);
// console.log(natija);
// console.log(natija);

// let noCurring = (a, b, c) => {
//   return a + b + c;
// };
// console.log(noCurring(2, 2));

let currin = (a) => {
  return (b) => {
    return function (c) {
      return a + b + c;
    };
  };
};
console.log(currin(3)(4)(5));
