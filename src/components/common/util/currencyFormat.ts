const currencyFormat = (value: number, currency = 'USD'): string => {
  try {
    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    });

    return formatter.format(value / 100);
  } catch (error) {
    return value?.toString();
  }
};

export default currencyFormat;
