import Footer from 'core/components/Footer';
import Pagination from 'core/components/Pagination';
import { Client, ClientsResponse } from 'core/types/Client';
import makeRequest from 'core/utils/request';
import { useEffect, useState } from 'react';
import ClientCard from './components/ClientCard';
import Form from './components/Form';
import ClientCardLoader from './components/Loaders/ClientCardLoader';
import './styles.scss';

const Clients = () => {
  const [clientsData, setClientsData] = useState<ClientsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);

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
        console.log();
        setClientsData(response.data);
      } catch (error) {
        console.log(error);
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
          <h1 className="client-title">Usuários Aleatórios</h1>
          <div className="client-products">
            {isLoading ? (
              <ClientCardLoader />
            ) : (
              clientsData?.results.map((client: Client) => (
                <ClientCard client={client} key={client.email} />
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
        <div className="half-width">
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clients;
