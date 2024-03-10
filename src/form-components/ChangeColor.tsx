import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "pink",
        "blue",
        "orange",
        "green",
        "red",
        "brown",
        "violet",
        "yellow"
    ];
    const [colorPicked, setColor] = useState(colors[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    id={color}
                    label={color}
                    value={color}
                    checked={colorPicked === color}
                    onChange={updateColor}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: colorPicked,
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                You have chosen {colorPicked}
            </div>
        </div>
    );
}
