import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../../services/UserService';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-eliminar',
  templateUrl: './deleteUser.component.html',
  styleUrls: ['./deleteUser.component.css'],
})
export class DeleteUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  eliminar() {
    this.userService.delete(this.data.id).subscribe(() => {
      this.snackBar.open('Usuario eliminado', '', {
        duration: 1500,
      });

      this.dialogRef.close();
      this.router.navigate([this.router.url]).then(() => {
        window.location.reload();
      });
    });
  }
}
