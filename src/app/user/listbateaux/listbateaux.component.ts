import { Component, OnInit } from '@angular/core';
import { bateau } from '../../classeBateau/bateau';
import { bateauService } from '../../services/Bateau.service';
@Component({
  selector: 'app-listbateaux',
  templateUrl: './listbateaux.component.html',
  styleUrls: ['./listbateaux.component.css']
})
export class ListbateauxComponent implements OnInit {
  lesbateaux!:bateau[];
  search:string='';
  searchbrand:string='';
  constructor(private bateauService:bateauService) { };
  ngOnInit(): void {
    this.bateauService
        .getbateaux()
        .subscribe ((data) =>(this.lesbateaux = data));
  }
  // filtration selon catégorie
filter(){
if(this.search==''){
  this.bateauService.getbateaux().subscribe((data)=>{
    this.lesbateaux=data;});
  }
  else{
    this.lesbateaux=this.lesbateaux.filter((res)=>
    res.categorie.toLowerCase().includes(this.search.toLowerCase()));
  }
}
  // filtration selon marque

filterbymarque(){
  if(this.searchbrand==''){
    this.bateauService.getbateaux().subscribe((data)=>{
      this.lesbateaux=data;});
    }
    else{
      this.lesbateaux=this.lesbateaux.filter((m)=>
      m.marque.toLowerCase().includes(this.searchbrand.toLowerCase()));
    }
  }
}

 

