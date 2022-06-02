import { useState } from 'react'
import './Categories.css'
import { useDispatch } from 'react-redux'
import { genreBook } from '../../store/actions';

export default function Categories() {
    const dispatch = useDispatch();
    const [showList, setShowList] = useState('')

    const handleShowList = () => {
        setShowList(!showList)
    }

    const handleShowFantasy = () => {
        dispatch(genreBook('Fantasy'))
    }

    const handleShowNovel = () => {
        dispatch(genreBook('Novel'))
    }

    const handleShowThriller = () => {
        dispatch(genreBook('Thriller'))
    }

    return (
        <div className="genre">
            <label>Choose a genre:</label>
            <div className='genre-list'>
                <div className='genre-item' onClick={handleShowList}>Genre</div>
                {showList &&
                   <div>
                        <div>
                        <div className='genre-item' onClick={handleShowFantasy}>Fantasy</div>
                        <div className='genre-item' onClick={handleShowNovel}>Novel</div>
                        <div className='genre-item' onClick={handleShowThriller}>Thriller</div>
                    </div>
                   </div>
                }
            </div>
        </div>
    )
}
