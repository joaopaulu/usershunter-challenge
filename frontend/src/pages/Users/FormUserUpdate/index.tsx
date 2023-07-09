import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'core/utils/request';
import { User, UserList } from 'core/utils/types/user';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.scss';

type UrlParams = {
  userId: string;
};

const FormUserUpdate = () => {
  const { userId } = useParams<UrlParams>();
  const isEditing = userId !== 'create';
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<User>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/users/${userId}` }).then(response => {
        const user = response.data as UserList;

        console.log(response.data);

        setValue('first', user.name.first);
        setValue('last', user.name.last);
        setValue('email', user.email);
        setValue('phone', user.phone);
        setValue('picture', user.picture.large);
        setValue('street', user.location.street.name);
        setValue('city', user.location.city);
        setValue('state', user.location.state);
        setValue('postcode', user.location.postcode);
      });
    }
  }, [isEditing, userId, setValue]);

  const onSubmit = (formData: User) => {
    const data = {
      ...formData,
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/users/${userId}` : '/users',
      data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Usuário cadastrado com sucesso');
        navigate('/users');
      })
      .catch(() => {
        toast.error('Erro ao cadastrar usuário');
      });
  };

  const handleCancel = () => {
    navigate('/users');
  };

  return (
    <div className="user-crud-container">
      <div className="base-card user-crud-form-card">
        <h1 className="user-crud-form-title">Atualizar Usuário</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row user-crud-inputs-container">
            <div className="col-lg-6 user-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <label htmlFor="first">Nome:</label>
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
              <div className="margin-bottom-30">
                <label htmlFor="last">Sobrenome:</label>
                <input
                  {...register('last', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.last ? 'is-invalid' : ''
                  }`}
                  placeholder="SobreNome"
                  name="last"
                />
                <div className="invalid-feedback d-block">
                  {errors.last?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <label htmlFor="email">Email:</label>
                <input
                  {...register('email', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.email ? 'is-invalid' : ''
                  }`}
                  placeholder="E-mail"
                  name="email"
                />
                <div className="invalid-feedback d-block">
                  {errors.email?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <label htmlFor="phone">Telefone:</label>
                <input
                  {...register('phone', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.phone ? 'is-invalid' : ''
                  }`}
                  placeholder="Telefone"
                  name="phone"
                />
                <div className="invalid-feedback d-block">
                  {errors.phone?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <label htmlFor="picture">URL da Foto:</label>
                <input
                  {...register('picture', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.picture ? 'is-invalid' : ''
                  }`}
                  placeholder="Url da foto"
                  name="picture"
                />
                <div className="invalid-feedback d-block">
                  {errors.picture?.message}
                </div>
              </div>
            </div>

            <div className="col-lg-6 user-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <label htmlFor="postcode">CEP:</label>
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
                />
                <div className="invalid-feedback d-block">
                  {errors.postcode?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <label htmlFor="state">Estado:</label>
                <input
                  {...register('state', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.state ? 'is-invalid' : ''
                  }`}
                  placeholder="Estado"
                  name="state"
                />
                <div className="invalid-feedback d-block">
                  {errors.state?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <label htmlFor="city">Cidade:</label>
                <input
                  {...register('city', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.state ? 'is-invalid' : ''
                  }`}
                  placeholder="Cidade"
                  name="city"
                />
                <div className="invalid-feedback d-block">
                  {errors.city?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <label htmlFor="street">Rua:</label>
                <input
                  {...register('street', {
                    required: 'Campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.state ? 'is-invalid' : ''
                  }`}
                  placeholder="Rua"
                  name="street"
                />
                <div className="invalid-feedback d-block">
                  {errors.street?.message}
                </div>
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

export default FormUserUpdate;
