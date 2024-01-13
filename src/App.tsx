import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';

function App() {
  return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Sidebar />
        </main>
      </>
  )
}

export default App