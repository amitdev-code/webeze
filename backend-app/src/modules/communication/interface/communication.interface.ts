export interface ICommunication {
  send(to: string, content: string): Promise<boolean>;
}
