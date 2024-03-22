import { User } from "../../employee/model/user-dto";
import { FamilyDetails } from "./family-detail";
import { InsurancePlan } from "./insurance-plan";


export class Insurance {
    id:string;
    card_number:string;
    userid:string;
    user:User=new User();
    familyid:string;
    status:string;
    reason:string;
    familydetails:FamilyDetails=new FamilyDetails();
    description:string;
    insuranceplanid:string;
    insuranceplan: InsurancePlan=new InsurancePlan();
    numberofpersonscovered:number;
}
