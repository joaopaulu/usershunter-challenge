import { ReactComponent as SearchIcon } from 'core/assets/images/search-icon.svg';
import { useForm } from 'react-hook-form';

import './styles.css';

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
    <div className="base-card servidor-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="servidor-filter-form">
        <div className="servidor-filter-name-container">
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
          <button className="servidor-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="servidor-filter-bottom-container">
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-servidor-filter-clear"
          >
            LIMPAR FILTRO
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserFilter;
