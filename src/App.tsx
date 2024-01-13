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
        <div className='grid grid-cols-6 gap-20 h-screen'>
          <section>
            <Sidebar />
          </section>
          <section className='col-span-5'>
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