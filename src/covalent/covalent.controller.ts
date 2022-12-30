import { Controller, Get, Param } from '@nestjs/common';
import { CovalentService, chain_name_id_map } from './covalent.service';

@Controller('covalent')
export class CovalentController {
  constructor(private readonly covalentService: CovalentService) {}

  @Get('balance/:wallet_address/:chain_name')
  async getBalance(
    @Param('wallet_address') wallet_address: string,
    @Param('chain_name') chain_name: string,
  ) {
    const result = await this.covalentService.getChainBalance(
      chain_name_id_map[chain_name],
      wallet_address,
      'ckey_38818174186943dabc55e9832c0',
    );
    return result;
  }
}
