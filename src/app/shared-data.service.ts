import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  capturedImage: string='';
  capturedMap: string='';

  setCapturedMap(map: string) {
    this.capturedMap = map;
  }


}
