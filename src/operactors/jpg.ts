import cheerio from "cheerio"
import request from "request-promise"

import { IImg } from "./img"

export default async (search: string, safe?: boolean): Promise<IImg[]> => {
  try {
    let url: string;
    if (safe) {
      url = `https://www.google.com/search?q=${encodeURIComponent(search)}&tbm=isch&ie=UTF-8&safe=active`
    } else {
      url = `https://www.google.com/search?q=${encodeURIComponent(search)}&tbm=isch&ie=UTF-8`
    }
    const data = await request({
      url,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
          "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Whale/1.5.72.4 Safari/537.36",
      },
    })

    const $ = cheerio.load(data)
    const result: IImg[] = []

    $("div#search").find(".rg_bx.rg_di").map((i, el) => {
      const meta = $(el).find("div.rg_meta.notranslate").text()

      const parsedMeta = JSON.parse(meta)

      if (parsedMeta.ou.match(/^(?:https?|data:image\/.*;base64)+.*/)) {
        result.push({
          img: parsedMeta.ou,
          url: parsedMeta.ru,
          name: parsedMeta.pt,
        })
      }
    })

    return result
  } catch (error) {
    throw error
  }
}
