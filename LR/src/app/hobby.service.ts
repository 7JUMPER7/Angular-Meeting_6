import Hobby from "./hobby";
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable()
export default class HobbyService {
  constructor(private http: HttpClient) {}

  loadHobby() {
    return this.http.get<Hobby>("../assets/hobby.json");
  }
  // saveHobby(hobby: Hobby) {
  //   return this.http.put<Hobby>("../assets/hobby.json", hobby, {
  //     headers: {'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Accept',
  //       'Access-Control-Allow-Methods': 'PUT, POST, OPTIONS'} });
  // }
}
