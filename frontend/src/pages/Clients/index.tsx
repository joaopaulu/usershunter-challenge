import Footer from 'core/components/Footer';
import Pagination from 'core/components/Pagination';
import makeRequest from 'core/utils/request';
import { Client, ClientsResponse } from 'core/utils/types/client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ClientCard from './components/ClientCard';
import Form from './components/Form';
import ClientCardLoader from './components/Loaders/ClientCardLoader';
import './styles.scss';

const Clients = () => {
  const [clientsData, setClientsData] = useState<ClientsResponse | null>(null);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isFormEnabled, setisFormEnabled] = useState(false);

  const handleCardButtonClick = (client: Client) => {
    setSelectedClient(client);
    setisFormEnabled(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const params = {
          page: activePage,
        };
        const response = await makeRequest({
          url: '/randomusers',
          params,
        });
        setClientsData(response.data);
      } catch (error) {
        toast.error('Erro ao cadastrar usuário');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [activePage]);

  return (
    <>
      <div className="main-container">
        <div className="client-container half-width">
          <h1 className="client-title">Escolher Usuário</h1>
          <div className="client-body">
            {isLoading ? (
              <ClientCardLoader />
            ) : (
              clientsData?.results.map((client: Client) => (
                <ClientCard
                  client={client}
                  key={client.email}
                  onCardButtonClick={handleCardButtonClick}
                />
              ))
            )}
          </div>
          {clientsData && (
            <Pagination
              totalPages={3}
              onChange={(page: number) => setActivePage(page)}
            />
          )}
        </div>
        <hr />
        <div className="half-width client-container">
          <Form client={selectedClient} isFormEnabled={isFormEnabled} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clients;
