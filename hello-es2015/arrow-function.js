function add(a, b) {
  return a + b;
}

const addArrow1 = (a, b) => {
  let result = a + b;
  return result
};

const addArrow2 = (a, b) => a + b;

console.log( add( 4, 5 ) );
console.log( addArrow1( 4, 5 ) );
console.log( addArrow2( 4, 5 ) );