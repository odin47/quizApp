import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QuestionsService {

  private url = 'https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json';
  constructor(private http: HttpClient) { }

  getQuestions() {
    console.log('Services...........');
    return this.http.get(this.url);
  }

}
