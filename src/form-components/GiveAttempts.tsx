import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(event.target.value);
    }
    function updateUsedAttempt(): void {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }
    function updateGainAttempt(): void {
        const parsedAttempts = parseInt(requestedAttempts, 10);

        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + parsedAttempts);
            setRequestedAttempts("");
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>

            <label>
                Request Attempts:
                <input
                    type="number"
                    value={requestedAttempts}
                    onChange={updateInputChange}
                />
            </label>

            <button onClick={updateUsedAttempt} disabled={attemptsLeft === 0}>
                Use Attempt
            </button>

            <button onClick={updateGainAttempt}>Gain Attempts</button>
        </div>
    );
}
