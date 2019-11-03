"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const request_promise_1 = __importDefault(require("request-promise"));
exports.default = (search, safe) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let url;
        if (safe) {
            url = `https://www.google.com/search?q=${encodeURIComponent(search)}&tbm=isch&ie=UTF-8&safe=active`;
        }
        else {
            url = `https://www.google.com/search?q=${encodeURIComponent(search)}&tbm=isch&ie=UTF-8`;
        }
        const data = yield request_promise_1.default({
            url,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" +
                    "(KHTML, like Gecko) Chrome/73.0.3683.103 Whale/1.5.72.4 Safari/537.36",
            },
        });
        if (data.match(/To continue, please type the characters below\:/) !== "") {
            return {
                error: true,
                reson: "antibot",
            };
        }
        else {
            const $ = cheerio_1.default.load(data);
            const result = [];
            $("div#search").find(".rc .r").map((i, el) => {
                const title = $(el).find("h3").text();
                const url = $(el).find("a").attr("href");
                const description = $(el).find("div.s div span.st").text();
                result.push({
                    title,
                    url,
                    description,
                });
            });
            return result;
        }
    }
    catch (error) {
        throw error;
    }
});
