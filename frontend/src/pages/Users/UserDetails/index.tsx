import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { requestBackend } from 'core/utils/request';
import { UserList } from 'core/utils/types/user';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserDetailLoader from '../components/Loaders/UserDetailLoader';
import './styles.scss';

type ParamsType = {
  userId: string;
};

const UserDetails = () => {
  const { userId } = useParams<ParamsType>();
  const [user, setUser] = useState<UserList | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    requestBackend({ url: `users/${userId}` })
      .then(response => {
        setUser(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return <UserDetailLoader />;
  }

  return (
    <div className="user-details-container">
      <div className="card-base border-radius-20 user-details">
        <Link to="/users" className="user-details-goback">
          <ArrowIcon className="icon-goback" />
          <h1 className="text-goback">voltar</h1>
        </Link>
        <div className="user-details-info">
          {user && (
            <div className="user-details-card text-center">
              <h1>{user.name.first}</h1>
              <img
                className="user-details-image"
                src={user.picture.large}
                alt={user.name.first}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
