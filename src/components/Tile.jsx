import './Tile.css';

import brandPhoto from '../assets/brand.png';
import storyPhoto from '../assets/our_story.png';

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


function Tile({title, paragraphs, photo}) {
    /* This is the old way I was using to check if the tile
    is a photo or text. I was using the parameter props,
    and the component had a property called isPhoto.
     */
    
    /*let content;
    if (props.isPhoto) {
        content = <img src={props.photo} alt={props.title}/>;
    } else {
        content = (
            <>
                <h2>{props.title}</h2>
                {props.paragraphs.map((p, index) => {
                    return (
                        <p key={index}>{p}</p>
                    )
                })}
            </>
        )
    }*/
    return (
        <section>
            {/* The element renders only if the statement before
             the && is truthy (i.e. if it is not null or false). */}
            {title && <h2>{title}</h2>}

            {photo && <img src={photo} alt={title}/>}

            {paragraphs &&
                paragraphs.map((p, index) => {
                    return (<p key={index}>{p}</p>);
                })}

            {/*{content}*/}
        </section>
    );
}

export default Tile;