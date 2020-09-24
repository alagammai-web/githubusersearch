import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {
  // username: string;

  apiUrl = 'https://api.github.com';
  constructor(private http: HttpClient) { 
  }

getUsers(uname: string){
  return this.http.get(`${this.apiUrl}/search/users?q=${uname}`);
}

getbyUsername(uname: string){
  return this.http.get(`${this.apiUrl}/${uname}?per_page=10`);
}
getuserRepos(uname1: string){
  return this.http.get(`${this.apiUrl}/users/${uname1}/repos`);
}

}
