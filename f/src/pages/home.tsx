import React from "react";
import { useNavigate } from "react-router-dom";
import { strokes } from "../api";
import StrokeCategory from "../component/strokeCategory";

const Home: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingLeft: 10,
            paddingRight: 10
        }}>
            {strokes.map((item, index) => <StrokeCategory {...item} nav={navigate} key={index} />)}
        </div>
    )
}

export default Home;