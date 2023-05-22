import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  reclamationURL: string = "http://localhost:3000/reclamation";

  constructor(private httpClient: HttpClient) { }

  addRec(rec) {
    return this.httpClient.post<{message :boolean}>(this.reclamationURL, rec);

  }

}
