import { Component } from '@angular/core';
import { FetchApiDataService } from 'src/app/services/fetch-api-data.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';





export interface PeriodicElement {
  orderDescription: string;
  countOfItemTypes: Object;
  createdBy: string;
  createdAt: string;
  id: string
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  displayedColumns: string[] = ['Order Id', 'Order Description', 'Count of item Types Included In Order', 'Created By', 'Created Date', 'Actions'];

  ELEMENT_DATA: PeriodicElement | any = [];

  dataSource: any = [];

  tableData: any = [];


  constructor(public orderData: FetchApiDataService) {

  }

  ngOnInit() {
    this.orderData.getOrderData().subscribe((res) => {
      this.tableData = res;
      this.ELEMENT_DATA = res;

      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA)
    });
  }





  countApparels(element: any) {
    return !isNaN(element.countOfItemTypes.apparel) ? parseInt(element.countOfItemTypes.apparel) : 0;
  }

  countGrocery(element: any) {
    return !isNaN(element.countOfItemTypes.grocery) ? parseInt(element.countOfItemTypes.grocery) : 0;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}

