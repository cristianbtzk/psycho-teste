import Test from '../infra/typeorm/entities/Test';
import TestsRepository from '../infra/typeorm/repositories/TestsRepository';

interface IAnswer {
  question: number;
  answer: string;
}

interface IRequest {
  name: string;
  email: string;
  answers: IAnswer[];
}

interface IAnswerCorrected {
  question: number;
  answer: string;
  is_correct: boolean;
  time: string;
}

class CreateQuestionService {
  constructor(private testsRepository = new TestsRepository()) {}

  public async execute({ name, email, answers }: IRequest): Promise<Test> {
    const correctedAnswers = answers.map(answer => {
      let is_correct = false;
      switch (answer.question) {
        case 1: {
          if (answer.answer === 'a') {
            is_correct = true;
          }
          break;
        }
        case 2: {
          if (answer.answer === 'b') {
            is_correct = true;
          }
          break;
        }
        case 3: {
          if (answer.answer === 'c') {
            is_correct = true;
          }
          break;
        }

        default: {
          if (answer.answer === 'd') {
            is_correct = true;
          }
        }
      }

      const answerCorrected: IAnswerCorrected = {
        ...answer,
        is_correct,
        time: 'tempo',
      };

      return answerCorrected;
    });

    const test = await this.testsRepository.create({
      name,
      email,
      answers: correctedAnswers,
    });

    return test;
  }
}

export default CreateQuestionService;
