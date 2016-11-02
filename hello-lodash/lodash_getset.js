const _ = require( "lodash" );

const config1 = {
  access: {
    username: "username"
  }
};

const config2 = {};

console.log( "access.username is available:", _.has( config1, "access.username" ) );
console.log( "access.password is available:", _.has( config1, "access.password" ) );

const username = _.get( config1, "access.username", "admin" );
const password = _.get( config1, "access.password", "district" );

console.log( username, password );

_.set( config2, "a.b.c.d.e.r.f.g.s.s.s.d.a.a.username", username );
_.set( config2, "xxxx.aaa.sss.ddd.password", password );

console.log( config2 );