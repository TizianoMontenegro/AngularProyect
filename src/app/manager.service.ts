import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class ManagerService {

  constructor(private http: HttpService) { }

  getInfo(url: string) {
    return this.http.get(url)
  }
}
