import { generateList } from 'core/utils/list';
import React from 'react';
import ContentLoader from 'react-content-loader';

const ClientCardLoader = () => {
  const loaderItems = generateList(3);
  return (
    <>
      {loaderItems.map(item => (
        <ContentLoader
          key={item}
          speed={1}
          width={728}
          height={136}
          viewBox="0 0 728 136"
          backgroundColor="#ecebeb"
          foregroundColor="#d6d2d2"
        >
          <rect x="0" y="2" rx="10" ry="10" width="728" height="130" />
        </ContentLoader>
      ))}
    </>
  );
};

export default ClientCardLoader;
