"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1745827452012 = void 0;
class CreateUserTable1745827452012 {
    name = 'CreateUserTable1745827452012';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` int NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.CreateUserTable1745827452012 = CreateUserTable1745827452012;
//# sourceMappingURL=1745827452012-create_user_table.js.map