export interface contactPayload {
  fullName: string;
  email: string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
  answerFour: string;
  answerFive: string;
}

export interface contactResponse {
  id?: string;
  message: string;
  status?: number;
  error?: string;
}
