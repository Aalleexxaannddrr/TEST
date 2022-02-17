import React from 'react';
import useFetch from "../../hooks/useFetch";
import {API_URL} from "../../utils/consts";
import {useParams, useNavigate} from "react-router-dom";
import styles from './img_page.module.scss'
import classNames from "classnames";

const ImgPage = () => {
    const {id} = useParams()
    const {data, loading, error} = useFetch(API_URL + `/${id}?api_key=APIKEY`)
    const navigate = useNavigate()

    const swipeImg = (id) => {
        if (id === 0) id = 5000
        if (id === 5001) id = 1
        navigate(`/img/${id}`)
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.img_container}>
                <i
                    className={classNames("material-icons", styles.icon)}
                    onClick={() => {swipeImg(data.id - 1)}}
                >
                    keyboard_arrow_left
                </i>
                <img src={data.url} alt={data.title}/>
                <i
                    className={classNames("material-icons", styles.icon)}
                    onClick={() => {swipeImg(data.id + 1)}}
                >
                    keyboard_arrow_right
                </i>
            </div>
            <a href='/'>
                <h4>
                    Вернуться к списку
                </h4>
            </a>
        </>
    );
};

export default ImgPage;