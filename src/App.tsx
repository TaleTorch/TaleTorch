import Navbar from './components/Navbar/Navbar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import Card from './components/FeedCard/FeedCard.tsx';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='grid grid-cols-8'>
          <section className='col-start-1 col-end-3'>
            <Sidebar />
          </section>
          <section className='col-start-3 col-end-7'>
            <div className='flex flex-col flex-wrap mt-20'>
              <Card />
              <Card />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App