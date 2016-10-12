import { TestBed, inject }	from '@angular/core/testing';
import { MockBackend }      from '@angular/http/testing';
import { Injector }         from '@angular/core';
import { BaseRequestOptions, Headers, Http, Response, ResponseOptions } from '@angular/http';

import { Observable }   from 'rxjs/Observable';

import { NoteService }	from './note.service';
import { Note }         from './note';

let newNote = { id: 0, title: 'new note', type: 'test', content: 'this is a new test note' }
let testNote = { id: 1, title: 'note test', type: 'test', content: 'this is a test note' };
let testNote2 = { id: 2, title: 'note test 2', type: 'test', content: 'this is another test note' };

describe('NoteService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MockBackend,
                BaseRequestOptions,
                { provide: Http, useFactory: (backend, options) => {
                    return new Http(backend, options);
                }, deps: [MockBackend, BaseRequestOptions] },
                NoteService
            ]
        });
    });

    describe('should make proper request', () => {
        it('get all notes',
          inject([NoteService, Http], (sut: NoteService, http: Http) => {
            let spyGet = spyOn(http, 'get').and.returnValue(new Observable<Response>());
            
            sut.getAll();
            expect(spyGet).toHaveBeenCalledWith('app/notes');
        }));

        it('post new note',
          inject([NoteService, Http], (sut: NoteService, http: Http) => {
            let spyPost = spyOn(http, 'post').and.returnValue(new Observable<Response>());
            
            sut.save(newNote)
            expect(spyPost).toHaveBeenCalled();
        }));

        it('put existing note',
          inject([NoteService, Http], (sut: NoteService, http: Http) => {
            let spyPut = spyOn(http, 'put').and.returnValue(new Observable<Response>());

            sut.save(testNote);
            expect(spyPut).toHaveBeenCalled();
        }));
    });

    describe('should get expected result', () => {
        beforeEach(inject([MockBackend], (backend: MockBackend) => {
            backend.connections.subscribe(c => {
                c.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify({ data: [testNote, testNote2] }),
                    status: 200
                })));
            });
        }));
    
        it('get all notes',
          inject([NoteService], (sut: NoteService) => {
            let notes;
            sut.getAll().subscribe(res => {
                 notes = res;
            });
            expect(notes.length).toBe(2, 'not the expected array length');
            expect(notes[0]).toEqual(testNote, 'first item is not expected note');
        }));

        it('get note 1',
          inject([NoteService], (sut: NoteService) => {
            let note;
            sut.get(1).subscribe(res => {
                note = res;
            });

            expect(note).toEqual(testNote);
        }));
    });
});