import Note from '../models/Note'

export const notePrefix = 'note-'

export const sortAscId = (a: Note, b: Note): number => a.id < b.id ? -1 : a.id > b.id ? 1 : 0;

export default class NoteStoreService {
  lastNoteId = 1

  static cleanup(note: Note) {
    const copy = new Note();
    copy.copyFrom(note)
    return copy
  }

  static makeKey(note: Note, id?: number) {
    return `${notePrefix}${id || note.id}`
  }

  addNote(note: Note) {
    localStorage.setItem(NoteStoreService.makeKey(note), JSON.stringify(note))
  }

  store(note: Note) {
    if (note.id === -1 || note.id === undefined) throw('missing note id');
    localStorage.setItem(NoteStoreService.makeKey(note), JSON.stringify(note))
  }
  
  removeNote(noteId: number) {
    localStorage.removeItem(`${notePrefix}${noteId}`)
  }

  findLastId() {
    for (const key in localStorage) {
      const keyParts = key.split(notePrefix)
      // warning: the only condition for making a 'note' out of a localStorage item is that the key contains 
      // the string 'note-' in it's key.
      if (keyParts[1]) {
        const keyIdNumber = Number(keyParts[1])
        if (keyIdNumber > this.lastNoteId) this.lastNoteId = keyIdNumber
      }
    }
    return this.lastNoteId
  }

  getNotes(): any[] {
    const notes = []
    for (const key in localStorage) {
      const keyParts = key.split(notePrefix)
      if (keyParts[1]) notes.push(JSON.parse(localStorage[key]))
    }
    return notes
  }
}
