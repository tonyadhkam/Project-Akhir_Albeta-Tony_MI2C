import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../band.model';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  @Input() band:Band;

  constructor() { }

  ngOnInit() {
  }

}
