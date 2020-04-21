"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const util_1 = require("util");
function ToNumber() {
    return class_transformer_1.Transform((value) => {
        if (util_1.isNull(value) || util_1.isUndefined(value)) {
            return value;
        }
        const valueNumber = Number(value);
        if (isNaN(valueNumber)) {
            return value;
        }
        return valueNumber;
    });
}
exports.ToNumber = ToNumber;
//# sourceMappingURL=to-number.pipe.js.map