interface CryptoPrice {
  bitcoin: {
    gbp: number;
  };
}

export const fetchBitcoinPrice = async (): Promise<number> => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp&include_24hr_change=true'
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Bitcoin price');
    }
    
    const data: CryptoPrice = await response.json();
    return data.bitcoin.gbp;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    // Fallback price if API fails
    return 45000;
  }
};

export const formatBitcoinAmount = (gbpAmount: number, btcPrice: number): string => {
  const btcAmount = gbpAmount / btcPrice;
  return btcAmount.toFixed(8);
};

export const formatCurrency = (amount: number, currency: string = 'GBP'): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};