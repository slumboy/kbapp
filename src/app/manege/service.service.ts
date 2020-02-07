import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  // test get data

  getData() {
    return this.firestore.collection('contents').snapshotChanges().pipe(
      map(res=>{
        return res.map(data=>(
          {
            // key:data.key,
            // value:data.playload.val()
          }
        ))
      })
    )
  }

}
