import React from 'react'
import { NavigateFunction } from 'react-router-dom'

interface IKanjiItemProps {
    kanji: string
    nav: NavigateFunction
    stroke: string
    isok: boolean
}

const KanjiItem: React.FC<IKanjiItemProps> = ({ kanji, nav, stroke, isok }) => {
    return (
        <div onClick={() => {
            nav(`/kanji_info/${kanji}/${stroke}`);
        }}>
            <div style={{ fontSize: 30, fontWeight: 600, display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
                <span >{kanji}</span>
                <span style={{ display: isok ? 'block' : 'none', paddingRight: "30px" }}>✅</span>
            </div>
            <hr style={{
                borderTop: " 1px solid #bbb",
                borderRadius: "5px"
            }} />
        </div>
    )
}

export default KanjiItem;