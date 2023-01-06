/* eslint-disable prettier/prettier */
import axios, { AxiosResponse } from 'axios';
import { CovalentService } from './covalent.service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CovalentService', () => {
  let service: CovalentService;

  beforeEach(() => {
    service = new CovalentService();
  });

  describe('getChainBalance', () => {
    it('should get the balance for a wallet address', async () => {

      const walletAddress = '0x12345';
      const apiKey = 'abcdef';
      const apiResponse = {
        data: {
          address: "0x6ae65a7033a84bb36778fea6607a25a0d6c8ee50",
          updated_at: "2023-01-06T15:18:39.069824242Z",
          next_update_at: "2023-01-06T15:23:39.069824572Z",
          quote_currency: "USD",
          chain_id: 1,
          items: [
            {
              "contract_decimals": 6,
              "contract_name": "USD Coin",
              "contract_ticker_symbol": "USDC",
              "contract_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
              "supports_erc": [
                  "erc20"
              ],
              "logo_url": "https://logos.covalenthq.com/tokens/1/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
              "last_transferred_at": "2022-10-25T15:55:35Z",
              "native_token": false,
              "type": "stablecoin",
              "balance": "3000000",
              "balance_24h": "3000000",
              "quote_rate": 0.999675,
              "quote_rate_24h": null,
              "quote": 2.9990249,
              "quote_24h": null,
              "nft_data": null
          },
          ],
          pagination: null
        },
        error: false,
        error_message: null,
        error_code: null
      };
      const mockResponse: AxiosResponse = {
        data: apiResponse,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };
      const functionResponse = {
        updated_at: '2023-01-06T15:18:39.069824242Z',
        balances: [
          {
            name: 'USD Coin',
            ticker: 'USDC',
            balance: 3,
            logo_url: 'https://logos.covalenthq.com/tokens/1/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
            holding: 2.999025,
            is_verified: true,
            chain_id: 1,
          },
          {
            name: 'USD Coin',
            ticker: 'USDC',
            balance: 3,
            logo_url: 'https://logos.covalenthq.com/tokens/1/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
            holding: 2.999025,
            is_verified: true,
            chain_id: 1,
          },
          {
            name: 'USD Coin',
            ticker: 'USDC',
            balance: 3,
            logo_url: 'https://logos.covalenthq.com/tokens/1/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
            holding: 2.999025,
            is_verified: true,
            chain_id: 1,
          },
        ],
        total_balance: 8.997075,
      };

      mockedAxios.get.mockResolvedValue(mockResponse);

      const result = await service.getChainBalance(walletAddress, apiKey);

      expect(axios.get).toHaveBeenCalledTimes(3);
      expect(result).toEqual(functionResponse);
    });
  });
});
