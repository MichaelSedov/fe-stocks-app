import { useCallback } from 'react';
import './symbolsView.css';
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectActiveSymbol, setActiveSymbol } from '@/store/dashboardOptionsSlice';

const SymbolsView = () => {
  const dispatch = useAppDispatch();
  const activeSymbol = useAppSelector(selectActiveSymbol);

  const handleSymbolClick = useCallback(
    (symbolId: string) => {
      dispatch(setActiveSymbol(activeSymbol === symbolId ? null : symbolId));
    },
    [dispatch, activeSymbol]
  );

  return (
      <div className="symbolsView">
        <DesktopInfo/>
        <div className="symbolsView__content">
          <div className="symbolsView__chart">
            <h3>PRICE HISTORY</h3>
            <PriceChart symbolId={activeSymbol} />
          </div>
          <div className="symbolsView__cards">
            <SymbolsGrid activeSymbol={activeSymbol} onSymbolClick={handleSymbolClick}/>
          </div>
        </div>
      </div>
  );
};

export default SymbolsView;
