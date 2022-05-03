import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[]
  public VideoList=new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }
  getVideos()
  {
   return this.VideoList.asObservable();
  }

  setProduct(videos:any){
    this.cartItemList.push(...videos)
    this.VideoList.next(videos);
  }

  addtocart(videos:any){
   this.cartItemList.push(videos);
   this.VideoList.next(this.cartItemList);
   console.log(this.VideoList)
  
   
  }
  removeCartItem(videos:any)
  {
    this.cartItemList.map((a:any,index:any)=>
    {
    if(videos.id==a.id){this.cartItemList.splice(index,1);}
   })
}

removeAll(){
  this.cartItemList=[]
  this.VideoList.next(this.cartItemList)
}

}
