import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'shop-add-item',
  templateUrl: './shop-add-item.component.html',
  styleUrls: ['./shop-add-item.component.css']
})
export class ShopAddItemComponent{
  constructor(private service: DataService) {
  }

  post = {
    title: '',
    text: '',
    price: '',
    details: '',
    image: ''
  };

  addPost() {
    this.service.addPost(this.post).subscribe(
        response => {
          console.log('Post został dodany:', response);
          // Tutaj możesz dodać obsługę powiadomienia o sukcesie lub przekierowanie do innej strony
        },
        error => {
          console.error('Błąd podczas dodawania posta:', error);
          // Tutaj możesz dodać obsługę błędu lub wyświetlić komunikat o niepowodzeniu
        }
    );
  }
}

