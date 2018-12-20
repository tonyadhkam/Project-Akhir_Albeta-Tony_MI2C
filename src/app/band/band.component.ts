import { Component, OnInit } from '@angular/core';
import { Band } from './band.model';
import { BandService } from './band.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css'],
  providers:[BandService],
})
export class BandComponent implements OnInit {
  selectedBand:Band;

  constructor(private bandService: BandService) { }

  ngOnInit() {
    this.bandService.bandSelected
    .subscribe(
      (band:Band)=>{
        this.selectedBand=band;
      }
    )
  }

}
