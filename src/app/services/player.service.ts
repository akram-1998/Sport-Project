import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL: string = "http://localhost:3000/players";

  // httpClient : un livreur

  constructor(private httpClient: HttpClient) { }

  // get : c'est une function Http prédéfinie

  // repose : array of objects
  getAllPlayers() {
    return this.httpClient.get(this.playerURL);
  }

  // Response : one object
  getPlayerById(id) {
    return this.httpClient.get(`${this.playerURL}/${id}`);
  }

  // Response : message ou boolean
  deletePlayer(id) {
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
  // Response : message ou boolean
  addPlayer(matchObj) {
    return this.httpClient.post<{ message: string }>(this.playerURL, matchObj);
  }
  // Response : message ou boolean
  editPlayer(newMatch) {
    return this.httpClient.put(this.playerURL, newMatch);
  }

}