import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link, animateScroll as scroll } from "react-scroll";
const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategorias] = useState("general");
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);
  const [noticias, setNoticias] = useState([]);

  const scrollToTop = () => {
    return scroll.scrollToTop();
  };

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=033b92dde28145048a597ee80b52b790`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      setPagina(1);
    };

    consultarApi();
  }, [categoria]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=033b92dde28145048a597ee80b52b790`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
      scrollToTop();
    };

    consultarApi();
  }, [pagina]);

  const handleFormChange = (e) => {
    setCategorias(e.target.value);
  };

  const handleChangePagina = (e, page) => {
    setPagina(page);
  };

  return (
    <NoticiasContext.Provider
      value={{
        handleFormChange,
        categoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
