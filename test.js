const google = require('./google_parser.js');

google.search('Chitanda Eru')
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
google.img('Chitanda Eru')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});