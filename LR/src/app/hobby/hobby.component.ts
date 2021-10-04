import { Component, OnInit } from '@angular/core';
import HobbyService from '../hobby.service';
import Hobby from '../hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css'],
  providers: [HobbyService]
})
export class HobbyComponent implements OnInit {
  isEdit: boolean = false;
  hobby!: Hobby;
  constructor(private hobbyService: HobbyService) { }

  ngOnInit() {
    this.hobbyService.loadHobby().subscribe(data => this.hobby = data);
  }

  editInfo() {
    // if(this.isEdit) {
    //   this.hobbyService.saveHobby(this.hobby).subscribe(data => { console.log(data); });
    // }
    this.isEdit = !this.isEdit;
  }

}
