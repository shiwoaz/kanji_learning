import React, { useCallback, useEffect, useState } from 'react'
import cn from '../cnchar'
import WordItem from './wordItem';

interface IWordListProps {
    kanji: string
}

const WordsList: React.FC<IWordListProps> = ({ kanji }) => {
    const [words, setWords] = useState<string[]>([]);
    const getExplain = useCallback(
        () => {
            setWords(cn.words(kanji))
        },
        [kanji],
    )

    useEffect(() => {
        getExplain();
    }, [getExplain])


    return (
        <div>
            <div id="word_dispaly"></div>
            <div id="word_test"></div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'space-around', }}>
                {words.map((item, idx) =>
                    <WordItem word={item} key={idx} id={idx} />)}
            </div>
        </div>
    )
}

export default WordsList;