import TestsRepository from '../infra/typeorm/repositories/TestsRepository';

interface IDetailedTest {
  id: number;
  name: string;
  email: string;
  score: number;
  time: string;
}

interface IReponse {
  tests: IDetailedTest[];
  count: number;
}

class LisTestsService {
  constructor(private testsRepository = new TestsRepository()) {}

  public async execute(page: number): Promise<IReponse> {
    const { tests, count } = await this.testsRepository.findAll(page);

    const detailedTests: IDetailedTest[] = tests.map(test => {
      const score = test.answers.reduce((accumulator, element) => {
        if (element.is_correct === true) {
          accumulator += 250; // eslint-disable-line no-param-reassign
        }
        return accumulator;
      }, 0);

      const { id, name, email } = test;

      return { id, name, email, score, time: 'tempo prova' };
    });

    return { tests: detailedTests, count };
  }
}

export default LisTestsService;
