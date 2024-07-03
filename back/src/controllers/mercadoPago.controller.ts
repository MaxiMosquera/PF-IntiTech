import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { MercadoPagoService } from 'src/services/mercadoPago.service';

@Controller('mercadopago')
export class MercadoPagoController {
  constructor(private readonly mercadoPagoService: MercadoPagoService) {}

  @Post()
  createOrder(@Body() body: any) {
    return this.mercadoPagoService.createPreference(body);
  }

  @Get('success')
  success(@Res() res) {
    console.log('success');
    res.redirect('http://localhost:3001/products');
  }

  @Get('failure')
  failure(@Query() query) {
    console.log("Query:", query);
    return 'failure';
  }

  @Get('pending')
  pending() {
    return 'pending';
  }
}