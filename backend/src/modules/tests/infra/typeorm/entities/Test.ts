import Answer from '@modules/answers/infra/typeorm/entities/Answer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tests')
class Test {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  score: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Answer, answers => answers.test, {
    cascade: true,
  })
  answers: Answer[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Test;
