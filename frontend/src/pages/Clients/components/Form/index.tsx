import { SubmitHandler, useForm } from 'react-hook-form';

import { Usuarios } from 'core/types/Usuarios';
import './styles.scss';

const Form = () => {
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
            <div className="margin-bottom-30">
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
              />
              <div className="invalid-feedback d-block">
                {errors.first?.message}
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
