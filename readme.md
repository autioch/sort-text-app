# sort-text-app

*Work in progress.*


## Installation
`npm i sort-text-app`

## Usage

```javascript

const sortTextApp = require('sort-text-app');

import  sortTextApp  from 'sort-text-app';

```

## Adding Preact
1. Install packages:
`npm i preact babel-plugin-transform-react-jsx`
`npm i -D eslint-plugin-react`
2. Modify `tools/webpack.config.js`. Add option to javascript loader:
```javascript
  plugins: [
    ['transform-react-jsx', {
      pragma: 'h'
    }]
]
```
