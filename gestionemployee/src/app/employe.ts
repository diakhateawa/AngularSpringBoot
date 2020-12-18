import {Departement} from './departement';

export class Employe {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  adresse: string;
  departement: Departement;

  constructor(id: number, prenom: string, nom: string, email: string, telephone: string, adresse: string, departement: Departement) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
    this.telephone = telephone;
    this.adresse = adresse;
    this.departement = departement;
  }

}
