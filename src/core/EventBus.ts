export class EventBus {
  listeners: Record<string, Set<(...args: unknown[]) => void>>;
  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (...args: unknown[]) => void) {
    if (!(event in this.listeners)) {
      this.listeners[event] = new Set();
    }
    this.listeners[event].add(callback);
  }

  off(event: string, callback: (...args: unknown[]) => void) {
    if (!(event in this.listeners)) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event].delete(callback);
  }

  emit(event: string, ...args: unknown[]) {
    if (!(event in this.listeners)) {
      return;
    }
    this.listeners[event].forEach((cb) => {
      cb(...args);
    });
  }
}
