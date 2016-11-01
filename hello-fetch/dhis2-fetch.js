const fetch = require( "node-fetch" );
const access = require("./access.json");

const createAuthenticationHeader = (username, password) => {
  return "Basic " + new Buffer( username + ":" + password ).toString( "base64" );
};

/*
fetch(
  "https://play.dhis2.org/dev/api/dataElements.json?paging=false",
  {
    headers: {
      Authorization: createAuthenticationHeader( "admin", "district" )
    }
  }
)
  .then( result => result.text() )
  .then( data => {
    const parsed = JSON.parse( data );
    console.log( parsed.dataElements[0].displayName );
  } );
*/

fetch(
  "https://play.dhis2.org/dev/api/dataElements.json?paging=false",
  {
    headers: {
      Authorization: createAuthenticationHeader( access.username, access.password )
    }
  }
)
  .then( result => result.json() )
  .then( data => console.log( data.dataElements[0].displayName ) );
