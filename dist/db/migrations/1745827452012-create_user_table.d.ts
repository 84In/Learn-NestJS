import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserTable1745827452012 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
