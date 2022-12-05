import { Commentaire } from "./commentaire";
export class bateau {
    
    constructor(
        public id :number,
        public libelle:string,
        public marque:string,
        public categorie:string,
        public prix:number,
        public image :String,
        public desciption:String,
        public comments:Commentaire[]){}
}

