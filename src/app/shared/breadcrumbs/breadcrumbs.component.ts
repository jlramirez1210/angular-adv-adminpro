import { Component } from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {
  public titulo!: string;
  public tituloSubs$;

  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe( ({ data }) =>{
      this.titulo = data.titulo;
      document.title = 'jorge';
    });
  }

  getArgumentosRuta(){
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }
}
