import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';

import { User } from '../dto/User';
import { UserModel } from '../model/UserModel';
import { BookModel } from '../model/BookModel';

/**
 * Servicio para consultar información de usuario
 */
@Injectable({
    providedIn: 'root'
})
export class UserService {
 
    constructor(private http: HttpClient) { 
    }

    /**
     * Consultar usuarios
     * @returns Listado de usuarios
     */
    get(id?:number): Observable<User[]> {
        if (id){
            return this.http.get<any>(environment.urlBack + `/users/${id}`)
            .pipe(
                map(response => {                    
                    return response as User[];
                })
            );
        } else {
            return this.http.get<any>(environment.urlBack + `/users/`)
            .pipe(
                map(response => {                    
                    return response as User[];
                })
            );
        }
    }
    

    /**
     * Agregar usuario
     * @param userModel 
     * @returns Usuario agregado
     */
    add(userModel: UserModel): Observable<UserModel> {
        return this.http.post<any>(environment.urlBack + `/users`, userModel);
    }

    /**
     * Actualizar usuario
     * @param id 
     * @param userModel 
     * @returns Usuario actualizado
     */
    update(id: number, userModel: UserModel): Observable<UserModel> {
        return this.http.put<any>(environment.urlBack + `/users/${id}`, userModel);
    }

    /**
     * Borrar usuario
     * @param id 
     * @returns Usuario borrado
     */
    delete(id: number): Observable<UserModel> {
        return this.http.delete<any>(environment.urlBack + `/users/${id}`);
    }


    /**
     * Vincular usuario - libro
     * @param idUser 
     * @param idBook 
     * @returns Libro vinculado
     */
    linkModels(idUser: number, idBook:number): Observable<BookModel> {
        let library = {
            idUser : idUser,
            idBook : idBook
        };
        return this.http.post<any>(environment.urlBack + `/library/`, library);
    }


}
