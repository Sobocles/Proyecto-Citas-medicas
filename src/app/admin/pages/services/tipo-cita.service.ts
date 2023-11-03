import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Medico } from '../interface/medicos';
import { Observable } from 'rxjs';
import { Tipo_cita, tipoCitaResponse } from '../interface/tipoCita';
import { HorarioMedico } from '../interface/horarioMedico';

const base_url = environment.base_url;

  


@Injectable({
  providedIn: 'root'
})
export class TipoCitaService {

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return { 
      headers: {
      'Authorization': `Bearer ${this.token}`
      }
    }
}


  constructor( private http: HttpClient) { }

  cargaTipocita( desde: number = 0 ) {
    const url = `${ base_url }/tipo_cita?desde=${ desde }`;
    return this.http.get<tipoCitaResponse>( url, this.headers)   
  }

  
  crearTipoCita(formData: Tipo_cita): Observable<tipoCitaResponse> {
    return this.http.post<tipoCitaResponse>(`${base_url}/tipo_cita`, formData, this.headers);
  }

  borrarTipoCita( id: number ){
    console.log(id);
    const url = `${ base_url }/tipo_cita/${ id }`;
    return this.http.delete( url, this.headers );
  }

  cargaEspecialidades( ) {
    const url = `${ base_url }/tipo_cita/especialidades`;
    return this.http.get<any>( url, this.headers)   
  }

  obtenerTipoCitaId(  tipoCitaId:string ){ //aca role no viene como parametro (viene email y nombre en this.perfilForm.value) pero aun asi funciona ya que role simplemente se ignora
  
    return this.http.put(`${ base_url }/tipo_cita/${tipoCitaId}`, this.headers) //Para actualizar los datos del usuario se necesita enviar al backend El id que se obtiene de un metodo get que me da el id del usuario logeado que es el mismo que esta intentando actualizar sus datos, la data que se quiere actualizar que es enviada por un formulario y los header con el token de acceso
     
  }
  

  /*
      crearTipoCita(formData: Tipo_cita): Observable<tipoCitaResponse> {
    const url = `${base_url}/tipo_cita`; // Reemplaza con la URL correcta
    return this.http.post<tipoCitaResponse>(url, formData);
  }
  */
}
