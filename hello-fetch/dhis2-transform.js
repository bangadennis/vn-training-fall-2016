const fetch = require( "node-fetch" );
const access = require( "./access.json" );

const createAuthenticationHeader = (username, password) => {
  return "Basic " + new Buffer( username + ":" + password ).toString( "base64" );
};

const filterNoCode = de => de.code === undefined;
const filterNoUser = de => de.user === undefined;
const filterNoUserAndNoCode = de => filterNoCode( de ) && filterNoUser( de );
const filterNoUserOrNoCode = de => filterNoCode( de ) || filterNoUser( de );

fetch(
  "https://play.dhis2.org/demo/api/dataElements.json?paging=false&fields=:all,categoryCombo[id,displayName],user[id,userCredentials[username]]",
  {
    headers: {
      Authorization: createAuthenticationHeader( access.username, access.password )
    }
  }
)
  .then( result => result.json() )
  // .then( data => csvTransformMapWithFilter( data, 'DATE' ) );
  .then( data => csvTransformMapWithFilterFn( data, filterNoUserOrNoCode ) );

const csvTransform = data => {
  console.log( "id,code,name,vtype,coid,coname,userid,username" );

  data.dataElements
    .forEach( de => {
      console.log( `${de.id},${de.code},${de.displayName},${de.valueType},${de.categoryCombo.id},${de.categoryCombo.displayName},${de.user.id},${de.user.userCredentials.username}` );
    } )
};

const csvTransformFiltered = data => {
  console.log( "id,code,name,vtype,coid,coname,userid,username" );

  data.dataElements
    .filter( de => de.valueType === 'DATE' )
    .forEach( de => {
      console.log( `${de.id},${de.code},${de.displayName},${de.valueType},${de.categoryCombo.id},${de.categoryCombo.displayName},${de.user.id},${de.user.userCredentials.username}` );
    } )
};

const csvTransformMapWithFilter = (data, vtype) => {
  data.dataElements = data.dataElements.filter( de => de.valueType === vtype );
  csvTransformMap( data );
};

const csvTransformMapWithFilterFn = (data, fn) => {
  data.dataElements = data.dataElements.filter( fn );
  csvTransformMap( data );
};

const csvTransformMap = data => {
  outputCsv( data.dataElements.map( de => {
    const result = {
      id: de.id,
      code: de.code,
      name: de.displayName,
      vtype: de.valueType,
      coid: de.categoryCombo.id,
      coname: de.categoryCombo.displayName
    };

    if ( de.user ) {
      result.userid = de.user.id;
      result.username = de.user.userCredentials.username;
    }

    return result;
  } ) )
};

/**
 * Expect input:
 * {
 *   id, code, name, vtype, coid, coname, userid, username
 * }
 */
const outputCsv = dataElements => {
  console.log( "id,code,name,vtype,coid,coname,userid,username" );

  dataElements.forEach( de => {
    console.log( `${de.id},${de.code},${de.name},${de.vtype},${de.coid},${de.coname},${de.userid},${de.username}` );
  } )
};