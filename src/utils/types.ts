export enum SourceType {
  File,
  HostedDoc,
  YouTube,
}

export type ProtoQuiz = {
  quiz_id: string;
  questions: [
    {
      question: string;
      answers: [string];
      correct_answer: number;
    }
  ];
  source_id: string;
  source_type: SourceType;
  // Optional url if the source for this quiz was a video or google hosted document
  source_url?: string;
};

export type Quiz = {
  ok: boolean;
  quiz: {
    mcqs: [
      {
        question_id: string;
        question: string;
        answers: [string];
        correct: 2;
        context: string;
        model: string;
        option_eval_scores: [any];
        eval_score: number;
      }
    ];
    name: string;
    category: string;
    source: string;
  };
};
