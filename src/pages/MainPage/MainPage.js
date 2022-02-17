import React, {useEffect, useState} from 'react';
import {API_URL} from "../../utils/consts";
import useFetch from "../../hooks/useFetch";
import CardList from "../../components/CardList/CardList";
import PaginationSwitch from "../../components/PaginationSwitch/PaginationSwitch";
import styles from './main_page.module.scss'

const MainPage = () => {
    const {data, loading, error} = useFetch(API_URL)
    const [imgs, setImgs] = useState([])
    const [pagination, setPagination] = useState([])
    const [paginationIndex, setPaginationIndex] = useState(0)
    const [albums, setAlbums] = useState([])
    const [selectedAlbum, setSelectedAlbum] = useState('Не выбрано')

    useEffect(() => {
        if (!data) return
        const albumsArray = []
        data.forEach(item => {
            if (!albumsArray.includes(item.albumId)) albumsArray.push(item.albumId)
        })
        setAlbums(albumsArray)
        setImgs(data)
    }, [data])

    useEffect(() => {
        if (!imgs) return
        setPagination(imgs.slice(paginationIndex * 100, paginationIndex * 100 + 100))
    }, [imgs, paginationIndex])

    const deleteImg = (id) => {
        const img = pagination.find(item => item.id === id)
        const imgIndex = imgs.indexOf(img)
        const arr = imgs.slice()
        arr.splice(imgIndex, 1)
        setImgs(arr)
    }

    const albumFilter = (albumId) => {
        setSelectedAlbum(albumId)
        setPaginationIndex(0)
        if (albumId === 'Не выбрано') {
            setImgs(data)
        } else {
            setImgs(data.filter(item => item.albumId === +albumId))
        }
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <>
            <div className={styles.selection}>
                <h3>
                    Фильтрация по альбому
                </h3>
                <select
                    className={styles.selection__select}
                    value={selectedAlbum}
                    onChange={(e) => albumFilter(e.target.value)}
                >
                    <option value='Не выбрано'>Не выбрано</option>
                    {albums.map(album => (
                        <option key={album} value={album}>Альбом {album}</option>
                    ))}
                </select>
            </div>
            <CardList data={pagination} deleteImg={deleteImg} albumFilter={albumFilter} />
            <PaginationSwitch paginationNumber={Math.ceil(imgs.length / 100)} setPaginationIndex={setPaginationIndex} />
        </>
    );
};

export default MainPage;