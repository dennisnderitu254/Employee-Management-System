import React from 'react';
import './Task.css';

interface TaskProps {
  task: {
    id: string;
    title: string;
    description: string;
    done: boolean;
  };
  onTaskCompletion: (taskId: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onTaskCompletion }) => {
  const handleComplete = () => {
    if (!task.done) {
      onTaskCompletion(task.id);
    }
  };

  return (
    <div className={`task ${task.done ? 'done' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleComplete} disabled={task.done}>
        {task.done ? 'Completed' : 'Mark as Done'}
      </button>
    </div>
  );
};

export default Task;
