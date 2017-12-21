"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Incremean = (function () {
    function Incremean(init) {
        this.counter = init && init.counter || 0;
        this.mean = init && init.mean || 0;
        this.MAX_VAULUE_EXCEEDED = init && init.MAX_VAULUE_EXCEEDED || false;
    }
    Incremean.restore = function (json) {
        var init = (typeof json === "string") ? JSON.parse(json) : json;
        return new Incremean(init);
    };
    Incremean.unmarshal = function (json) {
        var tuple = (typeof json === "string") ? JSON.parse(json) : json;
        if (!Array.isArray(tuple) || tuple.length !== 3) {
            throw new Error("Failed to unmarshal the tuple");
        }
        return new Incremean({
            MAX_VAULUE_EXCEEDED: tuple[2],
            counter: tuple[0],
            mean: tuple[1],
        });
    };
    Incremean.prototype.add = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            var totalAmount = this.mean * this.counter + arg;
            if (totalAmount > Number.MAX_VALUE) {
                this.MAX_VAULUE_EXCEEDED = true;
            }
            this.mean = totalAmount / ++this.counter;
        }
        return this.getMean();
    };
    Incremean.prototype.getCounter = function () {
        return this.counter;
    };
    Incremean.prototype.getMean = function () {
        return this.mean;
    };
    Incremean.prototype.marshal = function () {
        return JSON.stringify([this.counter, this.mean, this.MAX_VAULUE_EXCEEDED]);
    };
    Incremean.prototype.isValid = function () {
        return !this.MAX_VAULUE_EXCEEDED;
    };
    return Incremean;
}());
exports.default = Incremean;
