import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, using } from 'rxjs';
import { Video } from '../models/search.interface';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyBig3j8GHSZnzGXti5VLW6TGQ1Le8vTgik';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable <Video[]> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    return this.http.get<Video[]>(url)
      .pipe(
        map((response: any) => response.items)
      );
  }

  whishlisturl ="http://localhost:3000/Favourite";



  getWishlist() {
    return this.http.get(this.whishlisturl).pipe(
      map((result: any[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }


  addFav(VideoId: any){
    return this.http.post("http://localhost:3000/Favourite" ,VideoId)
    
  
}

    removeFav(VideoId: any) 
    {
      return this.http.delete("http://localhost:3000/Favourite/"+VideoId);

    }

  


}
