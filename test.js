const google = require('./index.js');

google.search('kirino')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});
google.img('君の名は。 Another Side: Earthbound')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});
google.jpg('君の名は。 Another Side: Earthbound')
.then((res) => {
    console.log(res[0]);
}).catch((err) => {
    console.log(err);
});