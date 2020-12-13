import { getRepository, Repository } from 'typeorm';
import Answer from '../entities/Answer';

class TestsRepository {
  private ormRepository: Repository<Answer>;

  constructor() {
    this.ormRepository = getRepository(Answer);
  }

  public async find(test_id: number): Promise<Answer[]> {
    const answers = await this.ormRepository.find({
      where: {
        test_id,
      },
    });

    return answers;
  }
}

export default TestsRepository;
