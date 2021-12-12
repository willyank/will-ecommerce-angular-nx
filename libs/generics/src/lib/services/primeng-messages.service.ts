import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class PrimengMessageService {
  private message: Message = { key: 'top-center', life: 5000 };

  constructor(protected messageService: MessageService) {}

  add(message: Message) {
    this.messageService.add(message);
  }

  success(message: string): void {
    this.add({
      ...this.message,
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  warning(message: string): void {
    this.add({
      ...this.message,
      severity: 'warning',
      summary: 'Warning',
      detail: message,
    });
  }

  error(message: string, milliSeconds: number | null = null): void {
    this.add({
      ...this.message,
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: milliSeconds ?? this.message.life,
    });
  }
}
