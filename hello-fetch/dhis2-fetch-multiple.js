const fetch = require( "node-fetch" );
const access = require( "./access.json" );

const createAuthenticationHeader = (username, password) => {
  return "Basic " + new Buffer( username + ":" + password ).toString( "base64" );
};

const fetchFromDhis2 = url => {
  const headers = {
    Authorization: createAuthenticationHeader( access.username, access.password )
  };

  return fetch( url, {headers} ).then( result => result.json() );
};

Promise.all( [
  fetchFromDhis2( "https://play.dhis2.org/dev/api/dataElements.json" ),
  fetchFromDhis2( "https://play.dhis2.org/dev/api/indicators.json" ),
  fetchFromDhis2( "https://play.dhis2.org/dev/api/organisationUnits.json" ),
  fetchFromDhis2( "https://play.dhis2.org/dev/api/dataSets.json" )
] ).then( arr => {
  console.log( arr.length );
} );