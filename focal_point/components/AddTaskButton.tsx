import { useState } from 'react';
import TaskModal from './TaskModal';
import styles from './AddTaskButton.module.scss'; // Importe o CSS módulo para estilos

interface AddTaskButtonProps {
  addTask: (task: { id: number; text: string; completed: boolean }) => void;
}

export default function AddTaskButton({ addTask }: AddTaskButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal} className={styles.addButton}>
        Adicionar Tarefa
      </button>
      {isModalOpen && <TaskModal closeModal={closeModal} addTask={addTask} />}
    </>
  );
}
