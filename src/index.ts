import Axios, { AxiosInstance } from "axios";
import { hosts } from "./utils/data";

export class QuizClient {
  // Private axios instance for internal requests
  private axios: AxiosInstance;
  private token: string;

  /**
   * @param  {string} token Your API token that you can retrieve from your account page (https://quizgen.ai/account/keys)
   */
  constructor(token: string) {
    this.token = token;
    this.axios = Axios;
  }
  /**
   * @param  {string} text The source text to generate a quiz from
   * @param  {number} number The number of questions to retrieve from generated (If more than limit was specified, top N quesitons are returned)
   */
  async getQuiz(text: string, numQuestions: number) {
    const r = await this.axios.post(
      `${hosts.quizgen}/api/generate-quiz`,
      { text },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );

    console.log({ data: r.data });
  }
}
