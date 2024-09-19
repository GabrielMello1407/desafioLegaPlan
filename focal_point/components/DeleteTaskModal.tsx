'use client';

import React from 'react';
import styles from './DeleteTaskModal.module.scss';

interface DeleteTaskModalProps {
  taskText: string;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteTaskModal({
  onClose,
  onDelete,
}: DeleteTaskModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Deletar Tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles.modalActions}>
          <button onClick={onDelete} className={styles.deleteButton}>
            Deletar
          </button>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
