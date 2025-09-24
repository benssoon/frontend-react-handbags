import './App.css'
import Button from './components/Button.jsx';
import ProductCard from './components/ProductCard.jsx';
import Tile from './components/Tile.jsx';
import brandPhoto from './assets/brand.png';
import storyPhoto from './assets/our_story.png';

const brand = {
    "text": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem blanditiis est fugiat ipsa ipsum maiores possimus sint tempore totam!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque aut deserunt distinctio enim facilis inventore odio porro reiciendis repellat?"
    ],
    "photo": `${brandPhoto}`
}

const story = {
    "text": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto beatae doloribus eligendi eos error est eveniet fugiat, ipsam ipsum iure libero maxime nisi non nulla recusandae reprehenderit, voluptates?"
    ],
    "photo": `${storyPhoto}`
}

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="to the collection"/>
                <Button text="shop all bags"/>
                <Button text="pre-orders"/>
            </nav>
            <main>
                <ProductCard name="handy" tag="Best seller"/>
                <ProductCard name="stylish" tag="Best seller"/>
                <ProductCard name="simple" tag="Best seller"/>
                <ProductCard name="trendy" tag="Best seller"/>
            </main>
            <footer>
                <Tile title="The Brand" paragraphs={brand.text} />
                <Tile isImage={true} title ="Zen Box" photo={brandPhoto} />

                <Tile isImage={true} title ="People" photo={storyPhoto} />
                <Tile isImage={false} title="Our Story" paragraphs={story.text} />
            </footer>
        </>
    );
}

export default App;
