import { Injectable }				from '@angular/core';
import { Headers, Http, Response }	from '@angular/http';

import '../../rxjs-operators';

import { Note }		from './note';

@Injectable()
export class NoteService {
	
	private notesUrl = 'app/notes';	// URL to web api
	
	constructor(public http: Http) { }

	getAll(): Promise<Note[]> {
		return this.http
			.get(this.notesUrl)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	
	get(id: number) {
		return this.getAll()
			.then(notes => notes.find(note => note.id === id));
	}

	save(note: Note): Promise<Note> {
		var promise = null;
		if (note.id) {
			promise = this.put(note);
		}
		else {
			promise = this.post(note);
		}
		return promise
				.then(note => { 
					console.info(`saved note ${note.title}`);
					return note;
				});
	}

	private post(note: Note): Promise<Note> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		return this.http
			.post(this.notesUrl, JSON.stringify(note), { headers: headers })
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private put(note: Note): Promise<Note> {
		let headers = new Headers({
			'Content-Type': 'application/json'
		});

		let url = `${this.notesUrl}/${note.id}`;
		
		return this.http
			.put(url, JSON.stringify(note), { headers: headers })
			.toPromise()
			.then(() => note)
			.catch(this.handleError);
	}

	private extractData(response: Response) {
		let json = response.json();
		return json.data || { };
	}

	private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}