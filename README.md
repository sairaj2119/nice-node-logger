# nice-node-logger

Simple logger for Node.js that prints the filename and line number of the log

# Installation

Instal the packge by running `npm i -D nice-node-logger` or `yarn add -D nice-node-logger`

# Usage

```js {.line-numbers}
// myFile.js
const logger = require('nice-node-logger')

logger.log('Hello world')
//
logger.info('Hello world')
//
logger.warn('Hello world')
//
logger.error('Hello world')
```

# Result
