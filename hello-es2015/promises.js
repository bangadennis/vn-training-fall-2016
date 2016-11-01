/*
 function doWork(done, error) {
 setTimeout( () => {
 if ( Math.random() > 0.50 ) {
 done();
 } else {
 error();
 }
 }, 2000 );
 };

 doWork(
 () => console.log( "work is done" ),
 () => console.log( "an error occurred" )
 );
 */

function doWork() {
  return new Promise( (res, rej) => {
    setTimeout( () => {
      const rand = Math.random();
      if ( rand > 0.50 ) {
        res( rand );
      } else {
        rej( rand );
      }
    }, 2000 );
  } );
}

const p = doWork()
  .then( n => console.log( "work was done: " + n ) )
  .catch( () => console.log( "work has errors" ) );
