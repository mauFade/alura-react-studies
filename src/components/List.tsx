import React from "react";

const List = () => {
  const tasks = [
    {
      task: "React",
      time: "01:30:00",
    },
    {
      task: "JavaScript",
      time: "01:10:00",
    },
  ];
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.task}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
