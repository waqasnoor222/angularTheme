import { EmploymentType } from "./employement-type";

export class Designation {
    id:string='';
    title:string;
    description:string='';
    emptype:string='';
    employementType:EmploymentType = new EmploymentType();
}