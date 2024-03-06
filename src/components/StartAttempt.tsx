import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempt - 1);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(1 + attempt)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            {attempt}
        </div>
    );
}
