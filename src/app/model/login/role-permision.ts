import { Permission } from "../permission";
import { UserRole } from "./user-role";


export class RolePermission 
{
    id:string;
    permissionid:string;
    permission:Permission=new Permission();
    roleid:string;
    role:UserRole= new UserRole();
    permission_type:string;
    allow:Boolean=false;
}