import { Client } from 'core/types/Client';
import './styles.scss';

type Props = {
  client: Client;
};

const ClientCard = ({ client }: Props) => (
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
      <h6 className="client-infos">
        Endereço: {client.location.city}, {client.location.state},{' '}
        {client.location.country}{' '}
      </h6>
      <h6 className="client-infos">Telefone: {client.phone}</h6>
    </div>
    <div className="col-2 client-info">
      <button onClick={() => ''} className="btn btn-primary">
        Selecionar
      </button>
    </div>
  </div>
);

export default ClientCard;
