const google = require('./google_parser.js');

google.search('테스트')
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
google.img('ajdjaivcjeoijvoiajveoijwaoijvoiheaohgiuab iuegaiuvbaiusneaiu')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});