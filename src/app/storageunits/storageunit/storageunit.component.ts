import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { StorageunitService } from '../../shared/storageunit.service';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-storageunit',
  templateUrl: './storageunit.component.html',
  styleUrls: ['./storageunit.component.css']
})
export class StorageunitComponent implements OnInit {

  constructor(public service: StorageunitService,
  private notificationService: NotificationService,
  private dialogRef: MatDialogRef<StorageunitComponent>) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('Submit called: ' + this.service.form.valid);
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value){
        this.service.addUnit(this.service.form.value).subscribe((result=>{
          console.log('Response of add: ' + result);
        }));
        this.notificationService.showSuccess('Unit added successfully');
      } else{
        this.service.updateUnit(this.service.form.value, this.service.form.get('$key').value).subscribe((result=>{
          console.log('Response of update: ' + result);
        }));
        this.notificationService.showSuccess('Unit updated successfully');
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
