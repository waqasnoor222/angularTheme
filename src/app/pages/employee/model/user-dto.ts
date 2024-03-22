import { UserRole } from "../../role/model/user-dto";
import { Designation } from "./designation-dao";

export class User {
    id: string='';
    full_name: string='';
    username: string='';
    personal_email: string='';
    official_email: string='';
    password: string='';
    address: string='';
    permanent_address: string='';
    google_location: string='';
    city: string='';
    gender: string='';
    phone_number1: string='';
    phone_number2: string='';
    dateofbirth: string;
    image:string='';
    have_children:number=0;
    have_disease:number=0;
    disease:string='';
    have_insurance:number=0;
    is_active:number=0;
    is_married: number=0;
    role_id: string='';
    role_name: string='';
    designation_id: string='';
    designation: Designation = new Designation();
    emp_type:string='';
    user_role:UserRole = new UserRole();
    slot_id:string='';
    enrollment_no:string='';
    unit:number;
    parentid:string='';
}
