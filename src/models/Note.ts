let _nextId = 1;

class Note {
  id: number;
  msg: string;
  compleated: boolean;
  constructor(message = '', compleated = false) {
    this.id = -1;
    this.msg = message;
    this.compleated = compleated;
  }
  assignAnId() {
    this.id = _nextId;
    Note.stepUpId();
  }
  copyFrom(src: Note) {
    this.id = src.id
    this.msg = src.msg
    this.compleated = src.compleated
  }
  isCompleated(): boolean {
    return this.compleated;
  }
  toggleCompleted(): void {
    this.compleated = !this.compleated;
  }
  static setNextId(id: number) {
    _nextId = id
  }
  static stepUpId() {
    _nextId += 1;
  }
}
export default Note; 