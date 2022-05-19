import ListadoNoticias from "./components/ListadoNoticias";
import SearchNotices from "./components/SearchNotices";
import { NoticiasProvider } from "./context/NoticiasProvider";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <NoticiasProvider>
      <Header />
      <SearchNotices />
      <ListadoNoticias />
    </NoticiasProvider>
  );
}

export default App;
