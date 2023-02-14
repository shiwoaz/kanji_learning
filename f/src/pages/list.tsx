import React, { useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../api';
import KanjiItem from '../component/kanjiItem';
import { getLocal, mapNumbertoEnglish } from '../utilis';

const List = () => {
    const { stroke } = useParams();
    const [dataSource, setDataSource] = useState<string[]>([]);
    const [res, setRes] = useState<string[]>([]);
    const nav = useNavigate();
    useLayoutEffect(() => {
        const month = mapNumbertoEnglish(parseInt(stroke!) ?? 1);
        setDataSource(data?.[month] ?? []);
        const res = (JSON.parse(getLocal(month)!) ?? []) as string[];
        setRes(res);
    }, [stroke]);
    return (
        <div style={{
            paddingTop: 15,
            paddingLeft: 10,
            paddingRight: 10
        }}>{dataSource.map((item, index) =>
            <KanjiItem kanji={item} key={index} nav={nav} stroke={stroke!} isok={res.includes(item)} />
        )}</div>
    )
}

export default List;