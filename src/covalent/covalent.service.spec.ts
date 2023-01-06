/* eslint-disable prettier/prettier */
import axios from 'axios';
import { CovalentService } from './covalent.service';

describe('CovalentService', () => {
  let service: CovalentService;

  beforeEach(() => {
    service = new CovalentService();
  });

  describe('getChainBalance', () => {
    it('should get the balance for a wallet address', async () => {
      // Mock the axios.get function to return a resolved promise with a predetermined value
      const getSpy = jest.spyOn(axios, 'get') as jest.Mock<Promise<any>>;
      getSpy.mockImplementation(() => Promise.resolve({ data: {} }));

      const walletAddress = '0x12345';
      const apiKey = 'abcdef';
      const result = await service.getChainBalance(walletAddress, apiKey);
      expect(result).toBeDefined();
      expect(result.updated_at).toBeDefined();
      expect(result.balances).toBeDefined();
      expect(result.total_balance).toBeDefined();
    });
  });
});
