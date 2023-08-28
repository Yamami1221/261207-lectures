import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '../components/Header';

export default function Home() {
  const num = 10;
  return (
    <>
      <Header />
      <div>Hi</div>
      <button>Click Me</button>
    </>
  );
}
