import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../../shared/models/search.interface';
import { SearchService } from 'src/app/shared/services/search.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() videos: Video[] ;
 
 
  addedToWishlist: boolean;
 

  
  constructor(private youtube:SearchService,private favservice:CartService) { }

  ngOnInit()
   {
     

   }

    handleAddToWishList(data:any)
    {
      this.youtube.addFav(data).subscribe(()=>{
        this.addedToWishlist=true; 
      })
      }

      handleRemoveWishList(data:any)
      {
        this.youtube.removeFav(data).subscribe(()=>
        {
          this.addedToWishlist = false;
         
        
        })
  }

  addtofav(video:any)
  {
    this.favservice.addtocart(video)
    this.addedToWishlist=true
    this.youtube.addFav(video).subscribe(()=>{
      this.addedToWishlist=true; 
    })

    
  
  }
  removeVideo(item:any){
    this.favservice.removeCartItem(item);
    this.addedToWishlist = false;
    this.youtube.removeFav(item).subscribe(()=>
        {
          this.addedToWishlist = false;
         
        
        })
    
  }

  


}








