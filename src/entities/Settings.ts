 import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
 import { v4 as uuid } from "uuid";

 @Entity("settings")
 export class Settings {

     @PrimaryColumn()
     id: string;    

     @Column()
     username: string;

     @Column()
     chat: boolean;

     @CreateDateColumn()
     updated_at: Date;

     @CreateDateColumn()
     created_at: Date;

     constructor() {
        !this.id ? this.id = uuid() : this.id;
        }
 }