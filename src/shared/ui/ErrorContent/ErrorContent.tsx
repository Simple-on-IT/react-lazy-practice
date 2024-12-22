import styles from './ErrorContent.module.scss';
import { Image } from '../../../shared/ui/Image/Image';
import { Title } from '../Title/Title';
import ErrorImage from '../../images/error-image.png';
import { Button } from '../Button/Button';

interface ErrorContentProps {
    onCopy?: () => void;
}

export const ErrorContent = ({
    onCopy,
}: ErrorContentProps) => {
    return (
        <div className={styles.pageContainer}>
            <Image className={styles.image} width={'340px'} src={ErrorImage} alt='Изображение страницы' />
            <Title text={'Произошла ошибка'} />
            <Button text='Скопировать текст ошибки' transparent onClick={onCopy} />
        </div>
    )
}