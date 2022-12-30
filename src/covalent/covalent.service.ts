/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { set, get } from 'lodash';

export const chain_name_id_map = {
  ethereum: 1,
  polygon: 137,
  fantom: 250,
};

@Injectable()
export class CovalentService {
  constructor() {}

  async getChainBalance(
    chain_id: string,
    wallet_address: string,
    api_key: string,
  ) {
    const api_endpoint =
      'https://api.covalenthq.com/v1/' +
      chain_id +
      '/address/' +
      wallet_address +
      '/balances_v2/?key=' +
      api_key;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Access-Control-Allow-Origin',
      },
    };

    const { data } = await axios.get(api_endpoint, config);
    const balanceResponse = {
      updated_at: get(data, 'data.updated_at', ''),
      balances: [],
      total_balance: 0,
    };

    let total_balance = 0;
    for (const object of get(data, 'data.items', [])) {
      const balance = object.balance / Math.pow(10, object.contract_decimals);
      const holding = balance * object.quote_rate;

      const item = {};
      set(item, 'name', object.contract_name);
      set(item, 'ticker', object.contract_ticker_symbol);
      set(item, 'balance', balance);
      set(item, 'logo_url', object.logo_url);
      set(item, 'holding', holding);
      set(item, 'is_verified', object.quote_rate != null);

      total_balance += holding;

      balanceResponse.balances?.push(item);
    }
    set(balanceResponse, 'total_balance', total_balance);
    console.log(balanceResponse);
    return balanceResponse;
  }
}
