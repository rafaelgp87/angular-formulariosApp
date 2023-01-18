import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080ti'),
  //   'precio': new FormControl(1500),
  //   'existencias': new FormControl(5),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    precio: [null, [Validators.required, Validators.min(0)]],
    existencias: [null, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'RTX4080i',
      precio: 1600,
      existencias: 20
    })
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo]?.errors 
        && this.miFormulario.controls[campo]?.touched
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }

}
