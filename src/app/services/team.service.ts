import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl: string = "http://localhost:3000/teams";

  constructor(private httpClient: HttpClient) { }

  addTeam(obj) {
    return this.httpClient.post<{ message: string }>(this.teamUrl, obj);
  }

  getAllTeams() {
    return this.httpClient.get<{ teamsTab: any }>(this.teamUrl);
  }

  deleteTeamById(id) {
    return this.httpClient.delete<{ isDeleted: boolean }>(`${this.teamUrl}/${id}`);
  }

  getTeamById(id) {
    return this.httpClient.get<{ displayedTeam: any }>(`${this.teamUrl}/${id}`);
  }

  editMatch(newTeam) {
    return this.httpClient.put(this.teamUrl, newTeam);
  }

}
