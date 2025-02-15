export class userProfile1672537923820 {
    name = 'userProfile1672537923820'

    async up(queryRunner) {
        await queryRunner.query(`COMMENT ON COLUMN "user"."isFox" IS 'Whether the User is a fox.'`);
        await queryRunner.query(`CREATE INDEX "IDX_a9021cc2e1feb5f72d3db6e9f5" ON "abuse_user_report" ("targetUserId") `);
        await queryRunner.query(`ALTER TABLE "abuse_user_report" ADD CONSTRAINT "FK_a9021cc2e1feb5f72d3db6e9f5f" FOREIGN KEY ("targetUserId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "abuse_user_report" DROP CONSTRAINT "FK_a9021cc2e1feb5f72d3db6e9f5f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a9021cc2e1feb5f72d3db6e9f5"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."isFox" IS NULL`);
    }
}
