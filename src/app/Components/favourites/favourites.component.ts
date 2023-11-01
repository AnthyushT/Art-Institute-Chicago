import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favouriteArts: any[] = [];
  p: number = 1;
  ItemsPerPage: number = 6;

  constructor(private _masterService: MasterService) { }

  ngOnInit(): void {
    this.getFavouriteArts();
  }

  getFavouriteArts() {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.forEach((id: number) => {
      this._masterService.getFavouriteArt(id).subscribe((value: any) => {
        console.log(value.data); // Add this line
        this.favouriteArts.push(value.data);
      });
    });
  }
}

