import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { ParkI} from '../../../models/park.interface';
import { ParksService} from '../../../Services/parks.service';
import { MatSort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CreateParkComponent} from '../../Admin/Create/create-park/create-park.component';

@Component({
  selector: 'velio-list-parks',
  templateUrl: './list-parks.component.html',
  styleUrls: ['./list-parks.component.scss']
})
export class ListParksComponent implements OnInit {

  displayedColumns: any[] = ['name', 'city', 'postalCode', 'actions','new'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private parkService: ParksService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  this.parkService.getAllParks().subscribe(res => this.dataSource.data = res);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onEdit(element: any) {
    this.resetPark();
    this.openModal();
    if (element) {
      this.parkService.selected = element;
    }
  }

  onDelete(id: string) {
    this.parkService.deletePark(id);
  }

  openModal():void {
    const dialogConfif = new MatDialogConfig();
    dialogConfif.data = {
      title: 'Modal'
    };
    dialogConfif.autoFocus = true;
    this.dialog.open(CreateParkComponent, dialogConfif);
  }

  resetPark():void{
    this.parkService.selected.name="";
    this.parkService.selected.city="";
    this.parkService.selected.postalCode="";
    this.parkService.selected.id="";

  }

}

//Importer service
//Injecter service
//Intiliser
