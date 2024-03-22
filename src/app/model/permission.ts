import { Module } from "./login/module";


export class Permission {
    id:string;
    title:string;
    moduleid:string;
    module:Module=new Module();
}