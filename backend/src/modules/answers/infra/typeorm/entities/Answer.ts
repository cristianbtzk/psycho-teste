import Test from '@modules/tests/infra/typeorm/entities/Test';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('answers')
class Answer {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  number: number;

  @Column()
  answer: string;

  @Column('boolean')
  is_correct: boolean;

  @Column()
  time: string;

  @Column('int')
  test_id: number;

  @ManyToOne(() => Test)
  @JoinColumn({ name: 'test_id' })
  test: Test;
}

export default Answer;
