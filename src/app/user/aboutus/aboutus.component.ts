import { Component, OnInit } from '@angular/core';
import { bateauService } from 'src/app/services/Bateau.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  accord:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
afficherPlus(){
  if (this.accord==false){
    this.accord=true;
  }else{this.accord=false;}

}
}
