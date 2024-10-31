export const formatNumber = (value: number): string => {
  const absValue = Math.abs(value);
  let formattedNumber: string;
  let suffix: string = '';

  if (absValue >= 1e12) {
    formattedNumber = (value / 1e12).toFixed(1);
    suffix = 'T';
  } else if (absValue >= 1e9) {
    formattedNumber = (value / 1e9).toFixed(0);
    suffix = 'B';
  } else if (absValue >= 1e6) {
    formattedNumber = (value / 1e6).toFixed(0);
    suffix = 'M';
  } else if (absValue >= 1e3) {
    formattedNumber = (value / 1e3).toFixed(0);
    suffix = 'K';
  } else {
    formattedNumber = value.toFixed(0).toString();
  }

  return `$${formattedNumber}${suffix}`;
}
