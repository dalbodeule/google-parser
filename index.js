const request = require('request'), DomParser = require('dom-parser'), parser = new DomParser();

/**
 * 이미지 검색 함수입니다.
 * @param {string} search - Google 에 검색할 검색어입니다.
 * @return {Promise<Response>} - 응답 데이터가 넘어옵니다.
 */
module.exports.img = (search) => {
    return new Promise((resolve, reject) => {
        request({
            url: "https://www.google.com/search?q="+encodeURIComponent(search)+"&tbm=isch&ie=UTF-8",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
            }
        }, (err, res, body) => {
            if(err) reject(err);
            let dom = parser.parseFromString(body);
            let list = dom.getElementsByClassName('rg_meta');
            let result = [];
            list.forEach((cur) => {
                let json = JSON.parse(cur.innerHTML);
                result.push({img: json.ou, url: json.ru});
            });
            resolve(result);
        });
    });
}

/**
 * JPG 이미지 검색 함수입니다.
 * @param {string} search - Google 에 검색할 검색어입니다.
 * @return {Promise<Response>} - 응답 데이터가 넘어옵니다.
 */
module.exports.jpg = (search) => {
    return new Promise((resolve, reject) => {
        request({
            url: "https://www.google.com/search?q="+encodeURIComponent(search)+"&tbm=isch&ie=UTF-8&tbs=ift:jpg",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
            }
        }, (err, res, body) => {
            if(err) reject(err);
            let dom = parser.parseFromString(body);
            let list = dom.getElementsByClassName('rg_meta');
            let result = [];
            list.forEach((cur) => {
                let json = JSON.parse(cur.innerHTML);
                result.push({img: json.ou, url: json.ru});
            });
            resolve(result);
        });
    });
}

/**
 * 통합검색 함수입니다. 이미지나 뉴스 등의 검색결과는 반환하지 않습니다.
 * @param {string} search - Google 에 검색할 검색어입니다.
 * @return {Promise<Response>} - 응답 데이터가 넘어옵니다.
 */
module.exports.search = (search) => {
    return new Promise((resolve, reject) => {        
        const google = require('google');
        google.resultsPerPage = 100;
        google(search, (err, res) => {
            if(err) {
                if(err.message.match(/To continue, please type the characters below\:/) != '') {
                    resolve(false);
                } else {
                    reject(err);
                }
            } 
            else if(res.links == null) resolve(false);
            else {
                let result = [];
                for(let i = 0; i < res.links.length; ++i) {
                    let now = res.links[i];
                    if(!(!now.title|| !now.href)) {
                        result.push({title: now.title, link: now.href, description: now.description});
                    } 
                }
                resolve(result);
            }
        });
    });
}