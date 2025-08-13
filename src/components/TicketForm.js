import React, { useState } from "react";

export default function TicketForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };
    dispatch({ type: "ADD_TICKET", payload: ticketData });
    clearForm();
  };

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          className="form-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <fieldset className="priority-fieldset">
        <legend>Priority</legend>

        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority-label">
            <input
              className="priority-input"
              type="radio"
              name="priority"
              value={value}
              checked={priority === Number(value)}
              onChange={(e) => setPriority(Number(e.target.value))}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
