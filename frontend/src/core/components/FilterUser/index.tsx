import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';

import './styles.scss';

export type UserFilterData = {
  first: string;
  last: string;
  state: string;
};

type Props = {
  onSubmitFilter: (data: UserFilterData) => void;
};

const UserFilter = ({ onSubmitFilter }: Props) => {
  const { register, handleSubmit, setValue } = useForm<UserFilterData>();

  const onSubmit = (formData: UserFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue('first', '');
    setValue('last', '');
    setValue('state', '');
  };

  return (
    <div className="base-card user-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="user-filter-form">
        <div className="user-filter-name-container">
          <input
            {...register('first')}
            type="text"
            className="form-control"
            placeholder="Nome"
            name="first"
          />
          <input
            {...register('last')}
            type="text"
            className="form-control"
            placeholder="Sobrenome"
            name="last"
          />
          <input
            {...register('state')}
            type="text"
            className="form-control"
            placeholder="Estado"
            name="state"
          />
          <button className="user-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="user-filter-bottom-container">
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-user-filter-clear"
          >
            LIMPAR FILTRO
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFilter;
