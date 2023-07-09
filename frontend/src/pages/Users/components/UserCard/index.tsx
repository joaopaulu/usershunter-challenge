import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'core/utils/request';
import { UserList } from 'core/utils/types/user';
import { Link } from 'react-router-dom';
import './styles.scss';

type UserCardProps = {
  user: UserList;
  onDelete: Function;
};

const UserCard = ({ user, onDelete }: UserCardProps) => {
  const handleDelete = (userId: string) => {
    if (!window.confirm('Tem certeza que deseja deletar')) {
      return;
    }
    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/users/${userId}`,
      withCredentials: true,
    };
    requestBackend(config).then(() => {
      onDelete();
    });
  };

  return (
    <div className="row card-base border-radius-10 user-card">
      <div className="col-2 image-info">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="user-card-image"
        />
      </div>
      <div className="col-7 user-info">
        <h6 className="user-name">
          {user.name.first} {user.name.last}
        </h6>
        <h6 className="user-infos">Email: {user.email} </h6>
      </div>
      <div className="crud-card-buttons-container">
        <button
          onClick={() => handleDelete(user.id)}
          className="btn btn-outline-danger crud-card-button crud-card-button-first"
        >
          EXCLUIR
        </button>
        <Link to={`/admin/servidor/${user.id}`}>
          <button className="btn btn-outline-secondary crud-card-button">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
