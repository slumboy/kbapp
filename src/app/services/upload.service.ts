import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Upload } from '../shared/upload';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  SERVER_URL: string = "https://file.io/";
  constructor(private db: AngularFireDatabase) { }

}
