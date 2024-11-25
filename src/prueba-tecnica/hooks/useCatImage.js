import { useEffect, useState } from "react";


export const useCatImage = ({text}) => {

    const [img, setImg] = useState()

    useEffect(() => {
          
        if (!text) return;
        const palabra = text.split(" ", 1).join()
        const url = `https://cataas.com/cat/gif/says/${palabra}?fontColor=red&fontSize=20&type=square`
        setImg(url)
    
    }, [text])


    return {
        img
    }
}
