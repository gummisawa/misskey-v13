export class disableInvitation1672823446325 {
    name = 'disableInvitation1672823446325'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ADD "disableInvitation" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "disableInvitation"`);
    }
	}
