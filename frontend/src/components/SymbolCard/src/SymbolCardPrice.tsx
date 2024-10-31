import React from 'react';
import './symbolCardPrice.css';
import { formatNumber } from '@/utils/formatters';

type SymbolCardPriceProps = {
  price: number | null;
};

const SymbolCardPrice: React.FC<SymbolCardPriceProps> = ({ price }) => {
  return (
    <div className="price">
      <div className="price__title">Price:</div>
      <div className="price__value">
        {price ? formatNumber(price) : '--'}
      </div>
    </div>
  );
};

export default SymbolCardPrice;
