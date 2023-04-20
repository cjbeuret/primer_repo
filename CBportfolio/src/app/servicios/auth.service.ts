import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import{BehaviorSubject, Observable} from 'rxjs'; //librería de programación reactiva
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //creamos una variable donde vamosa tener la url de nuetra API
  url='http://localhost:3000/api'; //La url q corresponda en cada caso
  //tb crea un objeto dde va a especifica el BehaviorSubject
  currentUserSubject: BehaviorSubject<any>
  //token: any;

  //inyecta el servicio HttpClient en constructor
  constructor(private http: HttpClient, private router: Router) { 
    console.log("servicio corriendo");
    //debo inicializar la variable currentUserSubject
    //lo instancio con lo q voy a almacenar en el sesion storage (usuario actual o vacío). 
    //P/almacenar utilizo el método parse de JSON
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

  //creamos el método Iniciar Sesion
  //ponemos Observable p q los controladores puedan suscribir 
  IniciarSesion(credenciales:any):Observable<any> 
  {
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      //llevamos al storage la data (lo q devuelve la API): token
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      //usar el metodo next para pasarle la data, para asignarle los datos
      this.currentUserSubject.next(data);

      return data;
    }))
  }
  
  //crear una propiedad UsuarioAutenticado
  get UsuarioAutenticado()
  {
    return this.currentUserSubject.value;
  }

}