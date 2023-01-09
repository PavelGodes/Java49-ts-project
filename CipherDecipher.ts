export class CipherDecipher { 

     private aCodeAscii: number = 'a'.charCodeAt(0);
    private zCodeAscii: number = 'z'.charCodeAt(0);
    private nEnglishLetters: number = this.zCodeAscii - this.aCodeAscii + 1;
    private shift: number=1;

constructor ( aCodeAscii: number,
zCodeAscii: number, shift:number,
 nEnglishLetters: number){}// = this.zCodeAscii - this.aCodeAscii + 1 ) {}

  shiftCipher(str: string, shift: number = 1): string {
    return this.cipherDecipher(str, shift, this.mapperCipher);
}
 shiftDecipher(str: string, shift: number = 1) : string {
    return this.cipherDecipher(str, shift, this.mapperDecipher);
}
 mapperCipher(symb: string, shift: number) : string {
    const actualShift: number = (symb.charCodeAt(0) - this.aCodeAscii + shift) % this.nEnglishLetters;
    return String.fromCharCode(this.aCodeAscii + actualShift);
 }
 mapperDecipher(symb: string, shift: number): string {
    const actualShift: number = (this.zCodeAscii - symb.charCodeAt(0) + shift) % this.nEnglishLetters;
    return String.fromCharCode(this.zCodeAscii - actualShift);
 }
 cipherDecipher(str: string, shift: number,
    mapperFun: MapperFunction): string {
       //const arStr: string[] = Array.from(str);
       const arStr: Array<string> = Array.from(str);
       const arRes: Array<string> = arStr.map(symb => {
           let res: string = symb;
           if (symb <= 'z' && symb >= 'a') {
               res = mapperFun(symb, shift);
           }
           return res;
       })
       return arRes.join('');
    }
 }

 type MapperFunction = (symb: string, shift: number) => string;
 

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