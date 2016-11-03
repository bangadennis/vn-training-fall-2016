const _ = require( "lodash" );
const pgp = require( "pg-promise" )( {} );
const QueryFile = pgp.QueryFile;
const access = require( "./access.json" );
const db = pgp( access.dhis2 );

const getDataElements = new QueryFile( "./sql/get-data-elements.sql" );

const getDhisObjects = opts => {
  const domainType = _.get( opts, "domainType", "AGGREGATE" );
  const vtype = _.get( opts, "vtype", "DATE" );

  return db.many( getDataElements, {vtype, domainType} )
};

getDhisObjects( {
  domainType: "TRACKER",
  vtype: 'NUMBER'
} ).then( rows => {
  console.log( rows.length );
  pgp.end();
} );
