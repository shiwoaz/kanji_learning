import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import field from '../assets/images/field.jpg';
import cn from '../cnchar';
import speak from '../assets/svgs/speaker.svg'
import WordsList from '../component/wordsList';
import { getLocal, mapNumbertoEnglish, setLoacl } from '../utilis';

const KanjiInfo = () => {
    const { kanji, stroke } = useParams();

    const drawAgain = useCallback(() => {
        cn.draw(kanji!, {
            el: "#test", type: cn.draw.TYPE.TEST, style: { length: 130 }, test: {
                drawingWidth: 10, onTestStatus: (status) => {
                    console.log(status);
                    if (status.status === "complete") {
                        alert("恭喜你完成了✅!");
                        drawAgain();

                        const month = mapNumbertoEnglish(parseInt(stroke!));
                        const res = (JSON.parse(getLocal(month)!) ?? []) as string[];
                        console.log(stroke, res);
                        if (!res.includes(kanji!)) {
                            res.push(kanji!);
                            setLoacl(month, JSON.stringify(res));
                        }
                    }
                }
            }
        });
    }, [kanji, stroke]);


    useEffect(() => {
        cn.draw(kanji!, { el: "#el", type: cn.draw.TYPE.STROKE });
        cn.draw(kanji!, { el: "#strokes", type: cn.draw.TYPE.ANIMATION, animation: { loopAnimate: true } });
        drawAgain();
    }, [drawAgain, kanji,])

    return (
        <div style={{ // contatiner
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ // top
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                overflow: 'hidden'
            }}>
                <div>
                    <div style={{ // kanji display
                        backgroundImage: `url(${field})`,
                        backgroundSize: 'cover',
                        width: "100px",
                        height: "100px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '65px',
                        marginBottom: '30px'

                    }}>
                        {kanji}
                    </div>
                    <div id='strokes'></div>
                </div>
                <img src={speak} alt="" height={20} width={20} style={{ marginTop: 30 }} onClick={() => cn.voice(kanji!, {})} />
                <div id='el' style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: "60%",
                    justifyContent: 'space-around'
                }}></div>
            </div>

            <div style={{ // bottom

            }}>
                {/* test */}
                <div id='test' />

            </div>
            <WordsList kanji={kanji!} />
        </div>
    )
}

export default KanjiInfo