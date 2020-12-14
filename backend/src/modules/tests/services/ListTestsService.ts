import Test from '../infra/typeorm/entities/Test';
import TestsRepository from '../infra/typeorm/repositories/TestsRepository';

interface IReponse {
  tests: Test[];
  count: number;
}

class LisTestsService {
  constructor(private testsRepository = new TestsRepository()) {}

  public async execute(page: number): Promise<IReponse> {
    const { tests, count } = await this.testsRepository.findAll(page);

    return { tests, count };
  }
}

export default LisTestsService;
