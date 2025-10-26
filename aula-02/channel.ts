import { type Message } from "./message.ts";
import EventEmitter from "node:events";

export interface Channel {
    name: string;
    send(message: Message): Promise<void>;
    subscribe(handler: (message: Message) => void): void;
}

export function createChannel(name: string): Channel {
    const eventEmitter = new EventEmitter()
    return {
        name,
        async send(message: Message) {
            console.log(`Enviando mensagem para o canal ${name}:`, message);
            eventEmitter.emit(name, message);
        },
        subscribe(handler: (message: Message) => void) {
            eventEmitter.on(name, handler);
        }
    };
}
