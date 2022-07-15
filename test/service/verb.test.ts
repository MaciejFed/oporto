/* eslint-disable jest/expect-expect */
import { getCorrectRegularConjugation, Person } from '../../src/service/verb';
import { RegularVerb } from '../../src/repository/exercisesRepository';


describe('Verbs', () => {

    it('-AR Verb Conjugation', async () => {
        testConjugation('Falar', Person.Eu, 'Falo');
        testConjugation('Falar', Person.Tu, 'Falas');
        testConjugation('Falar', Person.ElaEleVocê, 'Fala');
        testConjugation('Falar', Person.Nós, 'Falamos');
        testConjugation('Falar', Person.ElesElasVosēs, 'Falam');
    });

    it('-Er Verb Conjugation', async () => {
        testConjugation('Comer', Person.Eu, 'Como');
        testConjugation('Comer', Person.Tu, 'Comes');
        testConjugation('Comer', Person.ElaEleVocê, 'Come');
        testConjugation('Comer', Person.Nós, 'Comemos');
        testConjugation('Comer', Person.ElesElasVosēs, 'Comem');
    });

    it('-Ir Verb Conjugation', async () => {
        testConjugation('Abrir', Person.Eu, 'Abro');
        testConjugation('Abrir', Person.Tu, 'Abres');
        testConjugation('Abrir', Person.ElaEleVocê, 'Abre');
        testConjugation('Abrir', Person.Nós, 'Abrimos');
        testConjugation('Abrir', Person.ElesElasVosēs, 'Abrem');
        testConjugation('Abrir', Person.ElesElasVosēs, 'Abrem');
    });

    it('Incorrect Regular Verb', async () => {
        const incorrectVerb = 'incorrectVerb';
        const incorrectVerbConjugation = () => {
            getCorrectRegularConjugation({ portuguese: incorrectVerb, english: '' }, Person.Eu);
        };
        expect(incorrectVerbConjugation).toThrowError(Error);
        expect(incorrectVerbConjugation).toThrowError(`Incorrect Regular Verb: "${incorrectVerb}"`);
    });


    function testConjugation(verb: string, person: Person, expectedConjugation: string) {
        expect(getCorrectRegularConjugation({ portuguese: verb, english: '' }, person)).toBe(expectedConjugation)
    }
});

