import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/UserService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../../components/delete/deleteUser.component';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '../../../../dto/User';

@Component({
  selector: 'app-consultar',
  templateUrl: './findUser.component.html',
  styleUrls: ['./findUser.component.css'],
})
export class FindUserComponent implements OnInit {
  usuarios: User[] = [];
  dataSource!: MatTableDataSource<User>;
  displayedColumns = ['name', 'phone','acciones'];

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userService.get().subscribe((res) => {
      this.usuarios = res;
      this.dataSource = new MatTableDataSource(this.usuarios);
      if (this.usuarios.length == 0) {
        this.snackBar.open('No hay usuarios', '', {
          duration: 1500,
        });
      }
    });
  }

  edit(element: any) {
    this.router.navigate([`/users/edit/${element.id}`]);
  }

  delete(element: any) {
    this.dialog.open(DeleteUserComponent, {
      data: element,
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
