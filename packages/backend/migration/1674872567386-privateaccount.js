export class privateaccount1674872567386 {
    name = 'privateaccount1674872567386'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_profile" ADD "privateAccount" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_profile" DROP COLUMN "privateAccount"`);
    }
}
