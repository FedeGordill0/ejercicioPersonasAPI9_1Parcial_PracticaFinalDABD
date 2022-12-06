import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable()
export class PersonaService {
  api_personas: string =
    'https://638935874eccb986e88e170b.mockapi.io/personas/';

  constructor(private http: HttpClient) {}

  getListadoPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.api_personas);
  }

  getPersonaID(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.api_personas + id);
  }

  postPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.api_personas, persona);
  }

  deletePersona(persona: Persona): Observable<any> {
    return this.http.delete(this.api_personas + persona.id);
  }

  putPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.api_personas + persona.id, persona);
  }
}
