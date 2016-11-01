// https://play.dhis2.org/dev/api/dataElements.json?filter=name:like:anc

const domain = "https://play.dhis2.org";
const objectType = "indicator";
const nameFilter = "anc";

const url1 = domain + "/api/" + objectType + ".json?filter=name:like:" + nameFilter;
console.log( url1 );

const url2 = `${domain}/api/${objectType}.json?filter=name:like:${nameFilter}`;
console.log( url2 );

const url3 = "<html>" +
  "<h1>" + nameFilter + "</h1>" +
  "</html>";

console.log( url3 );

const o = {
  title: "My Title",
  heading: "My Heading"
};

const url4 = `
<html>
<head>
  <title>${o.title}</title>
</head>
<body>
  <h2>${o.heading}</h2>
</body>
</html>
`;

console.log( url4 );
