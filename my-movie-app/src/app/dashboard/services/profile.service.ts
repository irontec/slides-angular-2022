import { Injectable } from "@angular/core";
import { Profile } from "../models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getProfile() {
    return fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(res => {
        const profileComplete = res.results[0];
        const profile = {
          firstname: profileComplete.name.first,
          lastname: profileComplete.name.last,
          email: profileComplete.email,
          picture: profileComplete.picture.large
        } as Profile;
        return profile;
      })
      .catch(error => {
        console.log('Error obteniendo el perfil', error);
      })
  }
}