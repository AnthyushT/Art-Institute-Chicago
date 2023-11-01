import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  p: number = 1;
  ItemsPerPage: number = 6;
  allArts: any;
  filterArts: any;
  searchInput = "";
  newForm: FormGroup = new FormGroup({
    title: new FormControl(''),
  })

  saveData(id: number){
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!this.isFavorite(id)) {
      favorites.push(id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
  

  constructor(private _masterService: MasterService) { }

  ngOnInit(): void {
    this.getArtList();
  }

  getArtList() {
    this._masterService.getArtList().subscribe((value) => {
      console.warn("data", value);
      this.filterArts = value.data;
      this.allArts = value.data;
    })
  }

  filterArt() {
    let searchInput = this.newForm.get('title')?.value.toLowerCase();
    this.filterArts = this.allArts.filter(
      (a: any) => {
        return a.title.toLowerCase().includes(searchInput);
      })
  }

  isFavorite(id: number) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
  }
  

}

