import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bateau } from '../../classeBateau/bateau';
import { bateauService } from '../../services/Bateau.service';

@Component({
  selector: 'app-selectedbateau',
  templateUrl: './selectedbateau.component.html',
  styleUrls: ['./selectedbateau.component.css']
})
export class SelectedbateauComponent implements OnInit {
 
constructor(private activatedRouter:ActivatedRoute,private bateauService:bateauService) { }

bateau!:bateau;
id:number=0;
  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.bateauService.getbateauById(this.id).subscribe((data)=>{this.bateau=data;});
  }
  
}
