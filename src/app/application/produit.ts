export class Produit {


constructor ( private _id:number,private _libelle:string){}
public get id():number
{
    return this._id;
}
public get libelle():string
{
    return this._libelle;
}

public set id(v:number)
{
    this._id=v;
}
public set libelle(v:string)
 {
     this._libelle=v;
 }
}
