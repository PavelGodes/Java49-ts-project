"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherDecipher = void 0;
class CipherDecipher {
    constructor(aCodeAscii, zCodeAscii, shift, nEnglishLetters) {
        this.aCodeAscii = 'a'.charCodeAt(0);
        this.zCodeAscii = 'z'.charCodeAt(0);
        this.nEnglishLetters = this.zCodeAscii - this.aCodeAscii + 1;
        this.shift = 1;
    } // = this.zCodeAscii - this.aCodeAscii + 1 ) {}
    shiftCipher(str, shift = 1) {
        return this.cipherDecipher(str, shift, this.mapperCipher);
    }
    shiftDecipher(str, shift = 1) {
        return this.cipherDecipher(str, shift, this.mapperDecipher);
    }
    mapperCipher(symb, shift) {
        const actualShift = (symb.charCodeAt(0) - this.aCodeAscii + shift) % this.nEnglishLetters;
        return String.fromCharCode(this.aCodeAscii + actualShift);
    }
    mapperDecipher(symb, shift) {
        const actualShift = (this.zCodeAscii - symb.charCodeAt(0) + shift) % this.nEnglishLetters;
        return String.fromCharCode(this.zCodeAscii - actualShift);
    }
    cipherDecipher(str, shift, mapperFun) {
        //const arStr: string[] = Array.from(str);
        const arStr = Array.from(str);
        const arRes = arStr.map(symb => {
            let res = symb;
            if (symb <= 'z' && symb >= 'a') {
                res = mapperFun(symb, shift);
            }
            return res;
        });
        return arRes.join('');
    }
}
exports.CipherDecipher = CipherDecipher;
function testCipherDecipher(data, testName) {
    console.log(`${"*".repeat(10)}${testName}${"*".repeat(10)}`);
    const funForTest = testName === "cipherTest" ? shiftCipher : shiftDecipher;
    data.forEach((obj => console.log(`str=${obj.str}, shift=${obj.shift || 1} => ${funForTest(obj.str, obj.shift)}`)));
}
const dataForCipherTest = [
    { str: "abc" }, { str: "abz", shift: 1000 }
];
testCipherDecipher(dataForCipherTest, "cipherTest");
const dataForDecipherTest = [
    { str: "bcd" }, { str: "mnl", shift: 1000 }
];
//# sourceMappingURL=CipherDecipher.js.map