import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  url = 'http://127.0.0.1:5000/';

  constructor(
    private http: HttpClient
  ) {
  }

  getAllMedicines() {
    return this.http.get(this.url + 'api/v1/allMedicine')
  }

  getMedicine(medicineId: number) {
    return this.http.get(this.url + `api/v1/getmedicine/${medicineId}`)
  }
}
