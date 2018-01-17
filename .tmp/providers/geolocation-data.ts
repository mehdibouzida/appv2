import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geocoder, GeocoderRequest, GeocoderResult, GoogleMapsLatLng } from 'ionic-native';
import { Address } from '../models/address'

/*
  Generated class for the GeolocationData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeolocationData {

  constructor() {
  }

  geocode(request: GeocoderRequest): Promise<Address[]> {
    var promise = new Promise(function (resolve, reject) {
      console.log(request);
      Geocoder.geocode(request)
        .then(results => {
          console.log(results);
          var addresses: Address[] = new Array<Address>();
          for (var r of (results as GeocoderResult[])) {
            var a = new Address();
            a.address = r.subThoroughfare + " " + r.thoroughfare;
            a.city = r.locality;
            a.postalCode = r.postalCode;
            a.country = r.country;
            a.coords = r.position;
            addresses.push(a);
          }
          console.log(addresses);
          resolve(addresses);
        })
        .catch(error => { reject(error) });
    });
    return promise;
  }

  getRequestFromString(stringRequest: string): GeocoderRequest {
    var req: GeocoderRequest = {};
    req.address = stringRequest;
    return req;
  }

}
