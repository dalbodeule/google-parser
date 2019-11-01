import cheerio from "cheerio"
import request from "request-promise"

export default async (search: string, safe?: boolean): Promise<ISearch[]|ISearchError> => {
  try {
    let url;
    if (safe) {
      url = `https://www.google.com/search?q=${encodeURIComponent(search)}&tbm=isch&ie=UTF-8&safe=active`
    } else {
      url = `https://www.google.com/search?q=${encodeURIComponent(search)}&tbm=isch&ie=UTF-8`
    }
    const data = await request({
      url,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" +
          "(KHTML, like Gecko) Chrome/73.0.3683.103 Whale/1.5.72.4 Safari/537.36",
      },
    })

    if (data.match(/To continue, please type the characters below\:/) !== "") {
      return {
        error: true,
        reson: "antibot",
      }
    } else {
      const $ = cheerio.load(data)
      const result: ISearch[] = []

      $("div#search").find(".rc .r").map((i, el) => {
        const title = $(el).find("h3").text()
        const url = $(el).find("a").attr("href")
        const description = $(el).find("div.s div span.st").text()

        result.push({
          title,
          url,
          description,
        })
      })

      return result
    }
  } catch (error) {
    throw error
  }
}

export interface ISearch {
  title: string,
  url: string,
  description: string
}

export interface ISearchError {
  error: true,
  reson: "antibot"
}
