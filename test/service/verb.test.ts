/* eslint-disable jest/expect-expect */
import { getCorrectRegularConjugation, Person } from '../../src/service/verb';
import { RegularVerb } from '../../src/repository/schema';


describe('Verbs', () => {

    it('-AR Verb Conjugation', async () => {
        testConjugation('Falar', Person.Eu, 'Falo');
        testConjugation('Falar', Person.Tu, 'Fales');
        testConjugation('Falar', Person.ElaEleVocé, 'Fala');
        testConjugation('Falar', Person.Nós, 'Falamos');
        testConjugation('Falar', Person.ElesElasVosēs, 'Falam');
    });

    it('-Er Verb Conjugation', async () => {
        testConjugation('Comer', Person.Eu, 'Como');
        testConjugation('Comer', Person.Tu, 'Comes');
        testConjugation('Comer', Person.ElaEleVocé, 'Come');
        testConjugation('Comer', Person.Nós, 'Comemos');
        testConjugation('Comer', Person.ElesElasVosēs, 'Comem');
    });

    it('-Ir Verb Conjugation', async () => {
        testConjugation('Abrir', Person.Eu, 'Abro');
        testConjugation('Abrir', Person.Tu, 'Abres');
        testConjugation('Abrir', Person.ElaEleVocé, 'Abre');
        testConjugation('Abrir', Person.Nós, 'Abrimos');
        testConjugation('Abrir', Person.ElesElasVosēs, 'Abrem');
        testConjugation('Abrir', Person.ElesElasVosēs, 'Abrem');
    });

    it('Incorrect Regular Verb', async () => {
        const incorrectVerb = 'incorrectVerb';
        const incorrectVerbConjugation = () => {
            getCorrectRegularConjugation(incorrectVerb, Person.Eu);
        };
        expect(incorrectVerbConjugation).toThrowError(Error);
        expect(incorrectVerbConjugation).toThrowError(`Incorrect Regular Verb: "${incorrectVerb}"`);
    });


    function testConjugation(verb: RegularVerb, person: Person, expectedConjugation: string) {
        expect(getCorrectRegularConjugation(verb, person)).toBe(expectedConjugation)
    }
});

