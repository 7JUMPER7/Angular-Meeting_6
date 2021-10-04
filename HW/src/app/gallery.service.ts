import Picture from "./picture";
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}

  getPictures() {
    return this.http.get<Picture[]>('../assets/gallery.json');
  }
}
