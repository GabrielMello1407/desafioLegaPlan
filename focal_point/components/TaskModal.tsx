import { useState } from 'react';
import styles from './TaskModal.module.scss'; // Importe o CSS módulo para estilos

interface TaskModalProps {
  closeModal: () => void;
  addTask: (task: { id: number; text: string; completed: boolean }) => void;
}

export default function TaskModal({ closeModal, addTask }: TaskModalProps) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      const newTask = { id: Date.now(), text: taskText, completed: false };
      addTask(newTask); // Adiciona a nova tarefa através da função passada como props
      closeModal(); // Fechar o modal após adicionar a tarefa
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Nova Tarefa</h2>
        <label>
          Título
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Digite"
            className={styles.inputField}
          />
        </label>
        <div className={styles.buttonContainer}>
          <button onClick={handleAddTask} className={styles.confirmButton}>
            Adicionar
          </button>
          <button onClick={closeModal} className={styles.cancelButton}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
