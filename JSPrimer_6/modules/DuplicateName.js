"use strict";
var Name = (function () {
    function Name() {
    }
    Object.defineProperty(Name.prototype, "message", {
        get: function () {
            return "Other name";
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
