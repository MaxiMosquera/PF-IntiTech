import { Injectable } from "@nestjs/common";
import { Record } from "src/entities/record.entity";
import { RecordRepository } from "src/repositories/record.repository";

@Injectable()

export class RecordService {

    constructor( private readonly recordRepository : RecordRepository) {}
    async createRecord(id : string): Promise<Record> {

        return this.recordRepository.createRecord(id);

    }

    async getAllRecords(): Promise<Record[]> {
        return this.recordRepository.getAllRecords();
    }

    async getRecordById(id : string): Promise<Record> {
        return this.recordRepository.getRecordById(id);
    }

}