import { Employee } from "../../employee/model/employee-dao";

export class Employment {
    id:string='';
    userid:string='';
    company_name:string='';
    start_date:string='';
    end_date:string='';
    designation:string='';
    salary:number=0;
    job_description:string='';
    reason:string='';
    user:Employee;
}