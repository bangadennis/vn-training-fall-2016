/*
 const o1 = {
 a: 20,
 hello() {
 console.log( this.a );
 },
 helloArrow: () => console.log( this.a )
 };

 o1.hello();
 o1.helloArrow();
 */

/*
 const o2 = {
 a: 20,
 b: 40,
 add() {
 const addArrow = () => this.a + this.b;
 return addArrow();
 }
 };

 console.log( o2.add() );
 */

function hello() {
  console.log( this.hello );
}

hello.call( {
  hello: "Hello World"
} );

hello.call( {
  hello: "Good bye cruel world"
} );

function add(a, b) {
  console.log( a + b );
}

add( 1, 2 );
add.call( null, 3, 4 );
add.apply( null, [5, 6] );
