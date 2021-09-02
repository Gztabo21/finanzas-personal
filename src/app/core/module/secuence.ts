import { SecuenceService }  from '../service/secuence.service';

export class Secuence {
    id : number;
    name:string;
    nextNumber: number;
    createDate: Date;
    constructor(public secuenceService:SecuenceService ){}
 /*    nextSecuence(secuence:Secuence){
        return this.secuenceService.getSecuence()
    } */
}