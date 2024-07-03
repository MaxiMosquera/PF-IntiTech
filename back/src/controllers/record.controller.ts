import { Controller, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { RecordService } from "src/services/record.service";

@Controller()

export class RecordController {
    constructor(private readonly recordService: RecordService) {}
    @Get()
    getAllRecords() {
        return this.recordService.getAllRecords()
    }

    @Get(':id')
    getRecordById(@Param('id' , ParseUUIDPipe) id: string) {
        return this.recordService.getRecordById(id)
    }

    @Post(':id')
    createRecord(@Param('id' , ParseUUIDPipe) id: string) {
        return this.recordService.createRecord(id)
    }


}