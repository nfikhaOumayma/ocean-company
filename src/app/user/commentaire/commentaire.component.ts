import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from '../../classeBateau/commentaire';
@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  @Input()cmt!: Commentaire;
  constructor() { }

  ngOnInit(): void {
  }
}


