import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

interface VagasProps {
  nomeVaga: string;
  descricao: string;
  tipoVaga: string;
  beneficios: string;
}

function App() {
  // use ReactQuery
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(["todos", page], () => {
    return axios
      .get(
        `https://6331b7db3ea4956cfb65bfc4.mockapi.io/vagas?page=${page}&limit=20`
      )
      .then((res) => res.data);
  });

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <button onClick={handlePrevPage}>Anterior</button>
      <button onClick={handleNextPage}>Próxima</button>
      <h1>React Query</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}

      {data?.map((vaga: VagasProps) => (
        <div key={vaga.nomeVaga}>
          <h2>{vaga.nomeVaga}</h2>
          <p>{vaga.descricao}</p>
          <p>{vaga.tipoVaga}</p>
          <p>{vaga.beneficios}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
