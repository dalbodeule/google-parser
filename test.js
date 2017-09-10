const google = require('./google_parser.js');

google.search('kirino')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});
google.img('너의 이름은. Another Side: Earthbound')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});
google.jpg('너의 이름은. Another Side: Earthbound')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});