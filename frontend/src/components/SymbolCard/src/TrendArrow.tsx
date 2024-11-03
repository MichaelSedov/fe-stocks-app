import React from 'react';
import './trendArrow.css';
import ArrowUpImage from '@/assets/up.png';
import ArrowDownImage from '@/assets/down.png';

type TrendArrowProps = {
  trend: 'UP' | 'DOWN' | null;
};

const TrendArrow: React.FC<TrendArrowProps> = ({ trend }) => {
  if (trend === 'UP') {
    return <img src={ArrowUpImage} alt="Up Arrow" className="trendArrow" />;
  }
  if (trend === 'DOWN') {
    return <img src={ArrowDownImage} alt="Down Arrow" className="trendArrow" />;
  }
  return null;
};

export default TrendArrow;
