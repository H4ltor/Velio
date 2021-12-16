import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {BikeI} from '../../../models/bike.interface';
import {BikesService } from '../../../Services/bikes.service';
import {MatSort} from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CreateBikeComponent} from '../../Admin/Create/create-bike/create-bike.component';

@Component({
  selector: 'velio-list-bikes',
  templateUrl: './list-bikes.component.html',
  styleUrls: ['./list-bikes.component.scss']
})
export class ListBikesComponent implements OnInit {

  displayedColumns: any[] = ['model', 'number', 'actions','new'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private bikeService: BikesService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.bikeService.getAllBikes().subscribe(res => this.dataSource.data = res);

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onEdit(element: any) {
    this.resetBike();
    this.openModal();
    if (element) {
      this.bikeService.selected = element;
    }
  }

  onDelete(id: string) {
    this.bikeService.deleteBike(id);
  }

  openModal():void {
    const dialogConfif = new MatDialogConfig();
    dialogConfif.data = {
      title: 'Modal'
    };
    dialogConfif.autoFocus = true;
    this.dialog.open(CreateBikeComponent, dialogConfif);
  }

  resetBike():void{
    this.bikeService.selected.id="";
    this.bikeService.selected.model="";
    this.bikeService.selected.number="";
  }

}
