import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs/operators';
import { RequestOptions } from '@angular/http';
import {Subject} from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class SharedService {
  refreshList:Subject<any> = new Subject();
  isClicked:Subject<any> = new Subject();

  constructor() { }
}
