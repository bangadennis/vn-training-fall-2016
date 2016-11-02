const ljf = require( "load-json-file" );
const wjf = require( "write-json-file" );

const vnProv = ljf.sync( "./data/vnProv.json" );

const regions = {
  "JzKStMojAGA": {
    filename: "vnProv_region_north_JzKStMojAGA.json",
    data: []
  },
  "SgkhNupCR4x": {
    filename: "vnProv_region_central_SgkhNupCR4x.json",
    data: []
  },
  "bJ55F4lb3WJ": {
    filename: "vnProv_region_highland_bJ55F4lb3WJ.json",
    data: []
  },
  "T6shP0GyRuQ": {
    filename: "vnProv_region_south_T6shP0GyRuQ.json",
    data: []
  }
};

vnProv.features.forEach( feature => {
  if ( !regions[feature.properties.parent] ) return;
  regions[feature.properties.parent].data.push( feature );
} );

Object.keys( regions )
  .forEach( k => wjf.sync( regions[k].filename, regions[k].data ) );
