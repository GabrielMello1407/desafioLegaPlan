'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');

  // Função para pegar a data do local desejado
  useEffect(() => {
    const formatDate = () => {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      };
      return today.toLocaleDateString('pt-BR', options);
    };

    setCurrentDate(formatDate());
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.logo}>
          <a href="/">
            <Image
              alt="Logo Focal Point"
              src="/focalpoint_logo.png"
              width={150}
              height={36}
            />
          </a>
        </li>
        <li className={styles.greeting}>Bem-vindo de volta, Marcus</li>
        <li className={styles.date}>{currentDate}</li>
      </ul>
    </nav>
  );
}
