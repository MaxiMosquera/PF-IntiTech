import { Injectable } from '@nestjs/common';
import { preference } from 'src/config/mercadopago';
import { ItemDto } from 'src/dto/item.dto';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.env' });

@Injectable()
export class MercadoPagoService {
  constructor() {}

  async createPreference(body: any) {
    
    const preferenceData = {
      items: body.items.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        unit_price: item.unit_price,
      })),
      back_urls: {
        success: process.env.MERCADOPAGO_BACK_URL_SUCCESS,
        failure: process.env.MERCADOPAGO_BACK_URL_FAILURE,
        pending: process.env.MERCADOPAGO_BACK_URL_PENDING,
      },
      auto_return: 'approved',
    };

    try {
      const response = await preference.create({body: preferenceData });
      return { preferenceId: response.id }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}