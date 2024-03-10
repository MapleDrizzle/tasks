import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(): void {
        setEditMode(!editMode);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }
    function updateCheckbox(): void {
        setIsStudent(!isStudent);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="editMode">
                <Form.Label>Edit Mode</Form.Label>
                <Form.Check
                    type="switch"
                    checked={editMode}
                    onChange={updateEditMode}
                />
                {editMode ? (
                    <div>
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                        <label>
                            Is a Student:
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={updateCheckbox}
                            />
                        </label>
                    </div>
                ) : (
                    <p>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </p>
                )}
            </Form.Group>
        </div>
    );
}
