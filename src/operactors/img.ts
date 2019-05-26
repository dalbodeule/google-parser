import cheerio from "cheerio"
import request from "request-promise"

export default async (search: string): Promise<IImg[]> => {
  try {
    const data = await request({
      url: `https://www.google.com/search?q=${encodeURIComponent(search)}&tbm=isch&ie=UTF-8`,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" +
          "(KHTML, like Gecko) Chrome/73.0.3683.103 Whale/1.5.72.4 Safari/537.36",
      },
    })

    const $ = cheerio.load(data)
    const result: IImg[] = []

    $("div#search").find(".rg_bx.rg_di").map((i, el) => {
      const img = $(el).find("img.rg_ic").attr("src")
      const meta = $(el).find("div.rg_meta.notranslate").text()

      const parsedMeta = JSON.parse(meta)

      result.push({
        img,
        url: parsedMeta.ru,
        name: parsedMeta.pt,
      })
    })

    return result

  } catch (error) {
    throw error
  }
}

export interface IImg {
  img: string,
  url: string,
  name: string
}
