import { PropsWithChildren } from 'react';
import styles from './Modal.module.scss';

type ModalProps = {
    onClose?: () => void;
}

export const Modal = ({
    onClose,
    children,
}: PropsWithChildren<ModalProps>) => {
    const onModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    };

    return (
        <dialog
            className={styles.overlay}
            onClick={onClose}
        >
            <div className={styles.modal} onClick={onModalClick}>
                {children}
            </div>
        </dialog>
    )
};
