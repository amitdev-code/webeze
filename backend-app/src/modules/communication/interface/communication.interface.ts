export interface ICommunication {
  send(to: string, subject: string, content: string): Promise<boolean>;
}
