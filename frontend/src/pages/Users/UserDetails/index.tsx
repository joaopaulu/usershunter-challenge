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
            <>
              <section className="section about-section gray-bg" id="about">
                <div className="container">
                  <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6 user-details-texts">
                      <h2>
                        {user.name.first} {user.name.last}
                      </h2>
                      <p>E-mail:{user.email}</p>
                      <ul className="icon-list">
                        <li className="text-muted">Telefone: ({user.phone})</li>
                        <li className="text-muted">
                          CEP: ({user.location.postcode})
                        </li>
                        <li className="text-muted">
                          Estado: ({user.location.state})
                        </li>
                        <li className="text-muted">
                          Cidade: ({user.location.city})
                        </li>
                        <li className="text-muted">
                          Rua: ({user.location.street.name})
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6">
                      <div className="user-details-image">
                        <img src={user.picture.large} alt={user.name.first} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
