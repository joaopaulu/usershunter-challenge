import { AxiosRequestConfig } from 'axios';
import UserFilter, { UserFilterData } from 'core/components/FilterUser';
import PaginationUser from 'core/components/PaginationUser';
import { requestBackend } from 'core/utils/request';
import { UserList } from 'core/utils/types/user';
import { NodePage } from 'core/utils/types/vendor/node';
import { useCallback, useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import './styles.scss';

type ControlComponentsData = {
  activePage: number;
  filterData: UserFilterData;
};

const List = () => {
  const [page, setPage] = useState<NodePage<UserList>>();

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

    console.log(getUser);

    requestBackend(config).then(response => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="user-crud-container">
      <div className="user-crud-bar-container">
        <UserFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.results.map(user => (
          <div key={user.id} className="col-sm-6 col-md-12">
            <UserCard user={user} onDelete={getUser} />
          </div>
        ))}
      </div>
      <PaginationUser
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={6}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default List;
