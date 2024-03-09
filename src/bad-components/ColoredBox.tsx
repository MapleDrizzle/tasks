import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;
interface ColorIndex {
    colorIndex: number;
    setColorIndex: (val: number) => void;
}
function ChangeColor({ colorIndex, setColorIndex }: ColorIndex): JSX.Element {
    const handleClick = () => setColorIndex((1 + colorIndex) % COLORS.length);
    return <Button onClick={handleClick}>Next Color</Button>;
}

function ColorPreview({ colorIndex }: ColorIndex): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ChangeColor>
                <ColorPreview
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
