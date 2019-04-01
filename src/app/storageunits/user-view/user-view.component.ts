import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageunitService } from '../../shared/storageunit.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: StorageunitService) { }

  unitList: MatTableDataSource<any>;
  displayedColumns: string[] = ['number','size','price','vacant'];

  ngOnInit() {
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

}
