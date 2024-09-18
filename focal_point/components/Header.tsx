// Header.js
import styles from './Header.module.scss';
import Image from 'next/image';

export default function Header() {
  // formatação da data para começar com letra maiúscula
  const formatDate = (dateString: string) => {
    return dateString.charAt(0).toUpperCase() + dateString.slice(1);
  };
  // recebendo a data local
  const currentDate = formatDate(
    new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  );
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
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
