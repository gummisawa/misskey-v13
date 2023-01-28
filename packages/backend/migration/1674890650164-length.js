const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class length1674890650164 {
    name = 'length1674890650164'

    async up(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "username" TYPE character varying(4096)`);
    }

    async down(queryRunner) {
    }
}
