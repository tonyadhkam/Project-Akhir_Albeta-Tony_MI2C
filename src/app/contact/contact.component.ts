import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Kritik } from '../shared/kritik.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  kritiks:Kritik[];
  private subscription: Subscription;

  constructor(private slsService:ContactService) { }

  ngOnInit() {
    this.kritiks=this.slsService.getKritiks();
    this.subscription = this.slsService.KritikChange
    .subscribe(
      (Kritik:Kritik[])=>{
        this.kritiks=Kritik;
      }
    );
  }

  onEditSaran(index: number) {
    this.slsService.startedEditing.next(index);
  }
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
