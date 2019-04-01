import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageunitService } from '../../shared/storageunit.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { StorageunitComponent } from './../storageunit/storageunit.component';

@Component({
  selector: 'app-storageunit-list',
  templateUrl: './storageunit-list.component.html',
  styleUrls: ['./storageunit-list.component.css']
})
export class StorageunitListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: StorageunitService,
  private dialog: MatDialog) { }

  unitList: MatTableDataSource<any>;
  displayedColumns: string[] = ['number','size','price','vacant','actions'];

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable(){
    this.service.fetchUnits().subscribe((result)=>{
      let array = result.map(item =>{
        console.log('Item: ' + item);
        return {
          $key: item.id,
          ...item
        };
      })
      this.unitList = new MatTableDataSource(array);
      this.unitList.paginator = this.paginator;
    })
  }

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(StorageunitComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    })
  }

  onEdit(unit){
    console.log("Edit called..");
    this.service.populateEditDialog(unit);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(StorageunitComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    })
  }

  onDelete(unit){
    console.log("Delete called for id: " + unit.id);
    this.service.deleteUnit(unit.id).subscribe((result=>{
      console.log('Response of delete: ' + result);
      this.refreshTable();
    }));
  }

}
