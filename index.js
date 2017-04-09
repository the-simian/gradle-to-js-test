var g2js = require('gradle-to-js/lib/parser');


console.log('WORKING------------------------')
g2js
  .parseFile('test-file-working/build.gradle')
  .then(function(representation) {


    console.log(representation);


    console.log('BROKEN------------------------')
    g2js
      .parseFile('test-file-broken/build.gradle')
      .then(function(representation) {


        console.log(representation);
      });

  });
