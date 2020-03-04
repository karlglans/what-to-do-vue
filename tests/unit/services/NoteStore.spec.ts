import NoteStoreService, {notePrefix} from '@/services/NoteStoreService'
import Note from '@/models/Note'

describe('LocalStorageService', () => {
  describe('makeKey', () => {
    const service = new NoteStoreService()
    const someNote = new Note('ignore')
    it('uses param 1 when param 2 is missing', () => {
      someNote.id = 2
      const key = NoteStoreService.makeKey(someNote)
      expect(key).toMatch(`${notePrefix}${someNote.id}`)
    })
    it('uses param 2 when present', () => {
      someNote.id = 2
      const someId = 3
      const key = NoteStoreService.makeKey(someNote, someId)
      expect(key).toMatch(`${notePrefix}${someId}`)
    })
  })
  describe('cleanup', () => {
    const someNote = new Note('ignore'), someId = 111
    someNote.id = someId
    Object.assign(someNote, {someAddedProperties: 5});
    const cleanedNote = NoteStoreService.cleanup(someNote)
    expect(JSON.stringify(cleanedNote))
      .toMatch('{\"id\":111,\"msg\":\"ignore\",\"compleated\":false}')
  })
})