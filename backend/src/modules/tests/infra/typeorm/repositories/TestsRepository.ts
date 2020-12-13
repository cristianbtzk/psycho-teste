import ICreateTestsDTO from '@modules/tests/dtos/ICreateTestDTO';
import { getRepository, Repository } from 'typeorm';
import Test from '../entities/Test';

class TestsRepository {
  private ormRepository: Repository<Test>;

  constructor() {
    this.ormRepository = getRepository(Test);
  }

  public async create({
    email,
    name,
    answers,
  }: ICreateTestsDTO): Promise<Test> {
    const test = this.ormRepository.create({
      email,
      name,
      answers,
    });

    await this.ormRepository.save(test);

    return test;
  }

  public async findAll(): Promise<Test[]> {
    const questions = await this.ormRepository.find();

    return questions;
  }
}

export default TestsRepository;
