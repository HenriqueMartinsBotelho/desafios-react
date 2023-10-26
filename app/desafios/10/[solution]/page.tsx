"use client";

import React, { memo, useState, useCallback } from "react";

interface Desafio10Props {
  task: string;
}

const Desafio10: React.FC<Desafio10Props> = memo(({ task }) => {
  console.log("Renderizando:", task);
  return <li>{task}</li>;
});

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(1);

  const addTask = useCallback(() => {
    console.log("Renderizando addTask");
    setTasks((prevTasks) => [...prevTasks, `Tarefa ${counter}`]);
    setCounter((prevCounter) => prevCounter + 1);
  }, [counter]);

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Desafio10 key={index} task={task} />
        ))}
      </ul>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
};

export default TodoList;
