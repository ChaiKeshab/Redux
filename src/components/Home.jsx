import { useState } from 'react'
import './Home.css'

export default function Home() {
    const [color, setColor] = useState('#adaf0d')
    const [color2, setColor2] = useState('#0daf0d')
    const [color3, setColor3] = useState('#fda00d')
    const [randomColor, setRandomColor] = useState(color2)
    const [prevRandomColor, setPrevRandomColor] = useState(null);
    const [answer, setAnswer] = useState('Welcome to color guess!')

    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    const randomColorGenerate = (colorData) => {
        let digit = ''
        let hex = ''
        for (let index = 0; index < 18; index++) {
            digit = numArr[Math.floor(Math.random() * 16)]
            hex = hex.concat(digit)
        }
        let colorArr = [`#${hex.slice(0, 6)}`, `#${hex.slice(6, 12)}`, `#${hex.slice(12, 18)}`]
        let chooseColor = colorArr[Math.floor(Math.random() * 3)]

        setRandomColor(chooseColor)
        setColor(`#${hex.slice(0, 6)}`)
        setColor2(`#${hex.slice(6, 12)}`)
        setColor3(`#${hex.slice(12, 18)}`)
        setPrevRandomColor(randomColor);

        setAnswer(colorData === randomColor ? 'Correct!' : 'Incorrect!');
    }

    return (
        <div className='container-home'>
            <div className='color-field' style={{ backgroundColor: randomColor }}></div>
            <div className='btn-choose'>
                <button onClick={() => randomColorGenerate(color)}>{color}</button>
                <button onClick={() => randomColorGenerate(color2)}>{color2}</button>
                <button onClick={() => randomColorGenerate(color3)}>{color3}</button>
            </div>
            <div className="answer">
                {`${answer} `}{answer === 'Incorrect!' && (`Right answer was ${prevRandomColor}`)}
            </div>
        </div>
    )
}

