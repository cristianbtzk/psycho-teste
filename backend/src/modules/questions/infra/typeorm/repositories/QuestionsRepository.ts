import ICreateQuestionDTO from '@modules/questions/dtos/ICreateQuestionDTO';
import { getRepository, Repository } from 'typeorm';
import Question from '../entities/Question';

class QuestionsRepository {
  private ormRepository: Repository<Question>;

  constructor() {
    this.ormRepository = getRepository(Question);
  }

  public async create(data: ICreateQuestionDTO): Promise<Question> {
    const question = await this.ormRepository.create(data);

    await this.ormRepository.save(question);

    return question;
  }

  public async findAll(): Promise<Question[]> {
    const questions = await this.ormRepository.find();

    return questions;
  }
}

export default QuestionsRepository;
