import { terminal } from 'terminal-kit';
import { getCorrectConjugation, getRandomPerson, Person } from '../service/verb';
import { sleep } from '../utils/utils';

export function runVerbTask(verb: string): Promise<boolean> {
    const person: Person = getRandomPerson();
    let animation = false;
    let answer = ''
    return new Promise<boolean>((resolve) => {
        const animationInterval = setInterval(() => {
            animation = !animation
        }, 500)
        const input = setInterval(() => {
            terminal.moveTo(1, 8 , verb);
            terminal.moveTo(1, 9 , '%s %s' , person, animation ? answer + '_' : answer + ' ' );
        }, 50);
        terminal.hideCursor();

        process.stdin.on('keypress', (str, key) => {
            if (str === '\r') {
                process.stdin.removeAllListeners('keypress');
                clearInterval(input);
                clearInterval(animationInterval);
                const result = answer === getCorrectConjugation(verb, person);
                terminal.moveTo(1, 10 , '%s' , result ? 'Correct!\n' : 'Wrong!\n');
                sleep(1000).then(_ => resolve(result));
            } else {
                answer += str;
            }
        });

    })
}
