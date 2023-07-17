import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

export class GlobalEventEmitterService {
  private static emitters: {
    [eventName: string]: EventEmitter<unknown>;
  } = {};

  static get(eventName: string): EventEmitter<unknown> {
    if (!this.emitters[eventName]) this.emitters[eventName] = new EventEmitter<unknown>();
    return this.emitters[eventName];
  }

  static emit(eventName: string, value: unknown): void {
    return this.get(eventName).emit(value);
  }

  static on(eventName: string, subscribe: (data: never) => unknown): Subscription {
    return this.get(eventName).subscribe(subscribe);
  }

  static dispose(eventName: string) {
    if (this.emitters[eventName]) {
      this.emitters[eventName].unsubscribe();
      delete this.emitters[eventName];
    }
  }
}
