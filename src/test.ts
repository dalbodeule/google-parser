import * as google from "./index"

// tslint:disable: no-console
(async () => {
  await google.search("kirino", true)
    .then((res) => {
      console.log("keyword search 'kirino' with safe search:")
      console.log(res)
    }).catch((err) => {
      console.log("keyword search 'kirino' with safe search, error")
      console.log(err)
    })

  await(async () => {
    setTimeout(() => {
      return
    }, 300)
  })()

  await google.img("君の名は。")
    .then((res) => {
      console.log("image search '君の名は。' with safe search, first result:")
      console.log(res[0])
    }).catch((err) => {
      console.log("image search '君の名は。' with safe search, error:")
      console.log(err)
    })

  await(async () => {
    setTimeout(() => {
      return
    }, 300)
  })()

  await google.jpg("sawamura eriri")
    .then((res) => {
      console.log("jpg image search 'sawamura eriri' with safe search, first result:")
      console.log(res[0])
    }).catch((err) => {
      console.log("jpg image search 'sawamura eriri' with safe search, error:")
      console.log(err)
    })
})()
