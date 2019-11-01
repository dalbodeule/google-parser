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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const google = __importStar(require("./index"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    google.search("kirino", true)
        .then((res) => {
        // tslint:disable-next-line: no-console
        console.log(res);
    }).catch((err) => {
        // tslint:disable-next-line: no-console
        console.log(err);
    });
    google.img("君の名は。 Another Side: Earthbound")
        .then((res) => {
        // tslint:disable-next-line: no-console
        console.log(res[0]);
    }).catch((err) => {
        // tslint:disable-next-line: no-console
        console.log(err);
    });
    google.jpg("sawamura eriri")
        .then((res) => {
        // tslint:disable-next-line: no-console
        console.log(res[0]);
    }).catch((err) => {
        // tslint:disable-next-line: no-console
        console.log(err);
    });
}))();
