import { Component } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Video } from 'src/app/shared/models/search.interface';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent {

  inputTouched = false;
  loading = false;
  videosList: Video[]=[]
  wishlist: any[] = [];
  
  
  
  

  constructor(private searchService: SearchService,private youtube:SearchService) { }

  ngOnInit()
  {
    
  }
  handleSearch(inputValue: string)
  {
    this.loading = true;
    this.searchService.getVideos(inputValue)
      .subscribe((items: any) => {
        this.videosList = items.map(item => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
             channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          };
        });
        this.inputTouched = true;
        this.loading = false;
        this. loadWishlist();
      });

    }

      loadWishlist(){
      this.youtube.getWishlist().subscribe((videoId)=>{
        console.log(videoId)
        this.wishlist=videoId;

      })     

      }

      


  }

 

  

