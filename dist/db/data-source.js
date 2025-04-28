"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'nestuser',
    password: 'nestpassword',
    database: 'nestjsdb',
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/db/migrations/**/*{.ts,.js}'],
    synchronize: false,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map