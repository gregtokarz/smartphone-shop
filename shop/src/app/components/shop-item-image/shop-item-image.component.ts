import {Component, Input} from '@angular/core';

@Component({
  selector: 'shop-item-image',
  templateUrl: './shop-item-image.component.html',
  styleUrls: ['./shop-item-image.component.css']
})
export class ShopItemImageComponent {
  @Input() image?: string;
}
