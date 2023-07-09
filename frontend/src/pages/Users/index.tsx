import { AxiosRequestConfig } from 'axios';
import UserFilter, { UserFilterData } from 'core/components/FilterUser';
import PaginationUser from 'core/components/PaginationUser';
import { requestBackend } from 'core/utils/request';
import { UserList } from 'core/utils/types/user';
import { NodePage } from 'core/utils/types/vendor/node';
import { useCallback, useEffect, useState } from 'react';
import UserCardLoader from './components/Loaders/UserCardLoader';
import UserCard from './components/UserCard';
import './styles.scss';

type ControlComponentsData = {
  activePage: number;
  filterData: UserFilterData;
};

const Users = () => {
  const [page, setPage] = useState<NodePage<UserList>>();
  const [isLoading, setIsLoading] = useState(false);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { first: '', last: '', state: '' },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: UserFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getUser = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/users',
      params: {
        page: controlComponentsData.activePage,
        limit: 3,
        first: controlComponentsData.filterData.first,
        last: controlComponentsData.filterData.last,
        state: controlComponentsData.filterData.state,
      },
    };
    setIsLoading(true);

    requestBackend(config)
      .then(response => setPage(response.data))
      .finally(() => setIsLoading(false));
  }, [controlComponentsData]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <div className="user-container">
        <div className="user-crud-bar-container">
          <UserFilter onSubmitFilter={handleSubmitFilter} />
        </div>
        <div className="row">
          {isLoading ? (
            <UserCardLoader />
          ) : (
            page?.results.map(user => (
              <UserCard user={user} key={user.id} onDelete={getUser} />
            ))
          )}
        </div>
        <PaginationUser
          forcePage={page?.number}
          pageCount={page ? page.totalPages : 0}
          range={6}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Users;
