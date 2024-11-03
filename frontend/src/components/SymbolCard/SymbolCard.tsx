import { memo } from 'react';
import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import usePriceChangeAnimation from '@/hooks/usePriceChangeAnimation';
import TrendArrow from './src/TrendArrow';
import SymbolCardDetails from './src/SymbolCardDetails';
import SymbolCardPrice from './src/SymbolCardPrice';
import { classNames } from '@/utils/utils';


type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  isSelected: boolean;
};

const SymbolCard = memo(({ id, onClick, isSelected }: SymbolCardProps) => {
  const price = useAppSelector((state) => state.prices[id]);
  const { trend, companyName, marketCap, industry } = useAppSelector(
    (state) => state.stocks.entities[id], 
    (prev, next) => prev.trend === next.trend && prev.companyName === next.companyName
  );
  const showCardInfo = useAppSelector(selectShowCardInfo);

  const { shake, flashClass } = usePriceChangeAnimation(price);

  const handleOnClick = () => {
    onClick(id);
  };

  const classes = classNames(
    'symbolCard',
    shake ? 'symbolCard__shake' : '',
    isSelected ? 'selected' : '',
    flashClass || ''
  );

  return (
    <div onClick={handleOnClick} className={classes}>
      <div className="symbolCard__header">
        {id}
        {trend && <TrendArrow trend={trend} />}
      </div>
      <SymbolCardPrice price={price} />
      {showCardInfo && (
        <SymbolCardDetails
          companyName={companyName}
          industry={industry}
          marketCap={marketCap}
        />
      )}
    </div>
  );
});
export default SymbolCard;
