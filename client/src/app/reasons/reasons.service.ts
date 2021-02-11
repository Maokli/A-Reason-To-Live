import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IReason } from '../models/reason';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReasonsService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getReasons() {
    return this.httpClient.get<IReason[]>(this.baseUrl + 'reasons');
  }
  addReason(reason :IReason) {
    return this.httpClient.post(this.baseUrl + 'reasons',reason);
  }
}
