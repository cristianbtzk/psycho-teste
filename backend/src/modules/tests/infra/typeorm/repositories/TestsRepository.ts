import ICreateTestsDTO from '@modules/tests/dtos/ICreateTestDTO';
import { getRepository, Repository } from 'typeorm';
import Test from '../entities/Test';

interface IFindReponse {
  tests: Test[];
  count: number;
}

class TestsRepository {
  private ormRepository: Repository<Test>;

  constructor() {
    this.ormRepository = getRepository(Test);
  }

  public async create({
    email,
    name,
    score,
    answers,
  }: ICreateTestsDTO): Promise<Test> {
    const test = this.ormRepository.create({
      email,
      name,
      answers,
      score,
    });

    await this.ormRepository.save(test);

    return test;
  }

  public async findAll(page: number): Promise<IFindReponse> {
    const skipQuantity = 5 * (page - 1);

    const [tests, count] = await this.ormRepository.findAndCount({
      skip: skipQuantity,
      take: 5,
      select: ['id', 'name', 'email', 'score'],
      order: {
        score: 'DESC',
      },
    });

    return { tests, count };
  }
}

export default TestsRepository;
