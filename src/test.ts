import * as google from "./index"

(async () => {
    google.search("kirino", true)
        .then((res) => {
            // tslint:disable-next-line: no-console
            console.log(res)
        }).catch((err) => {
            // tslint:disable-next-line: no-console
            console.log(err)
        })
    google.img("君の名は。 Another Side: Earthbound")
        .then((res) => {
            // tslint:disable-next-line: no-console
            console.log(res[0])
        }).catch((err) => {
            // tslint:disable-next-line: no-console
            console.log(err)
        })
    google.jpg("sawamura eriri")
        .then((res) => {
            // tslint:disable-next-line: no-console
            console.log(res[0])
        }).catch((err) => {
            // tslint:disable-next-line: no-console
            console.log(err)
        })
})()
