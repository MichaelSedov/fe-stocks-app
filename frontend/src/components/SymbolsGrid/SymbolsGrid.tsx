import { useEffect } from 'react';
import './symbolsGrid.css';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import SymbolCard from '../SymbolCard';

type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
  activeSymbol: string | null;
};

const SymbolsGrid = ({ onSymbolClick, activeSymbol }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  const gridClassName = `symbolsGrid ${activeSymbol ? 'symbolsGrid--selected' : ''}`;

  return (
    <div className={gridClassName}>
      {stockSymbols.map((id, i) => (
        <SymbolCard price={prices[id]} onClick={onSymbolClick} key={id} id={id} isSelected={activeSymbol === id} />
      ))}
    </div>
  );
};

export default SymbolsGrid;
