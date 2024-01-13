import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';

function App() {
  return (
      <>
        <header>
          <Navbar />
        </header>
        <main className='w-full fixed block h-full bg-rich-black'>
          <Sidebar />
        </main>
      </>
  )
}

export default App