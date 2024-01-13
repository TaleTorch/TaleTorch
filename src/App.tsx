import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Card from './components/FeedCard/FeedCard.tsx';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='w-full fixed block h-full bg-rich-black'>
        <Sidebar />
        <section className='flex justify-center mt-96'>
          <Card />
        </section>
      </main>
    </>
  )
}

export default App