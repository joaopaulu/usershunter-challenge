import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { makeRequestPost } from 'core/utils/request';
import { User } from 'core/utils/types/user';
import './styles.scss';

type FormProps = {
  user: User | null;
};

const Form: React.FC<FormProps> = ({ user }) => {
  const { register, handleSubmit } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async data => {
    const requestData: User = {
      first: user?.first || '',
      last: user?.last || '',
      email: user?.email || '',
      phone: user?.phone || '',
      picture: user?.picture || '',
      street: user?.street || '',
      city: user?.city || '',
      state: user?.state || '',
      postcode: user?.postcode || '',
    };

    try {
      await makeRequestPost({
        url: '/users/:id',
        data: requestData,
      });
      toast.info('Usuário cadastrado com sucesso');
    } catch (error) {
      toast.error('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="user-crud-container">
      <div className="base-card user-crud-form-card">
        <h1 className="user-crud-form-title">Cadastrar Usuário</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('first')}
                type="text"
                className="form-control base-input"
                placeholder="Nome"
                name="first"
                defaultValue={user?.first}
              />
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('last')}
                type="text"
                className="form-control base-input"
                placeholder="Sobrenome"
                name="last"
                defaultValue={user?.last}
              />
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('email')}
                type="email"
                className="form-control base-input"
                placeholder="E-mail"
                name="email"
                defaultValue={user?.email}
              />
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('phone')}
                type="phone"
                className="form-control base-input"
                placeholder="Telefone"
                name="phone"
                defaultValue={user?.phone}
              />
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('picture')}
                type="text"
                className="form-control base-input"
                placeholder="URL da Foto"
                name="picture"
                defaultValue={user?.picture}
              />
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('postcode')}
                type="text"
                className="form-control base-input"
                placeholder="CEP"
                name="postcode"
                defaultValue={user?.postcode}
              />
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('city')}
                type="text"
                className="form-control base-input"
                placeholder="Cidade"
                name="city"
                defaultValue={user?.city}
              />
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('state')}
                type="text"
                className="form-control base-input"
                placeholder="Estado"
                name="state"
                defaultValue={user?.state}
              />
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('street')}
                type="text"
                className="form-control base-input"
                placeholder="Rua"
                name="street"
                defaultValue={user?.street}
              />
            </div>
          </div>

          <div className="user-crud-buttons-container">
            <button className="btn btn-primary user-crud-button text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
