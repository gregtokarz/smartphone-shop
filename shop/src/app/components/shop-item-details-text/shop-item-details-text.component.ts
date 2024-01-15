import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-item-details-text',
  templateUrl: './shop-item-details-text.component.html',
  styleUrls: ['./shop-item-details-text.component.css']
})
export class ShopItemDetailsTextComponent implements OnInit{
  @Input() details?: string;
  @Input() id?: number;
  constructor() { }

  ngOnInit(): void {
  }

}
