import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  limit : number = 6;
  page :number =  1;
  p: number = 1;
  ItemsPerPage: number = 6;
  allArts: any;
  total : number = 0;
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
  

  constructor(private _masterService: MasterService, private router: Router) { }

  ngOnInit(): void { 
    this.getArtList();
  }

  getArtList() {
    this._masterService.getArtList().subscribe((value) => {
      console.warn("data", value);
      this.filterArts = value.data;
      this.allArts = value.data;
      this.total = value.pagination.total_pages;
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
  
  shareArt(id: number) {
    if(navigator.share){
      navigator.share({
        title: 'Check out this art!',
        url: this.router.createUrlTree(['/display', id]).toString()
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      console.log('Share not supported on this browser, do it manually.');
    }
  }

}

