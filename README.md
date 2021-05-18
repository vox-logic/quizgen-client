# Getting Started

_Visit the documentation site for the nitty gritty details_

This library allows easy interaction with the Quiz Generation API. You'll need an API token which you can obtain from your [account](https://quizgen.io/account). You can pass the `dev` parameter in all of your requests (more on this) to test your integrations without getting charged. This won't generate any quizzes and will always give you the same quiz.

You should also configure your webhook URL to a publicly available URL on your account page. This is so we can send you your quizzes after completion. Quiz generation can take any amount of time from 1 minute to 10s of minutes depending on the size of your input. 

<u>**TypeScript Support**</u>

We provide type declarations for almost all methods and parameters available in the library which makes your life a lot easier when working with the client object. It's not required but we highly recommend it.

## Initialize

Install the library with either npm or yarn.

```bash
# NPM
npm i --save @vox-logic/quizgen
# Yarn
yarn add @vox-logic/quizgen
```

Import it and initialize the client with your token.

```javascript
const QuizClient = require('@vox-logic/quizgen').Client;
// Or if you are using ES6 import/exports
import { QuizClient } from '@vox-logic/quizgen'

const quizzes = new QuizClient('API_TOKEN')
```

## Usage

The client was created with asynchronicity in mind so you can use async/await with almost all methods on the client.

### Quiz Generation

You can queue a quiz generation request with the client.

```javascript
const quizId = await quizzes.createQuiz(text, numQuestions);
```

The `quizId` generated here is an identifier for your quiz. But the quiz **does not exist yet**, you will receive a request on your webhook URL to handle the completion of the quiz generation.

### Retreiving Quizzes

If you need the original quiz again after you already handled the completion request, you can retrieve it with the `quizId`. 

```javascript
const quiz = await quizzes.getQuiz(quizId)
```

