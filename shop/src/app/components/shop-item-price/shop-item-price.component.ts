import {Component, Input} from '@angular/core';

@Component({
  selector: 'shop-item-price',
  templateUrl: './shop-item-price.component.html',
  styleUrls: ['./shop-item-price.component.css']
})
export class ShopItemPriceComponent {
  @Input() price?: string;
}
