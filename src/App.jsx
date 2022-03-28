import {About, Footer, Header, Skills, Testimonials, Works} from "./containers";
import {Navbar} from "./components";
import './_App.scss'

const App = () => (
    <div className={"app"}>
            <Navbar/>
        <Header/>
        <About/>
        <Works/>
        <Skills/>
        <Testimonials/>
        <Footer/>
    </div>
);

export default App;