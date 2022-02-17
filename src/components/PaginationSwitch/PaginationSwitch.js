import React, {useEffect, useState} from 'react';
import styles from './pagination_switch.module.scss'
import classNames from "classnames";

const PaginationSwitch = ( {paginationNumber, setPaginationIndex} ) => {
    const [switchArray, setSwitchArray] = useState([])

    useEffect(() => {
        const arr = [true]
        for (let i = 1; i < paginationNumber; i++) {
            arr.push(false)
        }
        setSwitchArray(arr)
    }, [paginationNumber])

    const onSwitchClick = (num) => {
        setSwitchArray(switchArray.map((item, index) => index === num))
        setPaginationIndex(num)
    }

    return (
        <div className={styles.pagination_switch}>
            {switchArray.map((item, index) => (
                <div
                    key={index}
                    className={classNames(styles.pagination_switch__item, {[styles.pagination_switch__item_active]: item})}
                    onClick={() => onSwitchClick(index)}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    );
};

export default PaginationSwitch;