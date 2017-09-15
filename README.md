# tcpping-node

This is a command-line utility built on the excellent [apaszke/tcp-ping](https://github.com/apaszke/tcp-ping) library.

## Installation
```text
npm install -g https://github.com/bprodoehl/tcpping-node.git
```

## Use
```text
$ tcpp --help
  Usage: tcpp [options]


  Options:

    -V, --version         output the version number
    -h, --host [host]     remote host to connect to
    -p, --port [number]   remote port to connect to
    -c, --count [number]  how many attempts to measure time
    -h, --help            output usage information
```

```text
$ tcpp -c myserver.mydomain.com -p 80 -c 100
100 connections attempted, 100 connections made, 0% loss
round-trip min/avg/max = 0.891/1.39/12.307 ms
```
