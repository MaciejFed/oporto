import { EventProcessor } from '../../event/event-processor';
import { TerminalRenderer } from './terminal-renderer';

export class TerminalListeners {
  private eventProcessor: EventProcessor;
  private terminalRenderer: TerminalRenderer;

  constructor(eventProcessor: EventProcessor, terminalRenderer: TerminalRenderer) {
    this.eventProcessor = eventProcessor;
    this.terminalRenderer = terminalRenderer;
  }

  registerListeners() {
    this.terminalRenderer.registerOnAppStartedEventListener(this.eventProcessor);
    this.terminalRenderer.registerOnDescriptionPrintedEventListener(this.eventProcessor);
    this.terminalRenderer.registerOnBodyPrintedEventListener(this.eventProcessor);
    this.terminalRenderer.registerOnKeyPressedEventListener(this.eventProcessor);
    this.terminalRenderer.registerOnExerciseStartedEventListener(this.eventProcessor);
    this.terminalRenderer.registerOnAnswerCheckedEventListener(this.eventProcessor);
  }
}

export default TerminalListeners;
