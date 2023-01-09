export class disabletrends1673263188687 {
    name = 'disabletrends1673263188687'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ADD "disableTrends" boolean NOT NULL DEFAULT false`, undefined);
				await queryRunner.query(`ALTER TABLE "meta" ADD "disableFeatured" boolean NOT NULL DEFAULT false`, undefined);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "disableTrends"`, undefined);
				await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "disableFeatured"`, undefined);
    }
}
