import Answer from '../infra/typeorm/entities/Answer';
import AnswersRepository from '../infra/typeorm/repositories/AnswersRepository';

class LisAnswersService {
  constructor(private answersRepository = new AnswersRepository()) {}

  public async execute(user_id: number): Promise<Answer[]> {
    const answers = await this.answersRepository.find(user_id);

    return answers;
  }
}

export default LisAnswersService;
