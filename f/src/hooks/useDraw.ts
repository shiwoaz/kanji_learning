import { useCallback } from "react";
import cn from "../cnchar";

export type mode = "WORDS" | "SINGLE";

const useDrawTest = (
	kanji: string,
	el: string = "#test",
	mode: mode = "SINGLE"
) => {
	const drawAgain = useCallback(() => {
		cn.draw(kanji!, {
			el,
			type: cn.draw.TYPE.TEST,
			style: { length: 100 },
			test: {
				drawingWidth: 10,
				onTestStatus: (status) => {
					console.log(status);
					if (status.status === "complete" && mode === "SINGLE") {
						alert("恭喜你完成了✅!");
						drawAgain();
					}
				},
			},
		});
	}, [el, kanji, mode]);

	return drawAgain;
};

export default useDrawTest;
