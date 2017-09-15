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
  console.log('%d connections made', data.attempts);
  console.log('round-trip min/avg/max = %f/%f/%f', data.min, data.avg, data.max);
});
