import { useCatFack } from "./hooks/useCatFack";
import { useCatImage } from "./hooks/useCatImage";
import './prueba.css'

export const Prueba = () => {

    const {text, reset} = useCatFack()
    const {img} = useCatImage({text})

    return (
        <main>
            <h1>Prueba tecnica</h1>
            <button onClick={reset}>New Fact</button>
            <section>
                { text && <p>{ text }</p>}
                { img && <img src={img} alt="" />}
            </section>
        </main>
    )
}



//APIS 
//const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/gif/says/Hello?filter=mono&fontColor=orange&fontSize=20&type=square`