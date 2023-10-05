import { Hero,Sales,FlexContent,Stories,Footer,Navbar,Cart } from "./components"
import {heroapi,popularsales,toprateslaes,sneaker,highlight,story,footerAPI} from "./data/data"

function App() {

  return (
    <div>
    <main className="flex flex-col gap-16 relative">
      <Navbar/>
      <Cart/>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExist/>
      <FlexContent endpoint={highlight}  ifExist/>
      <Sales endpoint={toprateslaes} />
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
      <Footer footerAPI={footerAPI}/>
    </main>
    </div>
  )
}

export default App
