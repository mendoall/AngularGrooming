import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/cita');
  }

  addData(data: any){
    return this.http.post('http://localhost:3000/cita/agregar', data);
  }

  editData(data: any){
    return this.http.put('http://localhost:3000/cita/modificar', data);
  }

  deleteData(id: any){
    return this.http.delete('http://localhost:3000/cita/eliminar/' + id);
  }


}
