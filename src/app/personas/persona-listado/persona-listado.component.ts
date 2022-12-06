import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css'],
})
export class PersonaListadoComponent implements OnInit, OnDestroy {
  private suscripcion = new Subscription();
  listadoPersonas: Persona[] = [];
  constructor(private personaService: PersonaService, private router: Router) {}

  ngOnInit(): void {
    this.actualizarListado();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  actualizarListado() {
    this.suscripcion.add(
      this.personaService.getListadoPersonas().subscribe({
        next: (listado: Persona[]) => {
          this.listadoPersonas = listado;
        },
        error: () => {
          alert('ERROR personaService.getListadoPersonas');
        },
      })
    );
  }

  inicio() {
    this.router.navigate(['']);
  }
  nuevaPersona() {
    this.router.navigate(['alta']);
  }
}
