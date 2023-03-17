import { EventProcessor } from '../../event/event-processor';
import { TerminalListeners } from './terminal-listeners';
import { TerminalRenderer } from './terminal-renderer';

export class Terminal {
  private eventProcessor: EventProcessor;
  private terminalListeners: TerminalListeners;
  private terminalRenderer: TerminalRenderer;

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.terminalRenderer = new TerminalRenderer();
    this.terminalListeners = new TerminalListeners(this.eventProcessor, this.terminalRenderer);
    this.terminalListeners.registerListeners();
  }
}

export default Terminal;
