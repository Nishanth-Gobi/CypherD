import { Controller, Get, Param } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CovalentService } from './covalent.service';

@Controller('covalent')
export class CovalentController {
  constructor(
    private readonly covalentService: CovalentService,
    private config: ConfigService,
  ) {}

  @Get('balance/:wallet_address')
  async getBalance(@Param('wallet_address') wallet_address: string) {
    const result = await this.covalentService.getChainBalance(
      wallet_address,
      this.config.get<string>('COVALENT_API_KEY'),
    );
    return result;
  }
}
