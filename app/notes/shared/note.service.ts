import { Injectable }				from '@angular/core';
import { Headers, Http, Response }	from '@angular/http';

import { Observable }				from 'rxjs/Observable';
import '../../rxjs-operators';

import { Note }		from './note';

@Injectable()
export class NoteService {

	private notesUrl = 'app/notes';	// URL to web api
	
	constructor(public http: Http) { }

	getAll(): Observable<Note[]> {
		return this.http
			.get(this.notesUrl)
			.map(this.extractData);
	}
	
	get(id: number) : Observable<Note> {
		return this.getAll()
			.map(notes => notes
				? notes.find(note => note.id === id)
				: Observable.of<Note[]>([])
			);
	}

	save(note: Note): Observable<Note> {
		var observable: Observable<Note>;
		if (note.id) {
			observable = this.put(note);
		}
		else {
			observable = this.post(note);
		}
		return observable
				.do(note => console.info(`saved note ${note.title}`), this.handleError);
	}

	private post(note: Note): Observable<Note> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http
			.post(this.notesUrl, JSON.stringify(note), { headers: headers })
			.map(this.extractData);
	}

	private put(note: Note): Observable<Note> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let url = `${this.notesUrl}/${note.id}`;
		
		return this.http
			.put(url, JSON.stringify(note), { headers: headers })
			.map(() => note)
			.do(this.rekeyContent);
	}

	private extractData(response: Response) {
		let json = response.json();
		return json.data || { };
	}

	private rekeyContent(note: Note) {
		// only doing this as a lazy way of mocking repository behavior
		if (note.type === 'list') {
			note.content.forEach((item, i) => {
				item.id = i + 1;
			});
		}

		return note;
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
	}

	
}