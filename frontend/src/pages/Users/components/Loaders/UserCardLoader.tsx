import { generateList } from 'core/utils/list';
import ContentLoader from 'react-content-loader';

const UserCardLoader = () => {
  const loaderItems = generateList(5);
  return (
    <>
      {loaderItems.map(item => (
        <ContentLoader
          key={item}
          speed={2}
          width={700}
          height={70}
          viewBox="0 0 700 70"
          backgroundColor="#ecebeb"
          foregroundColor="#d6d2d2"
        >
          <rect x="0" y="2" rx="20" ry="20" width="700" height="70" />
        </ContentLoader>
      ))}
    </>
  );
};

export default UserCardLoader;
