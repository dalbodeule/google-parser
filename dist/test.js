"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
// tslint:disable: no-console
(() => __awaiter(this, void 0, void 0, function* () {
    yield google.search("kirino", true)
        .then((res) => {
        console.log("keyword search 'kirino' with safe search:");
        console.log(res);
    }).catch((err) => {
        console.log("keyword search 'kirino' with safe search, error");
        console.log(err);
    });
    yield (() => __awaiter(this, void 0, void 0, function* () {
        setTimeout(() => {
            return;
        }, 300);
    }))();
    yield google.img("君の名は。")
        .then((res) => {
        console.log("image search '君の名は。' with safe search, first result:");
        console.log(res[0]);
    }).catch((err) => {
        console.log("image search '君の名は。' with safe search, error:");
        console.log(err);
    });
    yield (() => __awaiter(this, void 0, void 0, function* () {
        setTimeout(() => {
            return;
        }, 300);
    }))();
    yield google.jpg("sawamura eriri")
        .then((res) => {
        console.log("jpg image search 'sawamura eriri' with safe search, first result:");
        console.log(res[0]);
    }).catch((err) => {
        console.log("jpg image search 'sawamura eriri' with safe search, error:");
        console.log(err);
    });
}))();
