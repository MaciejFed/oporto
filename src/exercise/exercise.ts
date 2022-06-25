import EventEmitter from 'events';
import { ANSWER_SUBMITED, APP_STARTED, EXERCISE_BODY_PRINTED, EXERCISE_DESCRIPTION_PRINTED, EXERCISE_DONE, KEY_PRESSED } from '../event/events';
import { getRandomVerb, Person } from '../service/verb';
import { getRandomPerson, getCorrectConjugation } from '../service/verb';
import { AppEventListener } from '../event/eventListener';
import { EventProcessor } from '../event/eventProcessor';


export class Exercise implements AppEventListener {
    
    eventProcessor: EventProcessor;
    person?: Person;
    verb: string;
    answer: string;

    constructor(eventProcessor: EventProcessor) {
        this.eventProcessor = eventProcessor;
        this.registerListeners();
        this.verb = '';
        this.answer = '';
    }

    registerListeners() {
        this.registerAppStartedEventListener();
        this.registerKeyPressedEventListener();
        this.registerAnswerSubmittedEventListener();
    }

    registerAppStartedEventListener() {
        this.eventProcessor.on(APP_STARTED, () => {
            this.verb = getRandomVerb();
            this.person = getRandomPerson();
            this.eventProcessor.emit(EXERCISE_DESCRIPTION_PRINTED, `Infinitive: ${this.verb}`);
            this.eventProcessor.emit(EXERCISE_BODY_PRINTED, {
                exercise: `${this.person}: `,
                cursor: {
                    x: this.person.length,
                    y: 0
                }
            });
        });
    }


    registerKeyPressedEventListener() {
        this.eventProcessor.on(KEY_PRESSED, (key) => {
            if (key == 'backspace') {
                this.answer = this.answer.substring(0, Math.max(0, this.answer.length - 1));
            } else {
                this.answer += key;
            }
        });
    }

    registerAnswerSubmittedEventListener() {
        this.eventProcessor.on(ANSWER_SUBMITED, () => {
            const correctAnswer = getCorrectConjugation(this.verb, this.person || Person.Eu);
            this.eventProcessor.emit(EXERCISE_DONE, correctAnswer.toLowerCase() === this.answer.toLowerCase());
        });
    }
}
