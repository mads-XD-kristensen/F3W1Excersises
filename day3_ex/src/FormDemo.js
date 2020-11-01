import React, { useState } from "react";
const NameForm = () => {
    const [name, setName] = useState("");
    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        setName(value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        window.alert(name)
        setName("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label>
                    Name:
          <input type="text" value={name} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {name}
        </div>
    );
};

export default function FormDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <NameForm />
        </div>
    );
}
