export class disableprofiledirectory1672573273345 {
    name = 'disableprofiledirectory1672573273345'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ADD "disableTimelinePreview" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "meta" ADD "disableProfileDirectory" boolean NOT NULL DEFAULT false`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "disableProfileDirectory" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "meta" ALTER COLUMN "disableTimelinePreview" DROP DEFAULT`);
    }
}
