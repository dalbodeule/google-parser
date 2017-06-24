const request = require('request'), DomParser = require('dom-parser'), parser = new DomParser(), google = require('google');

module.exports.img = (search) => {
    return new Promise((resolve, reject) => {
        request({
            url: "https://www.google.com/search?q="+encodeURIComponent(search+' -ilbe.com')+"&tbm=isch&ie=UTF-8",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
            }
        }, (err, res, body) => {
            if(err) reject(err);
            let dom = parser.parseFromString(body);
            let list = dom.getElementsByClassName('rg_meta');
            let result = new Array();
            list.forEach((cur) => {
                let json = JSON.parse(cur.innerHTML);
                result.push({img: json.ou, url: json.ru});
            });
            resolve(result);
        });
    });
}
module.exports.jpg = (search) => {
    return new Promise((resolve, reject) => {
        request({
            url: "https://www.google.com/search?q="+encodeURIComponent(search+' -ilbe.com')+"&tbm=isch&ie=UTF-8&tbs=ift:jpg",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
            }
        }, (err, res, body) => {
            if(err) reject(err);
            let dom = parser.parseFromString(body);
            let list = dom.getElementsByClassName('rg_meta');
            let result = new Array();
            list.forEach((cur) => {
                let json = JSON.parse(cur.innerHTML);
                result.push({img: json.ou, url: json.ru});
            });
            resolve(result);
        });
    });
}
module.exports.search = (search) => {
    return new Promise((resolve, reject) => {
        google(search+' -ilbe.com', (err, res) => {
            if(err) reject(err);
            let result = new Array();
            for(let i = 0; i < res.links.length; ++i) {
                let now = res.links[i];
                result.push({title: now.title, link: now.href, description: now.description});
            }
            for(let i in result) {
                if(result[i].title == null || result[i].link == null) {
                    result.splice(i, 1);
                }
            }
            resolve(result);
        });
    });
}