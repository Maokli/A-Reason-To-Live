import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IReason } from '../models/reason';
import { environment } from 'src/environments/environment';
import {ReplaySubject} from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalConstants } from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class ReasonsService {
  baseUrl = environment.baseUrl;
  private reasonsSource = new ReplaySubject<IReason[]>(1);
  reasons$ = this.reasonsSource.asObservable();
  constructor(private httpClient: HttpClient) { }

  getReasons() {
    return this.httpClient.get<IReason[]>(this.baseUrl + 'reasons').pipe(
      map((response: IReason[]) => {
        if(response) {
          const reasons = response.reverse();
          this.reasonsSource.next(reasons);
          GlobalConstants.LastColor = reasons[0].color;
        }
      })
    );
  }
  addReason(reason :IReason) {
    return this.httpClient.post(this.baseUrl + 'reasons',reason,{responseType: 'text'});
  }
}
