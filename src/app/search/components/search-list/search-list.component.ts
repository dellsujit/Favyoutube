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

  @Input() videos: Video ;
 
  
  @Input () addedToWishList: boolean;
 

  
  constructor(private youtube:SearchService,private favservice:CartService) { }

  ngOnInit()
   {

   }


    handleAddToWishList()
    {
      this.youtube.addFav(this.videos.videoId).subscribe(()=>{
        this.addedToWishList=true; 
      })
      }

      handleRemoveWishList()
      {
        this.youtube.removeFav(this.videos.videoId).subscribe(()=>
        {
          this.addedToWishList = false;
        
        
        })
  }

  
  addtofav(video:any)
  {
    
    this.favservice.addtocart(video)

  }

  removeVideo(item:any){
    this.favservice.removeCartItem(item);
    
   
    
    
  }


}





