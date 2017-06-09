var testsContext = require.context('./component', true, /.spec.ts/);
testsContext.keys().forEach(testsContext);

var testsContext = require.context('./component', true, /.ts/);
testsContext.keys().forEach(testsContext);
