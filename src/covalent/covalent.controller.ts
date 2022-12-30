import { Controller, Get, Param } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CovalentService, chain_name_id_map } from './covalent.service';

@Controller('covalent')
export class CovalentController {
  constructor(
    private readonly covalentService: CovalentService,
    private config: ConfigService,
  ) {}

  @Get('balance/:wallet_address/:chain_name')
  async getBalance(
    @Param('wallet_address') wallet_address: string,
    @Param('chain_name') chain_name: string,
  ) {
    const result = await this.covalentService.getChainBalance(
      chain_name_id_map[chain_name],
      wallet_address,
      this.config.get<string>('COVALENT_API_KEY'),
    );
    return result;
  }
}
