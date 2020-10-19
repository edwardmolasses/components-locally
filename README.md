# components-callout

> As a visitor to a PDP or CDP , when I land on a PDP, then I will see the callout slide into position from the bottom of the screen

[![NPM](https://img.shields.io/npm/v/virtual-advisor-callout.svg)](https://www.npmjs.com/package/virtual-advisor-callout) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save components-callout
```

## Run

in src/ run 
```bash
npm start
```
in example/ run 
```bash
npm start
```

## Usage

```jsx
import React, { Component } from 'react'
import CallOut from 'components-callout'

<CallOut text="Questions about product or sizing?" isActive={true} handleClick={handleClick} handleCloseButtonClick={handleCloseButtonClick}>
  <img src="https://s3-us-west-2.amazonaws.com/images.arcteryx.com/virtual-advisor-callout/a6ff6a61-6c57-44ec-bdb0-dcae77bb05d6.png" 
        alt="Virtual Advisor"
        style={{height: '83px'}}
  />
</CallOut>
```

## License

MIT © [](https://github.com/)
