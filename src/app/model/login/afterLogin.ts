import { RolePermission } from "./role-permision";

export class AfterLogin {
    userid:string;
    role:string;
    role_permission:string;
    tblrole_permission:RolePermission[]=[];
    token:string;
}
