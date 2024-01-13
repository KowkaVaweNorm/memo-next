import Image from 'next/image';
import styles from './page.module.scss';
import RootPage from '@/views/RootPage/RootPage';

export default function Home() {
  return (
    <main className={styles.main}>
      <RootPage />
    </main>
  );
}
