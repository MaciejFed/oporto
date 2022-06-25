import chalk from 'chalk';
import { clear } from 'console';
import EventEmitter from 'events';
import figlet from 'figlet';
import { clearLine } from 'readline';
import { terminal } from 'terminal-kit';
import { eventEmitter, EventProcessor } from '../event/eventProcessor';
import { APP_STARTED, EXERCISE_DESCRIPTION_PRINTED, EXERCISE_BODY_PRINTED, EXERCISE_BODY_PRINTED_BODY, KEY_PRESSED, EXERCISE_DONE } from './../event/events';

export type Point = {
    x: number, 
    y: number
}

export class Terminakl {
    
    eventProcessor: EventProcessor;
    cursor: Point;
    exercise = '';
    exerciseLoop: any

    constructor(eventProcessor: EventProcessor) {
        this.eventProcessor = eventProcessor;
        this.registerListeners();
        this.cursor = {
            x: 0,
            y: 0
        };
        clear();
    }

    registerListeners() {
        this.eventProcessor.on(APP_STARTED, () => {
            console.log(
                chalk.red(
                    figlet.textSync('oPorto', { horizontalLayout: 'full' })
                )
            );
        });
        this.eventProcessor.on(EXERCISE_DESCRIPTION_PRINTED, (description: string) => {
            terminal.moveTo(1, 10, description);
        });
        this.eventProcessor.on(EXERCISE_BODY_PRINTED, (body: EXERCISE_BODY_PRINTED_BODY) => {
            this.cursor = body.cursor;
            this.exercise = body.exercise;
            terminal.moveTo(1, 11, this.exercise);
        })
        this.eventProcessor.on(KEY_PRESSED, (key) => {
            if (key === 'backspace') {
                this.exercise = this.exercise.substring(0, Math.max(0, this.exercise.length - 1));
                clearLine(process.stdout, 0);
            } else {
                this.exercise = this.exercise + key;
            }
            terminal.moveTo(1, 11, this.exercise);
        });
        this.eventProcessor.on(EXERCISE_DONE, (correctAnswer) => {
            terminal.moveTo(1, 12, correctAnswer? 'Correct!' : 'Wrong!');
        })
    }
}