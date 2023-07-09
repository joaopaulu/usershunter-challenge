import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'core/utils/request';
import { UserList } from 'core/utils/types/user';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
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

    requestBackend(config)
      .then(() => {
        onDelete();
        toast.warning('Usuário removido com sucesso');
      })
      .catch(() => {
        toast.error('Erro ao excluir usuário');
      });
  };

  return (
    <>
      <div className="d-flex text-muted pt-2">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="bd-placeholder-img flex-shrink-0 me-2 rounded"
          width="32"
          height="32"
        />

        <div className="pb-1 mb-0 small lh-sm border-bottom w-100">
          <div className="d-flex justify-content-between">
            <strong className="text-gray-dark">
              {user.name.first} {user.name.last}
            </strong>
            <div className="btn-group">
              <div className="row">
                <div className="col mx-2">
                  <Link to={`/users/details/${user.id}`} key={user.id}>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Detalhes
                    </button>
                  </Link>
                </div>
                <div className="col mx-2">
                  <Link to={`/users/${user.id}`}>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Editar
                    </button>
                  </Link>
                </div>
                <div className="col mx-2">
                  <button
                    onClick={() => handleDelete(user.id)}
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span className="d-block user-text">
            {user.email} - {user.location.state}
          </span>
        </div>
      </div>
    </>
  );
};

export default UserCard;
