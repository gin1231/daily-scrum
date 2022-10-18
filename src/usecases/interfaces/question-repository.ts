import Team from '../../entities/team';

export interface QuestionRepository {
    findAllByTeam(teamId: string): Team[];
}
