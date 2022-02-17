import React from 'react';
import styles from './img_modal.module.scss'
import classNames from "classnames";
import {createPortal} from "react-dom";

const ImgModal = ({url, isOpen, setIsOpen}) => {
    const closeModal = (e) => {
        if (e.target.tagName === 'IMG') return
        setIsOpen(false)
    }

    if (!isOpen) return null

    return createPortal((
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
    ), document.getElementById('modal'))
};

export default ImgModal;