import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" [routerLink]="['/']">Angular 2 demo</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"><a [routerLink]="['/']">Home</a></li>
        <li routerLinkActive="active"><a [routerLink]="['/products']">Product list</a></li>
        <li routerLinkActive="active"><a [routerLink]="['/shopping']">Shopping list</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
