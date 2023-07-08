import { SubmitHandler, useForm } from 'react-hook-form';

import { Client } from 'core/types/Client';
import { Usuarios } from 'core/types/Usuarios';
import './styles.scss';

type FormProps = {
  client: Client | null;
};

const Form: React.FC<FormProps> = ({ client }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuarios>();
  const onSubmit: SubmitHandler<Usuarios> = data => console.log(data);

  const handleCancel = () => {
    console.log('clean');
  };

  return (
    <div className="user-crud-container">
      <div className="base-card user-crud-form-card">
        <h1 className="user-crud-form-title">Cadastrar Usuário</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('first', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.first ? 'is-invalid' : ''
                }`}
                placeholder="Nome"
                name="first"
                value={client?.name.first}
              />
              <div className="invalid-feedback d-block">
                {errors.first?.message}
              </div>
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('last', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.last ? 'is-invalid' : ''
                }`}
                placeholder="Sobrenome"
                name="last"
                value={client?.name.last}
              />
              <div className="invalid-feedback d-block">
                {errors.last?.message}
              </div>
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('email', {
                  required: 'Campo obrigatório',
                })}
                type="email"
                className={`form-control base-input ${
                  errors.email ? 'is-invalid' : ''
                }`}
                placeholder="E-mail"
                name="email"
                value={client?.email}
              />
              <div className="invalid-feedback d-block">
                {errors.email?.message}
              </div>
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('phone', {
                  required: 'Campo obrigatório',
                })}
                type="phone"
                className={`form-control base-input ${
                  errors.phone ? 'is-invalid' : ''
                }`}
                placeholder="Telefone"
                name="text"
                value={client?.phone}
              />
              <div className="invalid-feedback d-block">
                {errors.phone?.message}
              </div>
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('picture', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.picture ? 'is-invalid' : ''
                }`}
                placeholder="URL da Foto"
                name="picture"
                value={client?.picture.large}
              />
              <div className="invalid-feedback d-block">
                {errors.picture?.message}
              </div>
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('postcode', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.postcode ? 'is-invalid' : ''
                }`}
                placeholder="CEP"
                name="postcode"
                value={client?.location.postcode}
              />
              <div className="invalid-feedback d-block">
                {errors.postcode?.message}
              </div>
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('city', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.city ? 'is-invalid' : ''
                }`}
                placeholder="CEP"
                name="city"
                value={client?.location.city}
              />
              <div className="invalid-feedback d-block">
                {errors.city?.message}
              </div>
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('state', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.state ? 'is-invalid' : ''
                }`}
                placeholder="CEP"
                name="state"
                value={client?.location.state}
              />
              <div className="invalid-feedback d-block">
                {errors.state?.message}
              </div>
            </div>
          </div>
          <div className="row user-crud-inputs-container">
            <div>
              <input
                {...register('street', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.street ? 'is-invalid' : ''
                }`}
                placeholder="CEP"
                name="state"
                value={client?.location.street.name}
              />
              <div className="invalid-feedback d-block">
                {errors.street?.message}
              </div>
            </div>
          </div>

          <div className="user-crud-buttons-container">
            <button
              className="btn btn-outline-danger user-crud-button"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
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
