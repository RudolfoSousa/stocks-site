import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import style from './page.module.css';

export default function Home() {

  return (
    <main>
      <div>
        <Header />
        <Searchbar />
      </div>
    </main>
  );
}
