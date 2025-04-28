import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
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

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
