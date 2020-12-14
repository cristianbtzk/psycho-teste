interface IAnswer {
  number: number;
  answer: string;
  is_correct: boolean;
  time: string;
}

export default interface ICreateTestDTO {
  name: string;
  email: string;
  score: number;

  answers: IAnswer[];
}
