import { useEffect, useState } from "react";

export default function Planta (){
    const [planta, setPlanta] = useState([''])

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&_hsenc=p2ANqtz--MpYLlMHoQoSIrx2ESCSa2laMDQEOI5X7IgtFv6wV-aVt0hjW-jeYKTWIcpKiWizhJYy8fbkBSaTf0DSguMKn4Kl5JOw&utm_content=231361624&utm_source=hs_automation')
        .then(resposta => resposta.json())
        .then( dados => {
            setPlanta(dados)
        })
    }, [])

    console.log(planta);
}   

    
