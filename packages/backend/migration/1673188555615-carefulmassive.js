export class carefulmassive1673188555615 {
    name = 'carefulmassive1673188555615'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_profile" ADD "carefulMassive" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_profile" DROP COLUMN "carefulMassive"`);
    }
}
