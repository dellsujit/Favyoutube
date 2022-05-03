import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-fav-holder',
  templateUrl: './fav-holder.component.html',
  styleUrls: ['./fav-holder.component.css']
})
export class FavHolderComponent implements OnInit {

  public List:any =[];

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getVideos().subscribe(res=>{
      this.List= res;
      
    })
  }
  removeVideo(item:any){
    this.cartservice.removeCartItem(item);
  }

  emptycart(){

    this.cartservice.removeAll();
  }

}
