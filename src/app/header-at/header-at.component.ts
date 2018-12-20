import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header-at',
  templateUrl: './header-at.component.html'
})
export class HeaderAtComponent {
  constructor(private dataStorageService: DataStorageService) {}

  onSaveData(){
    this.dataStorageService.storeEvents()
    .subscribe(
      (response : Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getEvents();
  }

}
