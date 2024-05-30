import './App.css'
import HeaderSidebar from './components/HeaderSidebar'
import HeroSidebar from './components/HeroSidebar'
import LeftSidebar from './components/LeftSidebar'

function App() {

  return (
    <>
      <div className='w-full'>
        <div className='flex'>
          <LeftSidebar></LeftSidebar>
          <div className='w-full'>
            <HeaderSidebar></HeaderSidebar>
            <HeroSidebar></HeroSidebar>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
