import { Injectable } from '@angular/core';
import { Kritik } from '../shared/kritik.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  KritikChange = new Subject<Kritik[]>();
  startedEditing = new Subject<number>()
  kritiks:Kritik[]=[
    new Kritik('@tonyadhkam','tolong adakan event tour 2019 lagi dong!!'),
    new Kritik('@siskaEka28','kemarin event di Bandung kurang menarik, makanya sepi'),
  ];

constructor() { }
getKritiks(){
  return this.kritiks.slice();
}

getKritik(index: number) {
  return this.kritiks[index];
}

addKritik(kritik:Kritik){
  this.kritiks.push(kritik);
  this.KritikChange.next(this.kritiks.slice());
}

addKritiks(kritiks:Kritik) {
  this.kritiks.push(kritiks);
  this.KritikChange.next(this.kritiks.slice());
}

updateKritik(index: number, newKritik: Kritik) {
  this.kritiks[index] = newKritik;
  this.KritikChange.next(this.kritiks.slice());
}

deleteKritik(index: number) {
  this.kritiks.splice(index, 1);
  this.KritikChange.next(this.kritiks.slice());
}

}
