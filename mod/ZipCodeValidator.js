define(["require", "exports"], function (require, exports) {
    "use strict";
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return "传进来的啥玩意" + s;
            //return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
        };
        ZipCodeValidator.numberRegexp = /^[0-9]+$/;
        return ZipCodeValidator;
    }());
    exports.__esModule = true;
    exports["default"] = ZipCodeValidator;
});
