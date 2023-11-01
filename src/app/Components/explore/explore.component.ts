import { Component, OnInit , Input } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})



export class ExploreComponent implements OnInit {

  specificArt: any;

  constructor(private _masterService: MasterService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.exploreArt(+id);
    }
  }

  exploreArt(id:number) {
    this._masterService.getSpecificArt(id).subscribe((value) => {
      console.warn("data", value);
      this.specificArt = value.data;
    })
  }
  
}

