import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { hosts } from "./utils/data";

export class QuizClient {
  // Private axios instance for internal requests
  private axios: AxiosInstance;
  private defaultConfig: AxiosRequestConfig;

  /**
   * @param  {string} token Your API token that you can retrieve from your account page (https://quizgen.ai/account/keys)
   */
  constructor(token: string) {
    this.axios = Axios;
    this.defaultConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  /**
   * @param  {string} text The source text to generate a quiz from
   * @param  {number} numQuestions The number of questions to retrieve from generated (If more than limit was specified, top N quesitons are returned)
   */
  async generateQuiz(text: string, numQuestions: number) {
    const r = await this.axios.post(
      `${hosts.quizgen}/api/generate-quiz`,
      { text, numQuestions },
      {
        ...this.defaultConfig,
      }
    );

    return r.data;
  }
  /**
   * @param  {string} quizId Quiz ID you received on generation
   */
  async getQuiz(quizId: string) {
    const r = await this.axios.get(`${hosts.quizgen}/api/quiz`, {
      ...this.defaultConfig,
      params: { quiz_id: quizId },
    });

    return r.data;
  }
}
