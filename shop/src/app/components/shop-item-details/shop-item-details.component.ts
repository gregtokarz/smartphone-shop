import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'shop-item-details',
  templateUrl: './shop-item-details.component.html',
  styleUrls: ['./shop-item-details.component.css']
})
export class ShopItemDetailsComponent implements OnInit{


  public image: string = '';
  public text: string = '';
  public details: string ='';
  public price: string ='';

  constructor(private service: DataService, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
        .subscribe((params: any) => {
          id = params.get('id');
        });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.details = res['details'];
      this.text= res['text'];
      this.price= res['price'];
    });

  }
  deletePost() {
    let id: string = '';
    this.route.paramMap
        .subscribe((params: any) => {
          id = params.get('id');
        });
    this.service.deleteById(id).subscribe();
  }

  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

}
