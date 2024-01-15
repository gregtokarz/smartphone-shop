import {Component, Input, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  @ Input() filterText: string = '';
  public items$: any;
  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }



  protected readonly JSON = JSON;
}
