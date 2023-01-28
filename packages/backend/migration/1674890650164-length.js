export class length1674890650164 {
    name = 'length1674890650164'

    async up(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "username" TYPE character varying(4096)`);
			await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "usernameLower" TYPE character varying(4096)`);
			await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "name" TYPE character varying(4096)`);
    }

    async down(queryRunner) {
    }
}
