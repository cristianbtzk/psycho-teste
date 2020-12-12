import Question from '../infra/typeorm/entities/Question';
import QuestionsRepository from '../infra/typeorm/repositories/QuestionsRepository';

interface IRequest {
  html: string;
  type: string;
  answer: string;
}

class CreateQuestionService {
  constructor(private questionsRepository = new QuestionsRepository()) {}

  public async execute({ html, type, answer }: IRequest): Promise<Question> {
    const question = await this.questionsRepository.create({
      html,
      type,
      answer,
    });

    return question;
  }
}

export default CreateQuestionService;
