import { Button } from '@/shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';
import styles from './Authorization.module.scss';

const AuthorizationLazy = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.inputContainer}>
        <p>Имя:</p>
        <Input />
      </li>
      <li className={styles.inputContainer}>
        <p>Почта:</p>
        <Input />
      </li>
      <Button text='Отправить заявку' />
    </ul>
  )
}

export default AuthorizationLazy;