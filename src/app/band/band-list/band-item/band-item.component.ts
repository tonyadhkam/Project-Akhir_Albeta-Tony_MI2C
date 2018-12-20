import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../../band.model';
import { BandService } from '../../band.service';

@Component({
  selector: 'app-band-item',
  templateUrl: './band-item.component.html',
  styleUrls: ['./band-item.component.css']
})
export class BandItemComponent implements OnInit {

  @Input() band:Band;
  // @Output() bandSelected=new EventEmitter<void>();

  constructor(private bandService:BandService) { }

  ngOnInit() {
  }

  onSelected(){
    //this.bandSelected.emit();
    this.bandService.bandSelected.emit(this.band);
  }

}
