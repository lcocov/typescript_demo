export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return "传进来的啥玩意"+s;
        //return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}