import {
  Student,
  Person
} from "./Student";

const s1 = new Student( "Student #1", ["INF1000", "INF1010"] );
const s2 = new Student( "Student #2", ["INF1000", "INF1010"] );

const printName = student => {
  if ( student instanceof Person ) {
    console.log( student.getName() );
  }
};

printName( s1 );
printName( "hello" );

const p1 = new Person();
printName( p1 );
