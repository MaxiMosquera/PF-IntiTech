import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Record } from "src/entities/record.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()

export class RecordRepository {
    constructor( 
        @InjectRepository(Record) private readonly recordRepository: Repository<Record>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {}

    async createRecord(userId : string): Promise<Record> {
        const user = await this.userRepository.findOneBy({ id : userId });
        const record = this.recordRepository.create()
        const itemArray = user.cart.cartItems;
        for (const item of itemArray) {
            record.cartItems.push(item)
            record.totalPrice += item.totalPrice
        }
        this.recordRepository.save(record)
        user.record.push(record);
        this.userRepository.save(user);
        return record;
    }

    async getAllRecords(): Promise<Record[]> {
        return await this.recordRepository.find();
    }
    
    async getRecordById(id: string): Promise<Record> {

        const record  = await this.recordRepository.findOneBy({ id });

        if (!record){
            throw new NotFoundException('Record does not exist');
        }

        return record;
    }  
    
    




}