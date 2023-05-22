import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // Backend server adress 

  matchURL: string = "http://localhost:3000/matches";

  // httpClient : un livreur

  constructor(private httpClient: HttpClient) { }

  // get : c'est une function Http prédéfinie

  // reponse : array of objects
  getAllMatches() {
    return this.httpClient.get<{ matchesArray: any }>(this.matchURL);
  }

  // Response : one object
  getMatchById(id) {
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);
  }

  // Response : message ou boolean
  deleteMatch(id) {
    return this.httpClient.delete<{ isDeleted: boolean }>(`${this.matchURL}/${id}`);

  }
  // Response : message ou boolean
  addMatch(matchObj) {
    return this.httpClient.post<{ message: string }>(this.matchURL, matchObj);
  }
  // Response : message ou boolean
  editMatch(newMatch) {
    return this.httpClient.put<{ isEdited: boolean }>(this.matchURL, newMatch);
  }

  // response : object
  searchMatchByScores(obj) {

    return this.httpClient.post(this.matchURL + "search", obj);

  }

  addComment(obj) {

    return this.httpClient.post(this.matchURL + "/comment", obj);

  }

  // response : array of object 

  getAllMatchesWithComments() {
    return this.httpClient.get<{ matches: any }>(`${this.matchURL}/comments/getAll`);
  }

}
