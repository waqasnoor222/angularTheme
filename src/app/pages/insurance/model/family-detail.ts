import { User } from "../../employee/model/user-dto";

export class FamilyDetails {
    id:string='';
    full_name:string='';
    userid:string='';
    dateofbirth:string='';
    have_insurance:number=0;
    have_disease:number=0;
    disease:string='';
    user:User;
    description:string='';
    relation:string='';
}
