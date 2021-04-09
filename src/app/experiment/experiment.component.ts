import { Component, NgModuleFactoryLoader, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ViewComponent } from '../view/view.component';
import { FormGroup,FormBuilder } from "@angular/forms";
import {  Observable } from 'rxjs'
import { DETAILS } from './details';

interface Details {
  id: any;
  name: string;
  catagory:string;
  data_type:string;
  last_updated: number;
}

export interface UsersData {
  name: string;
  catagory:string;
  data_type:string;
  last_updated:string;
  id: any;
}

export interface UsersData1 {
  name: string;
  catagory:string;
  data_type:string;
  last_updated:string;
  id: number;
}

export interface UsersData2 {
  name: string;
  catagory:string;
  data_type:string;
  last_updated:string;
  id: number;
}


export interface FoodItem {
  name: string;

  searchText: string;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1, name: 'govardhan',catagory:'Person',data_type:'String',last_updated:'05-02-2021'},
  {id: 2, name: 'raj',catagory:'TL',data_type:'Int',last_updated:'05-02-2021'},
  {id: 3, name: 'dheeraj',catagory:'Person',data_type:'String',last_updated:'05-02-2021'},
  {id: 4, name: 'abhinash',catagory:'Person',data_type:'String',last_updated:'05-02-2021'},
  {id: 5, name: 'novodhi',catagory:'Organisation',data_type:'Int',last_updated:'05-02-2021'}
];

const ELEMENT_DATA1: UsersData1[] = [
  {id: 1, name: 'govardhan',catagory:'Person',data_type:'String',last_updated:'05-02-2021'},
  {id: 2, name: 'raj',catagory:'TL',data_type:'Int',last_updated:'05-02-2021'},

  {id: 3, name: 'dheeraj',catagory:'Person',data_type:'String',last_updated:'05-02-2021'},
  {id: 4, name: 'abhinash',catagory:'Person',data_type:'Int',last_updated:'05-02-2021'},


];

const ELEMENT_DATA2: UsersData2[] = [
  {id: 1, name: 'govardhan',catagory:'Person',data_type:'String',last_updated:'05-02-2021'},
  {id: 2, name: 'raj',catagory:'TL',data_type:'Int',last_updated:'05-02-2021'},
  {id: 3, name: 'dheeraj',catagory:'Person',data_type:'String',last_updated:'05-02-2021'},

];




@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent  {


  foods$: Observable<FoodItem[]>;
  filteredFoods$: Observable<FoodItem[]>;
  details: Details[] =DETAILS ;
  searchText: string;
  formGroup: FormGroup;
  filtered;
  filterString = "";
  filtered1;
  filterString1 = "";
  filtered2;
  filterString2 = "";



myimage:string="assets/images/img1.jpg"
  displayedColumns: string[] = ['id', 'name','catagory','data_type','last_updated', 'action'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = ['id', 'name','catagory','data_type','last_updated', 'action'];
  dataSource1 = ELEMENT_DATA1;
  displayedColumns2: string[] = ['id', 'name','catagory','data_type','last_updated', 'action'];
  dataSource2 = ELEMENT_DATA2;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(public dialog: MatDialog,private formBuilder: FormBuilder) {



   }
flag:boolean=false;
flag1:boolean=false;
flag2:boolean=false;
flag3:boolean=true;
countryList: Array<any> = [
  { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] ,abc:['djk', 'ggjk']},
  { name: 'Spain', cities: ['Barcelona'],abc:['djhf','wf'] },
  { name: 'USA', cities: ['Downers Grove'],abc:['djhf','wf'] },
  { name: 'Mexico', cities: ['Puebla'],abc:['djhf','wf'] },
  { name: 'China', cities: ['Beijing'],abc:['djhf','wf'] },
];
cities: Array<any>;
abc:Array<any>;
  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      height:'500px',
      data:obj
    });



    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });

  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name,
      catagory:row_obj.catagory,
      data_type:row_obj.data_type,
      last_updated:row_obj.last_updated
    });
    this.table.renderRows();

  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.catagory=row_obj.catagory;
        value.data_type=row_obj.data_type;
        value.last_updated=row_obj.last_updated;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }


  openview(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ViewComponent, {
      width: '500px',
      height:'500px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {

    });


  }

  openDialog1(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      height:'500px',
      data:obj
    });



    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });

  }

  addRowData1(row_obj){
    var d = new Date();
    this.dataSource1.push({
      id:d.getTime(),
      name:row_obj.name,
      catagory:row_obj.catagory,
      data_type:row_obj.data_type,
      last_updated:row_obj.last_updated
    });
    this.table.renderRows();

  }
  updateRowData1(row_obj){
    this.dataSource1 = this.dataSource1.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.catagory=row_obj.catagory;
        value.data_type=row_obj.data_type;
        value.last_updated=row_obj.last_updated;
      }
      return true;
    });
  }
  deleteRowData1(row_obj){
    this.dataSource1 = this.dataSource1.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

  openDialog2(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      height:'500px',
      data:obj
    });



    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData2(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData2(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData2(result.data);
      }
    });

  }

  addRowData2(row_obj){
    var d = new Date();
    this.dataSource2.push({
      id:d.getTime(),
      name:row_obj.name,
      catagory:row_obj.catagory,
      data_type:row_obj.data_type,
      last_updated:row_obj.last_updated
    });
    this.table.renderRows();

  }
  updateRowData2(row_obj){
    this.dataSource2 = this.dataSource2.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.catagory=row_obj.catagory;
        value.data_type=row_obj.data_type;
        value.last_updated=row_obj.last_updated;
      }
      return true;
    });
  }
  deleteRowData2(filterString){
    this.dataSource2 = this.dataSource2.filter((value,key)=>{
      return value.id != filterString.id;
    });
  }






  table1(){
console.log("call from frst table")
    this.flag=true;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;

}
table2(){
console.log("call from second table")
  this.flag=false;
  this.flag1=true;
  this.flag2=false;
  this.flag3=false;
}
table3(){

  console.log("call from thrd table")
  this.flag=false;
  this.flag1=false;
  this.flag2=true;
  this.flag3=false;
}
Data(){
  this.flag=false;
  this.flag1=false;
  this.flag2=false;
  this.flag3=true;
}

changeCountry(count) {
  this.cities = this.countryList.find(con => con.name == count).cities;
  this.abc=this.countryList.find(xyz=>xyz.name==count).abc;
}

ngOnInit() {
  this.onFilterChange();
  this.onFilterChange1();
  this.onFilterChange2();
}

onFilterChange() {
  this.filtered = this.dataSource.filter((dataSource) => this.isMatch(dataSource));
}
onFilterChange1() {
  this.filtered1= this.dataSource1.filter((dataSource1) => this.isMatch1(dataSource1));
}
onFilterChange2() {
  this.filtered2 = this.dataSource2.filter((dataSource2) => this.isMatch2(dataSource2));
}

isMatch(item) {
  if (item instanceof Object) {
    return Object.keys(item).some((k) => this.isMatch(item[k]));
  } else {
    return item.toString().indexOf(this.filterString) > -1
  }
}
isMatch1(item) {
  if (item instanceof Object) {
    return Object.keys(item).some((k) => this.isMatch1(item[k]));
  } else {
    return item.toString().indexOf(this.filterString) > -1
  }
}
isMatch2(item) {
  if (item instanceof Object) {
    return Object.keys(item).some((k) => this.isMatch2(item[k]));
  } else {
    return item.toString().indexOf(this.filterString) > -1
  }
}



}

