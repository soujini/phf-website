import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class Contact{
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public sendMail(contact:any){
    const headers= {
      'Content-Type': 'application/json'
    };
    const body= JSON.stringify(contact);

     return this.httpClient.post('https://phf-api.herokuapp.com/send', body, { headers }).toPromise().then(
       (res) => {
         return res;
       },(err) => {
      console.log(err);
      return err;
    });
  }
     //.subscribe(
    //   (response) => {
    //     console.log(response);
    //     return response;
    //   },
    //   (error) => {
    //     console.log(error);
    //     return error;
    //   }
    // )



}
