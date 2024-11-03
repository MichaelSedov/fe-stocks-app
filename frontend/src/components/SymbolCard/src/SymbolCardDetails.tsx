import React from 'react';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import ListItem from '@/components/ListItem';
import { formatNumber } from '@/utils/formatters';

type SymbolCardDetailsProps = {
  companyName: string;
  industry: string;
  marketCap: number;
};

const SymbolCardDetails: React.FC<SymbolCardDetailsProps> = ({
  companyName,
  industry,
  marketCap,
}) => {
  return (
    <div className="symbolCard__details">
      <ListItem
        spacing="space-between"
        Icon={<CompanyIcon />}
        label={companyName}
      />
      <ListItem
        spacing="space-between"
        Icon={<IndustryIcon />}
        label={industry}
      />
      <ListItem
        spacing="space-between"
        Icon={<MarketCapIcon />}
        label={formatNumber(marketCap)}
      />
    </div>
  );
};

export default SymbolCardDetails;
