import Data from './Data';

class Note extends Data {
  msg: string;
  compleated: boolean;
  constructor(message: string, compleated = false) {
    super();
    this.msg = message;
    this.compleated = compleated;
  }
  isCompleated(): boolean {
    return this.compleated;
  }
  toggleCompleted(): void {
    this.compleated = !this.compleated;
  }
}
export default Note; 