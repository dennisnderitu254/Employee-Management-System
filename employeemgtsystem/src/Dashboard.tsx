import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Task from './Task';
import './Dashboard.css';

interface Task {
  id: string;
  title: string;
  description: string;
  done: boolean;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleTaskCompletion = async (taskId: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ done: true }),
      });
      if (response.ok) {
        setTasks(tasks.map(task => task.id === taskId ? { ...task, done: true } : task));
      } else {
        console.error('Failed to update task status');
      }
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <div className="dashboard">
      <Navbar />
      <h2>Employee Dashboard</h2>
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} onTaskCompletion={handleTaskCompletion} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
