const _ = require( "lodash" );
const faker = require( "faker" );
const pgp = require( "pg-promise" )( {} );
const QueryFile = pgp.QueryFile;
const access = require( "./access.json" );
const db = pgp( access.user );

class UserStore {
  constructor() {
    this._create = new QueryFile( "./sql/user/create.sql" );
    this._insert = new QueryFile( "./sql/user/insert.sql" );
  }

  create() {
    return db.none( this._create );
  }

  insert(user) {
    if ( !_.isArray( user ) ) return db.none( this._insert, user );

    return db.tx(
      t => t.batch( user.map( u => t.none( this._insert, u ) ) )
    );
  }
}

const us = new UserStore();

const generate = (n = 10) => {
  const arr = [];

  for ( let i = 0; i < n; i++ ) {
    arr.push( {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      description: faker.lorem.sentences()
    } )
  }

  return arr;
};

us.create().then( () => {
  us.insert( generate( 1000 ) ).then( () => pgp.end() );
} );
