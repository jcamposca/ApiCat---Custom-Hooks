import { useEffect, useState } from "react"
import { getFact } from "../service/getFack"

export const useCatFack = () => {

    const [text, setText] = useState()

    const reset = () => {
        getFact().then(newText => setText(newText));
    }
  

    useEffect(reset, [])

    return {
        text,
        reset
    }
}
