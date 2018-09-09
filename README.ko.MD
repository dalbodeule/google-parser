# google-parser

[![npm version](https://badge.fury.io/js/google-parser.svg)](https://badge.fury.io/js/google-parser)

[![NPM](https://nodei.co/npm/google-parser.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/google-parser/)

역할: Google 검색결과를 반환합니다.

## 라이선스
MIT

## 모듈 로드
 
javascript
```javascript
let google = require('google-parser');
```

typescript
```typescript
import * as google from 'google-parser'
```

## 작동방식

본 모듈은 Promise 및 async/await만 지원합니다.

## 함수목록

```typescript
google.img(search: string): Promise<ImageResponse>

google.jpg(search: string): Promise<ImageResponse>

google.google(search: string): Promise<serachResponse|error>
```

## 타입
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

## 반환

반환은 object로 처리됩니다. 위의 type을 참조하시기 바랍니다.

## 제작자
볕뉘(small_sunshine)[npmjs](https://www.npmjs.com/~trusty_people) [github](https://github.com/small_sunshines)