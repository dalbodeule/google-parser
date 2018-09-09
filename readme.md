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
google.img(search: string): Promise<ImageResponse>

google.jpg(search: string): Promise<ImageResponse>

google.google(search: string): Promise<serachResponse|error>
```

## Type
```typescript
interface imgReturn {
	[index: number]: {
		img: string,
		url: string
    }
}
	
interface searchReturn {
    [index: number]: {
        title: string,
        link: string,
        description: string
    }
}

interface error {
    error: true,
    reson: string
}
```

## Return

The return is treated as an object. Please refer to the above type.
 
## Developer
볕뉘(small_sunshine)[npmjs](https://www.npmjs.com/~trusty_people) [github](https://github.com/small_sunshines)