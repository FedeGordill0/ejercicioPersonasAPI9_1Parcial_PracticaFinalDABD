import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-modificar',
  templateUrl: './persona-modificar.component.html',
  styleUrls: ['./persona-modificar.component.css'],
})
export class PersonaModificarComponent implements OnInit {
  private suscripcion = new Subscription();
  persona: Persona;
  @ViewChild('formulario') formulario: NgForm;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.persona = new Persona();
    this.mostrarForm();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  guardar() {
    if (this.formulario.valid) {
      this.suscripcion.add(
        this.personaService.putPersona(this.persona).subscribe({
          next: () => {
            this.router.navigate(['listado']);
          },
          error: () => {
            alert('ERROR personaService.putPersona');
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

  mostrarForm() {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const id = params['id'];

        if (id) {
          this.personaService.getPersonaID(id).subscribe({
            next: (p) => {
              this.persona = p;
            },
            error: () => {
              alert('ERROR personaService.getPersonaID');
            },
          });
        }
      },
      error: () => {
        alert('ERROR activatedRoute.params');
      },
    });
  }
}
