import React, { useCallback } from 'react'
import cn from '../cnchar'
import useDrawTest from '../hooks/useDraw'

interface IWordItemProps {
    word: string,
    id: number
}

const WordItem: React.FC<IWordItemProps> = ({ word, id }) => {
    const draw = useDrawTest(word, `#word_test`, 'WORDS')
    const drawDisplay = useCallback(() => {
        cn.draw(word, {
            el: `#word_dispaly`,
            type: cn.draw.TYPE.ANIMATION, animation: { loopAnimate: true }, style: { length: 90 }
        })
    }, [word]);

    return (
        <div style={{ padding: "3px", border: "solid 1px", borderRadius: "5px", margin: "10px" }}
            onClick={() => {
                draw();
                drawDisplay();
                // cn.voice(word, {});
                cn.voice.speak(word);
            }}
        ><span >{word}</span></div>
    )
}

export default WordItem;