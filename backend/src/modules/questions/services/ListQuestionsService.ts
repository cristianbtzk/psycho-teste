import Question from '../infra/typeorm/entities/Question';
import QuestionsRepository from '../infra/typeorm/repositories/QuestionsRepository';

class ListQuestionsService {
  constructor(private questionsRepository = new QuestionsRepository()) {}

  public async execute(): Promise<Question[]> {
    const questions = await this.questionsRepository.findAll();

    return questions;
  }
}

export default ListQuestionsService;
