import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Client } from 'core/types/Client';
import { Usuarios } from 'core/types/Usuarios';
import { makeRequestPost } from 'core/utils/request';
import './styles.scss';

type FormProps = {
  client: Client | null;
};

const Form: React.FC<FormProps> = ({ client }) => {
  const { register, handleSubmit } = useForm<Usuarios>();

  const onSubmit: SubmitHandler<Usuarios> = async data => {
    const requestData: Usuarios = {
      first: client?.name.first || '',
      last: client?.name.last || '',
      email: client?.email || '',
      phone: client?.phone || '',
      picture: client?.picture.large || '',
      street: client?.location.street.name || '',
      city: client?.location.city || '',
      state: client?.location.state || '',
      postcode: client?.location.postcode || '',
    };

    try {
      await makeRequestPost({
        url: '/users',
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
                defaultValue={client?.name.first}
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
                defaultValue={client?.name.last}
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
                defaultValue={client?.email}
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
                defaultValue={client?.phone}
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
                defaultValue={client?.picture.large}
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
                defaultValue={client?.location.postcode}
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
                defaultValue={client?.location.city}
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
                defaultValue={client?.location.state}
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
                defaultValue={client?.location.street.name}
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
