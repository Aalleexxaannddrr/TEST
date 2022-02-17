import React, {useState} from 'react';
import styles from './card.module.scss'
import ImgModal from "../ImgModal/ImgModal";
import classNames from "classnames";

const Card = ({cardInfo, deleteImg, albumFilter}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div className={styles.card}>
                <img
                    className={styles.card__img}
                    src={cardInfo.thumbnailUrl}
                    alt='thumbnail'
                    onClick={() => setIsModalOpen(true)}
                />
                <h4 className={styles.card__title}>
                    <a href={`/img/${cardInfo.id}`}>{cardInfo.title}</a>
                </h4>
                <div className={styles.card__bottom}>
                    <p className={styles.card__album} onClick={() => albumFilter(cardInfo.albumId)}>Альбом: {cardInfo.albumId}</p>
                    <i
                        className={classNames("material-icons", styles.card__icon)}
                        onClick={() => deleteImg(cardInfo.id)}
                    >
                        delete
                    </i>
                </div>
            </div>
            {isModalOpen && <ImgModal url={cardInfo.url} setIsOpen={setIsModalOpen} />}
        </>
    );
};

export default Card;