"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KeyValuePair_1 = __importDefault(require("./KeyValuePair"));
class Dictionary {
    constructor(data) {
        this.data = data || [];
    }
    get value() {
        return this.data;
    }
    set value(newValue) {
        this.data = newValue;
    }
    Add(item) {
        this.data.push(item);
    }
    Append(key, value) {
        this.data.push(new KeyValuePair_1.default(key, value));
    }
    Erase(key) {
        this.data = this.data.filter(item => item.key !== key);
    }
    Contain(key) {
        return this.data.some(item => item.key === key);
    }
    Find(key) {
        const foundItem = this.data.find(item => item.key === key);
        return foundItem ? foundItem.value : null;
    }
    get length() {
        return this.data.length;
    }
    get Keys() {
        return this.data.map(x => x.key);
    }
    get Values() {
        return this.data.map(x => x.value);
    }
}
exports.default = Dictionary;
