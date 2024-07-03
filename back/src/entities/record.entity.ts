import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { CartItem } from "./cartItem.entity";
import { User } from "./user.entity";

@Entity({name : "record"})
export class Record {
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid();

    @Column({nullable : false})
    totalPrice : number

    @OneToMany(()=>CartItem, cartItem => cartItem.record)
    @JoinColumn()
    cartItems: CartItem[];

    @ManyToOne(()=>User, user => user.record)
    @JoinColumn()
    user : User;
}
