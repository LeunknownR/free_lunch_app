"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SupplyHistoryRecordDTO {
    //#endregion
    constructor(supplyHistoryRecord) {
        this.id = supplyHistoryRecord.id;
        this.quantity = supplyHistoryRecord.quantity.value;
        this.suppliedOn = supplyHistoryRecord.suppliedOn.toISOString();
    }
}
exports.default = SupplyHistoryRecordDTO;
//# sourceMappingURL=SupplyHistoryRecordDTO.js.map