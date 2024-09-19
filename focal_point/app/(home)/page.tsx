import Tasks from '@/components/Tasks';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Tasks />
    </div>
  );
}
