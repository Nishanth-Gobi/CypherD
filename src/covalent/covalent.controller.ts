import { Controller, Get, Param } from '@nestjs/common';
import { CovalentService, chain_name_id_map } from './covalent.service';

@Controller('covalent')
export class CovalentController {
  constructor(private readonly covalentService: CovalentService) {}

  @Get('balance/:chain_name')
  async getBalance(@Param('chain_name') chain_name: string) {
    // return 'hello';
    const result = await this.covalentService.getChainBalance(
      chain_name_id_map[chain_name],
      '0x6AE65a7033a84bb36778fEA6607A25a0d6c8EE50',
      'ckey_38818174186943dabc55e9832c0',
    );
    return result;
  }
}
