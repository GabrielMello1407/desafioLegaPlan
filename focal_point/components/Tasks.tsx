'use client';
import { useState, useEffect } from 'react';
import TaskModal from './TaskModal';
import DeleteTaskModal from './DeleteTaskModal';
import styles from './Tasks.module.scss';
import { Trash } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setTaskToDelete(null);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeleteModal = (task: Task) => setTaskToDelete(task);
  const closeDeleteModal = () => setTaskToDelete(null);

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    closeModal();
  };

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className={styles.container}>
      <div className={styles.taskContainer}>
        <h1>Suas tarefas de hoje</h1>
        <div className={styles.taskList}>
          {activeTasks.length > 0 ? (
            activeTasks.map((task) => (
              <div
                key={task.id}
                className={`${styles.taskItem} ${
                  task.completed ? styles.completed : ''
                }`} // Adicionando a classe 'completed' quando a tarefa estiver marcada como concluída
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className={styles.checkbox}
                />
                <span className={task.completed ? styles.completedText : ''}>
                  {task.text}
                </span>
                <button
                  onClick={() => openDeleteModal(task)}
                  className={styles.removeButton}
                >
                  <Trash />
                </button>
              </div>
            ))
          ) : (
            <p>Nenhuma tarefa ativa</p>
          )}
        </div>

        <div className={styles.taskList}>
          <h2 className={styles.text}>Tarefas Finalizadas</h2>
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <div
                key={task.id}
                className={`${styles.taskItem} ${styles.completed}`}
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className={`${styles.checkbox} ${styles.completedCheckbox}`} // Aplicando a classe 'completedCheckbox'
                  disabled
                />
                <span className={styles.completedText}>{task.text}</span>{' '}
                {/* Aplicando o estilo para o texto */}
                <button
                  onClick={() => openDeleteModal(task)}
                  className={styles.removeButton}
                >
                  <Trash />
                </button>
              </div>
            ))
          ) : (
            <p className={styles.noTasksMessage}>Nenhuma tarefa finalizada</p>
          )}
        </div>

        {isModalOpen && (
          <>
            <div
              className={`${styles.overlay} ${isModalOpen ? styles.show : ''}`}
            ></div>
            <TaskModal closeModal={closeModal} addTask={addTask} />
          </>
        )}
        {taskToDelete && (
          <DeleteTaskModal
            taskText={taskToDelete.text}
            onClose={closeDeleteModal}
            onDelete={() => removeTask(taskToDelete.id)}
          />
        )}
      </div>
      <button onClick={openModal} className={styles.addTaskButton}>
        Adicionar Tarefa
      </button>
    </div>
  );
}
