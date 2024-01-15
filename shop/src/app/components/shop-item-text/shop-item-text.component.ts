import {Component, Input} from '@angular/core';

@Component({
  selector: 'shop-item-text',
  templateUrl: './shop-item-text.component.html',
  styleUrls: ['./shop-item-text.component.css']
})
export class ShopItemTextComponent {
  @Input() text?: string;

}
