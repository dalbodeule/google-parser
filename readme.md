# google-parser

[![npm version](https://badge.fury.io/js/google-parser.svg)](https://badge.fury.io/js/google-parser)

[![NPM](https://nodei.co/npm/google-parser.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/google-parser/)

역할: Google 검색결과를 반환합니다.

## 라이선스
MIT

## 의존성 패키지
1. dom-parser(0.1.5)
2. google(2.1.0)
3. request(2.81.0)

## 모듈 로드

```javascript
let google = require('google-parser');
```

## callback 방식

본 모듈은 `callback` 호출을 지원하지 않습니다. 번거롭더라도 `promise` 나 `async/await` 패턴을 이용해주시기 바랍니다.

## promise 방식, async/await 방식

jsdoc 가 적용되어있습니다. 상세한 설명이 나타나므로 참고해주시기 바랍니다.

## 반환

반환은 json 으로 처리되며 테스트를 해보시면서 작동시켜보시는 것을 권장드립니다.

google-parser.search() 함수에서 구글의 안티봇 정책으로 검색이 불가능할 경우 `false` 가 반환됩니다.

## 제작자
볕뉘(small_sunshine)[npmjs](https://www.npmjs.com/~trusty_people) [github](https://github.com/small_sunshines)