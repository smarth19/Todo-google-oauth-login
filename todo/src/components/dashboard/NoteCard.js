import React, { useState } from 'react'
import { useAppContext } from '../../reducers/app/context'
import styles from './style.module.css'

const NoteCard = ({data, submitEdit, deleteNote}) => {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState(data.title)
    const [detail, setDetail] = useState(data.detail)
    const {newAlert} = useAppContext()

    const cancelEdit = () => {
        setTitle(data.title)
        setDetail(data.detail)
        setEdit(false)
    }

    const onSubmit = () => {
        if(!title.trim() || !detail.trim()) return newAlert("Incomplete Fields")
        submitEdit({title, detail, noteId: data._id}, setEdit)
    }
    return (
        <div className={styles.noteDiv}>
            <div className={styles.titleDiv}>
                {edit ? 
                <input className={styles.titleInput} type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Edit Title"/>
                : <h2>{data.title}</h2> }
            </div>
            <div className={styles.detailDiv}>
                {edit ? 
                <textarea className={styles.detailTextarea} value={detail} onChange={e => setDetail(e.target.value)}  placeholder="Edit Detail"/>
                : <p>{data.detail}</p> }
            </div>
            <div className={styles.btnsDiv}>
                {edit ? <>
                <button className={`${styles.cancelBtn} ${styles.btnStyle}`} onClick={cancelEdit}>Cancel</button>
                <button className={`${styles.submitBtn} ${styles.btnStyle}`} onClick={onSubmit}>Submit</button>
                </>
                : <>
                <button className={`${styles.editBtn} ${styles.btnStyle}`} onClick={() => setEdit(true)}>Edit</button>
                <button className={`${styles.deleteBtn} ${styles.btnStyle}`} onClick={() => deleteNote(data._id)}>Delete</button>
                </>}
            </div>
        </div>
    )
}

export default NoteCard
