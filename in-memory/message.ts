export interface Message {
  id: string;
  name: string;
  payload: string;
}

export type CreateMessageInput = {
  id?: string;
  name: string;
  payload: string;
};
export function createMessage(input: CreateMessageInput): Message {
  return {
    id: input.id ?? crypto.randomUUID(),
    name: input.name,
    payload: input.payload,
  };
}
