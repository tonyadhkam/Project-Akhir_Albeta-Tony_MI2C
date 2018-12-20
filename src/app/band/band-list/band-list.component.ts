import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Band } from '../band.model';
import { BandService } from '../band.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  // @Output() bandWasSelected=new EventEmitter<Band>();
  bands:Band[];

  constructor(private bandService:BandService) { }

  ngOnInit() {
    this.bands= this.bandService.getBands();
  }

  // onBandSelected(band:Band){
  //   this.bandWasSelected.emit(band);
  // }

}
