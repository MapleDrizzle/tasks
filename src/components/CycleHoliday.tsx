import React, { useState } from "react";
import { Button } from "react-bootstrap";
// Holidays: Christmas, Thanksgiving, Valentine's Day, Halloween, New Year's Eve
// 🎅 🦃 💝 🎃 🤡
export function CycleHoliday(): JSX.Element {
    type Holiday = "🎅" | "🦃" | "💝" | "🎃" | "🤡";
    const [holiday, setHoliday] = useState<Holiday>("🎅");

    function advanceByAlph(): void {
        if (holiday === "🤡") {
            setHoliday("🎅");
        } else if (holiday === "🎅") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("💝");
        } else {
            setHoliday("🤡");
        }
    }
    function advanceByYear(): void {
        if (holiday === "💝") {
            setHoliday("🤡");
        } else if (holiday === "🤡") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎅");
        } else {
            setHoliday("💝");
        }
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={advanceByAlph}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
