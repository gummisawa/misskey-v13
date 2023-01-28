export class description674889550814 {
	name = 'description1674889550814'

	async up(queryRunner) {
			await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "name" TYPE character varying(4096)`);
			await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "description" TYPE character varying(4096)`);
	}

	async down(queryRunner) {
	}
}
