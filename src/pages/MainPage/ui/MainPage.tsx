import styles from './MainPage.module.scss';
import MainImage from '../../../shared/images/image.png';
import { Image } from '../../../shared/ui/Image/Image';
import { Title } from '../../../shared/ui/Title/Title';
import { Button } from '../../../shared/ui/Button/Button';
import { Suspense, useState } from 'react';
import { Modal } from '../../../shared/ui/Modal/Modal';
import { Authorization } from '../../../features/Authorization';
import { ErrorComponent } from '@/shared/ui/ErrorComponent/ErrorComponent';

export const MainPage = () => {
  const [showError, setShowError] = useState(false);
  const [isModalOpened, setIsModalpened] = useState(false);

  const onOpenModal = () => {
    setIsModalpened(true);
  }
  const onCloseModal = () => {
    setIsModalpened(false);
  }

  const onError = () => {
    setShowError(true);
  }

  return (
    <div className={styles.pageContainer}>
      {showError && <ErrorComponent />}
      <Image className={styles.image} width={'340px'} src={MainImage} alt='Изображение страницы' />
      <Title text={'Новогодняя распродажа'} />
      <p className={styles.text}>
        Успеть купить подарки до повышения цен!
      </p>
      <ul className={styles.buttonsContainer}>
        <li className={styles.button}><Button text='Перейти' onClick={onOpenModal} /></li>
        <li className={styles.button}><Button text='Нет, спасибо' transparent onClick={onError} /></li>
      </ul>

      {isModalOpened && (
        <Modal onClose={onCloseModal}>
          <Authorization />
        </Modal>
      )}
    </div>
  )
}