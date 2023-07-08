import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';
import './styles.scss';

type Props = {
  totalPages: number;
  onChange: (selectedItem: number) => void;
};

const Pagination = ({ totalPages, onChange }: Props) => {
  const renderIcon = (type: 'previous' | 'next') => (
    <ArrowIcon className={`pagination-${type}`} />
  );

  const handlePageChange = (selectedItem: { selected: number }) => {
    onChange(selectedItem.selected);
  };

  return (
    <div className="pagination-container">
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        previousLabel={renderIcon('previous')}
        nextLabel={renderIcon('next')}
        containerClassName="pagination"
        pageClassName="pagination-item"
        breakClassName="pagination-item"
        activeClassName="active"
        previousClassName="page-active"
        nextClassName="page-active"
        disabledClassName="page-inactive"
      />
    </div>
  );
};

export default Pagination;
