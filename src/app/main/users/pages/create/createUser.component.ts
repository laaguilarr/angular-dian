import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { UserService } from '../../../../services/UserService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { UserModel } from '../../../../model/UserModel';

@Component({
  selector: 'app-crear',
  templateUrl: './createUser.component.html',
  styleUrls: ['./createUser.component.css'],
})
export class CreateUserComponent implements OnInit {
  modoEditar: boolean = false;
  id: any;

  cargos: string[] = [];

  persona: any;

  formHorario: FormGroup = this.fb.group({
    name: [{ value: '', disabled: false }],
    phone: [{ value: '', disabled: false }],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.modoEditar = false;
    this.id = this.route.snapshot.params['id'];

    if (this.id){
      this.userService.get(this.id).subscribe((res) => {
        this.modoEditar = true;
        this.formHorario.patchValue({ ...res });
      });
    }

  }

  isNotValidField(field: string) {
    return (
      this.formHorario.controls[field].errors &&
      this.formHorario.controls[field].touched
    );
  }

  isValidForm() {
    return this.formHorario.valid;
  }

  buscarPersona(id: number) {
    return lastValueFrom(this.userService.get(id));
  }

  async actualizarCamposPersona() {
    const id = this.formHorario.controls['email'].value;

    this.persona = (await this.buscarPersona(id))[0];

    if (this.persona) {
      this.cargos = [...this.persona.cargo];

      this.formHorario.patchValue(this.persona);

      this.persona.cargo = this.formHorario.controls['cargo'].value;

      return;
    }

    this.clearPersonalData();
  }

  clearPersonalData() {
    this.formHorario.reset();

    this.snackBar.open('Usuario no disponible', '', {
      duration: 1500,
    });
  }

  save() {
    let user: UserModel = this.formHorario.getRawValue();

    if (this.modoEditar) {
      (user.id = this.id),
        this.userService.update(user.id, user).subscribe(() => {
          this.snackBar.open('Usuario actualizada', '', {
            duration: 1500,
          });

          this.router.navigate(['/users/find']);
        });
    } else {
      user.id = Date.now();
      this.userService.add(user).subscribe((res) => {
        this.snackBar.open('Usuario guardado', '', {
          duration: 1500,
        });

        this.router.navigate(['/users/find']);
      });
    }
  }
}
