import React from 'react'
import { NavigateFunction } from 'react-router-dom'

interface IStrokeCategoryProps {
    num: number,
    kanji: string,
    nav: NavigateFunction
}

const strokeCategory: React.FC<IStrokeCategoryProps> = ({ num, kanji, nav }) => {
    return (
        <div style={{
            width: 150,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
            paddingTop: 5,
            paddingBottom: 5,
            border: "1px solid",
            borderRadius: 10
        }} onClick={() => {
            nav(`/list/${num}`);
        }}>{kanji}</div>
    )
}

export default strokeCategory;