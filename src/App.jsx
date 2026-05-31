import Card from './components/Card';
import Sidebar from './components/SidebarProvider';
import './styles/nav.css';
import './styles/main.css';
import { useState } from 'react';

function App() {
  const [totalCards, setTotalCards] = useState();

  return (
    <main>
      <nav>
        <Sidebar setTotalCards={setTotalCards} />
      </nav>
      <section>
        <h1>Memo game</h1>
        <Card totalCards={totalCards} />
      </section>
    </main>
  );
}
export default App;
