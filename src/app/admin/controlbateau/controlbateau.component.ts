import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { bateau } from '../../classeBateau/bateau';
import { bateauService } from '../../services/Bateau.service';

@Component({
  selector: 'app-controlbateau',
  templateUrl: './controlbateau.component.html',
  styleUrls: ['./controlbateau.component.css']
})
export class ControlbateauComponent implements OnInit {

   registerForm!:FormGroup 
  bateau!:bateau[];
 
  constructor(private fb:FormBuilder,private S:bateauService,private router:Router) { }

  ngOnInit(): void {
    this.S.getbateaux().subscribe ((data) =>(this.bateau = data));
    this.registerForm=this.fb.nonNullable.group({
      libelle:['',[Validators.required,Validators.pattern('^[A-Za-z]+$')]],
      marque:['',[Validators.required,Validators.pattern('^[A-Z a-z]+$')]],
      categorie:['',Validators.required],
      etat:['false'],
      image:['',[Validators.required,Validators.pattern('^[a]{1}[s]{2}[e]{1}[t]{1}[s]{1}[/]{1}[b]{1}[a]{1}[t]{1}[e]{1}[a]{1}[u]{1}[1-9]{1}[.]{1}[a-z]*$')]],
      prix:['',Validators.required],
      desciption:['',Validators.required],
      comments:this.fb.array([])
  })
}
public get comments(){
  return this.registerForm.get('comments') as FormArray
}
ajoutercomments(){
  this.comments.push(this.fb.group({
    etat:['',],
    date:['',]
  }))
}
public get libelle(){ 
  return this.registerForm.get('libelle'); }
public get marque(){ 
  return this.registerForm.get('marque'); }
public get categorie(){ 
  return this.registerForm.get('categorie'); }
   public get image(){ 
    return this.registerForm.get('image'); }
public get prix(){ 
      return this.registerForm.get('prix'); }
isValidPattern(){
        return this.registerForm.controls['marque'].errors?.['pattern'] &&
        this.registerForm.controls['marque'].touched;
        }
libelleisValid(){
        return this.registerForm.controls['libelle'].errors?.['pattern'] &&
        this.registerForm.controls['libelle'].touched;
        }
imageisValid(){
          return this.registerForm.controls['image'].errors?.['pattern'] &&
          this.registerForm.controls['image'].touched;
  }

  onAjouter(){
   this.S.addbateau(this.registerForm.value).subscribe(data=>this.bateau.push(data));
  }
  
  onVider(){
    this.registerForm.reset();
  }
  onModifier(id:number){
    this.S.updateBateau(id,this.registerForm.value)
    .subscribe(data=>console.log(data));
  }
  onSupprimer(id:number){
    this.S.deletebateau(id).subscribe((result)=>
    {
    this.ngOnInit();
  });
  }
  onSubmit(): void{
      console.log(this.registerForm.value);
  }
 
}


