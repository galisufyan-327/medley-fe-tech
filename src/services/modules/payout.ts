import PluginService from "."

const thirdPartyService = PluginService('/analytics/tech-test')

interface PayoutParams {
  limit?: number;
  page?: number;
  query?: string;
}

class PayoutService {
  static getPayouts(params: PayoutParams) {
    return thirdPartyService({
      method: 'GET',
      url: '/payouts',
      params
    })
  }

  static searchPayouts(params: PayoutParams) {
    return thirdPartyService({
      method: 'GET',
      url: '/search',
      params
    })
  }
}

export default PayoutService