import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storageunit } from './storageunit';

@Injectable({
  providedIn: 'root'
})
export class StorageunitService {

  apiURL: string = 'https://storageapp-backend.herokuapp.com/api/unit';

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    number: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    vacant: new FormControl(false)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      number: '',
      size: '',
      price: 0,
      vacant: false
    })
  }

  populateEditDialog(unit: Storageunit){
    this.form.setValue({
      $key: unit.id,
      number: unit.number,
      size: unit.size,
      price: unit.price,
      vacant: unit.vacant
    })
  }

  public addUnit(unit: Storageunit){
    console.log('Function to add unit via httpclient : ' + unit.number + ' : ' + unit.size + ' : ' + unit.price + ' : ' + unit.vacant);
    return this.http.post(`${this.apiURL}`, unit);
  }

  public updateUnit(unit: Storageunit, id: number){
    return this.http.put(`${this.apiURL}/${id}`,unit);
  }

  public fetchUnits(){
    console.log('Function to get storage units via httpclient');
    return this.http.get<Storageunit[]>( `${this.apiURL}` +"/all");
  }

  public deleteUnit(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
