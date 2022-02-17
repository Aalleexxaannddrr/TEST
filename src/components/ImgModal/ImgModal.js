import React from 'react';
import styles from './img_modal.module.scss'
import classNames from "classnames";

const ImgModal = ({url, setIsOpen}) => {

    const closeModal = (e) => {
        if (e.target.tagName === 'IMG') return
        setIsOpen(false)
    }

    return (
        <div className={styles.img_modal} onClick={closeModal}>
            <div>
                <i className={classNames("material-icons", styles.img_modal__icon)}>
                    close
                </i>
                <div>
                    <img src={url} alt={url}/>
                </div>
            </div>
        </div>
    );
};

export default ImgModal;