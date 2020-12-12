import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateQuestions1607345763604
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questions',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'type',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'html',
            type: 'string',
          },
          {
            name: 'answer',
            type: 'string',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('questions');
  }
}
