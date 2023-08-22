import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent {
  
  @Input() user: any;
  imgUrl: string;
  firstName: string;
  email: string;
  id: number;

  constructor() {
    this.imgUrl = '';
    this.firstName = ''; 
    this.email = '';
    this.id = 0;
  }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
   /*  this.imgUrl = this.user._links.avatar.href; */
    this.id = this.user.id;
  }

}
