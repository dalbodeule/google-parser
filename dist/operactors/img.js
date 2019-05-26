"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const request_promise_1 = __importDefault(require("request-promise"));
exports.default = (search) => __awaiter(this, void 0, void 0, function* () {
    try {
        const data = yield request_promise_1.default({
            url: `https://www.google.com/search?q=${encodeURIComponent(search)}&tbm=isch&ie=UTF-8`,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" +
                    "(KHTML, like Gecko) Chrome/73.0.3683.103 Whale/1.5.72.4 Safari/537.36",
            },
        });
        const $ = cheerio_1.default.load(data);
        const result = [];
        $("div#search").find(".rg_bx.rg_di").map((i, el) => {
            const img = $(el).find("img.rg_ic").attr("src");
            const meta = $(el).find("div.rg_meta.notranslate").text();
            const parsedMeta = JSON.parse(meta);
            result.push({
                img,
                url: parsedMeta.ru,
                name: parsedMeta.pt,
            });
        });
        return result;
    }
    catch (error) {
        throw error;
    }
});
