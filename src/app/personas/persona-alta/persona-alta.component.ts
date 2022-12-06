import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css'],
})
export class PersonaAltaComponent implements OnInit, OnDestroy {
  private suscripcion = new Subscription();
  persona: Persona;
  @ViewChild('formulario') formulario: NgForm;

  constructor(private personaService: PersonaService, private router: Router) {}

  ngOnInit(): void {
    this.persona = new Persona();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  guardar() {
    if (this.formulario.valid) {
      this.suscripcion.add(
        this.personaService.postPersona(this.persona).subscribe({
          next: () => {
            this.router.navigate(['listado']);
          },
          error: () => {
            alert('ERROR personaService.postPersona');
          },
        })
      );
    } else {
      alert('ERROR CARGA DE FORMULARIO');
    }
  }

  cancelar() {
    this.router.navigate(['listado']);
  }
}
