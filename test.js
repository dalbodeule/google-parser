const google = require('./google_parser.js');

google.search('치탄다 에루')
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
google.img('치탄다 에루')
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});