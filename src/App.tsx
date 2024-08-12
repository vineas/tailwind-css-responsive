// import CssGrid from './components/CssGrid'
import "./App.css"

function App() {

  return (
    <>
      {/* 
        <div className='max-w-7xl mx-auto'>
          <CssGrid />
        </div> 
      */}

      <section className='grid gap-8 tablet:grid-cols-2 tablet:items-center tablet:text-left sm:max-xl:bg-blue-50 sm:max-xl:p-9 mb-5'>
        <div>
          <img className="w-full rounded-lg " src="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg" alt="" />
        </div>
        <div>
          <h1 className='text-4xl font-medium mb-2'>Hello</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa ducimus alias iure necessitatibus harum sit, assumenda, consequuntur odio recusandae doloribus nulla vero eveniet cum aut corporis veritatis, modi quo!</p>
        </div>
      </section>

      <section className='grid gap-8 tablet:grid-cols-2 tablet:items-center tablet:text-left sm:max-xl:bg-blue-50 sm:max-xl:p-9'>
        <div>
          <h1 className='text-4xl font-medium mb-2'>Hello</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta culpa ducimus alias iure necessitatibus harum sit, assumenda, consequuntur odio recusandae doloribus nulla vero eveniet cum aut corporis veritatis, modi quo!</p>
        </div>
        <div>
          <img className="w-full rounded-lg " src="https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg" alt="" />
        </div>
      </section>
    </>
  )
}

export default App
