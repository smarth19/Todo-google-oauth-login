import React, { useRef } from 'react'
import NoteCard from './NoteCard'
import styles from './style.module.css'
import { useAppContext } from '../../reducers/app/context'

const Dashboard = () => {
    const { appState, appActions, api, newAlert } = useAppContext()
    const titleRef = useRef()
    const detailRef = useRef()

    const onSubmit = () => {
        const title = titleRef.current.value.trim()
        const detail = detailRef.current.value.trim()
        if(!title || !detail) return newAlert("Incomplete Fields")
        appActions.loading(true)
        api.newNote({title, detail, userId: appState.id}, (err, res) => {
            appActions.loading(false)
            if(err) return newAlert(err)
            appActions.notes([...appState.notes, res.data])
            titleRef.current.value = ''
            detailRef.current.value = ''
            newAlert(res.success)
        })
    }

    const submitEdit = (changedValues, setEdit) => {
        appActions.loading(true)
        api.patchNote({...changedValues, userId: appState.id}, (err, res) => {
            appActions.loading(false)
            if(err) return newAlert(err)
            const duplicateArray = appState.notes
            const index = duplicateArray.findIndex(e => e._id === changedValues.noteId)
            const updatedNote = {...duplicateArray[index], title: changedValues.title, detail: changedValues.detail}
            duplicateArray.splice(index, 1, updatedNote)
            appActions.notes(duplicateArray)
            setEdit(false)
            newAlert(res.success)
        })
    }

    const deleteNote = noteId => {
        appActions.loading(true)
        api.deleteNote({noteId, userId: appState.id}, (err, res) => {
            appActions.loading(false)
            if(err) return newAlert(err)
            const duplicateArray = appState.notes
            const index = duplicateArray.findIndex(e => e._id === noteId)
            duplicateArray.splice(index, 1)
            appActions.notes(duplicateArray)
            newAlert(res.success)
        })
    }
    return (
        <div>
            <header className={styles.header}>To Do Notes Application</header>
            <section className={styles.section}>
                <div className={styles.addNoteDiv}>
                    <h1>Add a New Note</h1>
                    <div className={styles.inputDiv}>
                        <input className={styles.titleInput} ref={titleRef} placeholder="Title" />
                        <div className='divider'></div>
                        <textarea  className={styles.detailTextarea} ref={detailRef} placeholder="Detail"/>
                    </div>
                    <div className={styles.submitDiv}>
                        <button onClick={onSubmit} className={styles.btnStyle}>Submit</button>
                    </div>
                </div>
                <div className='divider'></div>
                <div className={styles.savedNotesSection}>
                    <h1>Saved Notes</h1>
                    <div className={styles.savedNotes}>
                        {appState.notes.length === 0 ? 
                        <div className={styles.emptyWarning}>There are no ToDo yet, add One</div>
                        :
                        appState.notes.map(noteData => <NoteCard key={noteData._id} submitEdit={submitEdit} deleteNote={deleteNote} data={noteData}/>)
                        }
                        {/* <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/>
                        <NoteCard/> 
                        <NoteCard/>
                        <NoteCard/> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
