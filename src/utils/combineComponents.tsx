import React, { ReactNode } from 'react';

export function combineProviders(providers: ReactNode[]): React.FC {
  const CombinedProvider: React.FC = ({ children }) => {
    return providers.reduceRight((child, Provider) => {
      return <Provider children={child} />;
    }, children);
  };

  return CombinedProvider;
}
