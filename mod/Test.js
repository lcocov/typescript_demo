define(["require", "exports", "./ZipCodeValidator"], function (require, exports, ZipCodeValidator_1) {
    "use strict";
    var myValidator = new ZipCodeValidator_1["default"]();
    console.log(myValidator.isAcceptable("a"));
});
