import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private items: any[] = [];
  private itemsUpdated = new Subject<any[]>();

  constructor(private http: HttpClient) { }

  getItems() {
    this.http.get("./assets/cart.json")
    .subscribe((jsonData) => {
      this.items = jsonData["productsInCart"];
      this.itemsUpdated.next([...this.items]);
    })
  }

  getUpdatedItemsListener(){
    return this.itemsUpdated.asObservable();
  }

}
