import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
class Question {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  type: string;

  @Column()
  html: string;

  @Column()
  answer: string;
}

export default Question;
