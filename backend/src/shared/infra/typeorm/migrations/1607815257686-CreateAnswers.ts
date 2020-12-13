import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAnswers1607815257686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'answers',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'test_id',
            type: 'integer',
          },
          {
            name: 'question',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'answer',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'is_correct',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'time',
            type: 'string',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            name: 'AnswerTest',
            referencedTableName: 'tests',
            referencedColumnNames: ['id'],
            columnNames: ['test_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('answers');
  }
}
