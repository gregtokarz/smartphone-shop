import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit{
  @Input() image?: string;
  @Input() text?: string;
  @Input() price?: string;
  @Input() details?: string;
  @Input() id?: number;



  ngOnInit() {
  }
}
