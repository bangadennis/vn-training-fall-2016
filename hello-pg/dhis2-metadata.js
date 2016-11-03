const _ = require( "lodash" );
const pgp = require( "pg-promise" )( {} );
const access = require( "./access.json" );
const db = pgp( access.dhis2 );

const getDhisObjects = opts => {
  const domainType = _.get( opts, "domainType", "AGGREGATE" );
  const vtype = _.get( opts, "vtype", "DATE" );

  return db.many( "SELECT * FROM dataelement WHERE valuetype=${vtype} AND domaintype=${domainType}", {vtype, domainType} )
};

getDhisObjects( {
  domainType: "TRACKER",
  vtype: 'NUMBER'
} ).then( rows => {
  console.log( rows.length );
  pgp.end();
} );
