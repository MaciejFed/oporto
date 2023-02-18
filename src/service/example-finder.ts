import { readAll, Verb } from '../repository/exercises-repository';
import { VerbExerciseGenerator } from '../exercise/generator';
import { VerbExercise } from '../exercise/verb-exercise';
import { getRandomElement } from '../common/common';

export const findAllSentenceExamplesForVerb = (verb: Verb) => {
    // eslint-disable-next-line new-cap
    const allVerbConjugations = VerbExerciseGenerator()
        .filter((verbExercise) => (verbExercise as VerbExercise).verb.infinitive === verb.infinitive)
        .map(verbExercise => verbExercise.getCorrectAnswer())
        .concat(verb.infinitive);

    const examples = readAll()
        .sentences
        .filter(
            (sentence) => allVerbConjugations.some(
                (v) => sentence.portuguese.toLowerCase().includes(v.toLowerCase())
            )
        )

    if (examples.length > 0) {
        return getRandomElement(examples);
    }
    return undefined;
}
