# google-parser
 
[![npm version](https://badge.fury.io/js/google-parser.svg)](https://badge.fury.io/js/google-parser)
 
[![NPM](https://nodei.co/npm/google-parser.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/google-parser/)
 
Use this library to get a search result from google.
 
## License
MIT
 
## Module load
 
javascript
```javascript
let google = require('google-parser');
```

typescript
```typescript
import * as google from 'google-parser'
```

## How it works

This module supports only Promise and async / await.

## Function list

```typescript
google.img(search: string): Promise<IImg[]>

google.jpg(search: string): Promise<IImg[]>

google.google(search: string): Promise<ISearch[]|ISearchError>
```

## Type
```typescript
interface IImg {
  img: string,
  url: string,
  name: string
}
	
interface ISearch {
  title: string,
  url: string,
  description: string
}

interface ISearchError {
  error: true,
  reson: "antibot"
}
```

## Return

The return is treated as an object. Please refer to the above type.
 
## Developer
볕뉘(small_sunshine)[npmjs](https://www.npmjs.com/~trusty_people) [github](https://github.com/small_sunshines)