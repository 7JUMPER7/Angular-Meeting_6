import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import Picture from '../picture';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {
  modalImagePath: string = '';
  modalDisplay: string = 'none';
  gallery!: Picture[]
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getPictures().subscribe(data => this.gallery = data);
  }

  showModal(e: Event) {
    this.modalDisplay = 'flex';
    this.modalImagePath = (e.target as HTMLElement).getAttribute('src') as string;
  }

  modalDisplayChanged(display: string) {
    this.modalDisplay = display;
  }

}
