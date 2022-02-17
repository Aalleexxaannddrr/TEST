import React from 'react';
import Card from "../Card/Card";
import styles from './card_list.module.scss'

const CardList = ({data, deleteImg, albumFilter}) => {
    return (
        <div className={styles.card_list}>
            {data.map(item => (
                <Card key={item.id} cardInfo={item} deleteImg={deleteImg} albumFilter={albumFilter} />
            ))}
        </div>
    );
};

export default CardList;