import Test from '../infra/typeorm/entities/Test';
import TestsRepository from '../infra/typeorm/repositories/TestsRepository';

interface IAnswer {
  number: number;
  answer: string;
}

interface IRequest {
  name: string;
  email: string;
  answers: IAnswer[];
}

interface IAnswerCorrected {
  number: number;
  answer: string;
  is_correct: boolean;
  time: string;
}

class CreateQuestionService {
  constructor(private testsRepository = new TestsRepository()) {}

  public async execute({ name, email, answers }: IRequest): Promise<Test> {
    let score = 0;

    const correctedAnswers = answers.map(answer => {
      let is_correct = false;
      switch (answer.number) {
        case 1: {
          if (answer.answer === 'a') {
            is_correct = true;
            score += 250;
          }
          break;
        }
        case 2: {
          if (answer.answer === 'e') {
            is_correct = true;
            score += 250;
          }
          break;
        }
        case 3: {
          if (answer.answer === 'a') {
            is_correct = true;
            score += 250;
          }
          break;
        }

        default: {
          if (answer.answer === 'c') {
            is_correct = true;
            score += 250;
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
      score,
      answers: correctedAnswers,
    });

    return test;
  }
}

export default CreateQuestionService;
