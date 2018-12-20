import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Kritik } from '../../shared/kritik.model';
import { ContactService } from '../contact.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedSaranIndex: number;
  editedSaran: Kritik;

  constructor(private slsService:ContactService) { }

  ngOnInit() {
    this.subscription = this.slsService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedSaranIndex = index;
        this.editMode = true;
        this.editedSaran = this.slsService.getKritik(index);
        this.slForm.setValue({
          name: this.editedSaran.name,
          saran: this.editedSaran.saran
        })
      }
    );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newKritik = new Kritik(value.name, value.saran);
    if (this.editMode) {
      this.slsService.updateKritik(this.editedSaranIndex, newKritik);
    } else {
      this.slsService.addKritik(newKritik);
    }
    this.editMode = false;
    form.reset();
  }

  onCancel() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slsService.deleteKritik(this.editedSaranIndex);
    this.onCancel();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
