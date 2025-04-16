import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

constructor() { }

registerdata(data: any): void {
  localStorage.setItem('signup', JSON.stringify(data));
}

}
