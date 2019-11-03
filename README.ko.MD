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
google.img(search: string): Promise<IImg[]>

google.jpg(search: string): Promise<IImg[]>

google.google(search: string): Promise<ISearch[]|ISearchError>
```

## 타입
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

## 반환

반환은 object로 처리됩니다. 위의 type을 참조하시기 바랍니다.

## 제작자
달보드레(dalbodeule)[npmjs](https://www.npmjs.com/~trusty_people) [github](https://github.com/dalbodeule)