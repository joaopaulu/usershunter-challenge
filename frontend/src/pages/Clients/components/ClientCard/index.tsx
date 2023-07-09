import { Client } from 'core/utils/types/client';
import './styles.scss';

type ClientCardProps = {
  client: Client;
  onCardButtonClick: (client: Client) => void;
};

const ClientCard: React.FC<ClientCardProps> = ({
  client,
  onCardButtonClick,
}) => {
  const handleButtonClick = () => {
    onCardButtonClick(client);
  };

  return (
    <div className="row card-base border-radius-10 client-card">
      <div className="col-2 image-info">
        <img
          src={client.picture.large}
          alt={client.name.first}
          className="client-card-image"
        />
      </div>
      <div className="col-7 client-info">
        <h6 className="client-name">
          {client.name.first} {client.name.last}
        </h6>
        <h6 className="client-infos">Email: {client.email} </h6>
      </div>
      <div className="col-2 client-info">
        <button onClick={handleButtonClick} className="btn btn-primary">
          Selecionar
        </button>
      </div>
    </div>
  );
};

export default ClientCard;
