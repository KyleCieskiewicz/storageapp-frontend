import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-storageunits',
  templateUrl: './storageunits.component.html',
  styleUrls: ['./storageunits.component.css']
})
export class StorageunitsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private router: Router) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      params => {
        if(params.get('password') != 'mynameiskyle'){
          this.router.navigate(['/error']);
        }
      }
    );
  }

}
