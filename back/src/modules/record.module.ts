import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { RecordController } from "src/controllers/record.controller";
import { CartItem } from "src/entities/cartItem.entity";
import { Record } from "src/entities/record.entity";
import { CartRepository } from "src/repositories/cart.repository";
import { RecordRepository } from "src/repositories/record.repository";
import { UserRepository } from "src/repositories/user.repository";
import { RecordService } from "src/services/record.service";
import {Cart} from "src/entities/cart.entity";
import { PanelForSaleRepository } from "src/repositories/panelForSale.repository";
import { PanelForSale } from "src/entities/panelForSale.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Record, CartItem , User , Cart , PanelForSale])],
    controllers: [RecordController],
    providers: [RecordService , RecordRepository , UserRepository , CartRepository , PanelForSaleRepository],
    
})

export class RecordModule {}