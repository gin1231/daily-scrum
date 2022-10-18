import { QuestionRepository } from './interfaces/question-repository';

export class GenerateAnswers {
    private questionRepository: QuestionRepository;
    constructor(questionRepository: QuestionRepository) {
        this.questionRepository = questionRepository;
    }
    execute(teamId: string) {
        this.questionRepository.findAllByTeam(teamId)
    }
}
