#!/usr/bin/env node
/* jshint esversion: 6 */
const program = require('commander');
const tcpp = require('tcp-ping');

program
  .version('0.1.0')
  .option('-h, --host [host]', 'remote host to connect to', 'localhost')
  .option('-p, --port [number]', 'remote port to connect to', 80)
  .option('-c, --count [number]', 'how many attempts to measure time', 10)
  .parse(process.argv);

tcpp.ping({ address: program.host,
            port: program.port,
            attempts: program.count }, function(err, data) {
  var errCount = 0;
  var successCount = 0;
  var sum = 0;
  if (err) {
    console.log('Encountered errors during the test: ' + err);
  }
  for (var i in data.results) {
    var result = data.results[i];
    if (result.err) {
      errCount = errCount + 1;
    } else {
      successCount = successCount + 1;
      sum = sum + result.time;
    }
  }
  var avg = sum / successCount;

  lossFloat = 100.0*(errCount/data.attempts);
  console.log('%d connections attempted, %d connections made, %f%% loss',
              data.attempts, successCount, lossFloat.toFixed(1));
  console.log('round-trip min/avg/max = %f/%f/%f ms', data.min.toFixed(3),
              avg.toFixed(3), data.max.toFixed(3));
});
