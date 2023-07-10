"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUsers1688738997363 = void 0;
var _typeorm = require("typeorm");
class CreateUsers1688738997363 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "users",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "first",
        type: "varchar",
        isUnique: true
      }, {
        name: "last",
        type: "varchar"
      }, {
        name: "email",
        type: "varchar",
        isUnique: true
      }, {
        name: "phone",
        type: "varchar"
      }, {
        name: "picture",
        type: "varchar"
      }, {
        name: "street",
        type: "varchar"
      }, {
        name: "city",
        type: "varchar"
      }, {
        name: "state",
        type: "varchar"
      }, {
        name: "postcode",
        type: "varchar"
      }]
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable("users");
  }
}
exports.CreateUsers1688738997363 = CreateUsers1688738997363;