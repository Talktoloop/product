import { DifficultyEntity } from '../../lexicon/entity/difficulty.entity';
declare const getRandomDifficulty: (difficulties: DifficultyEntity[], excluded?: number[]) => DifficultyEntity;
export default getRandomDifficulty;
