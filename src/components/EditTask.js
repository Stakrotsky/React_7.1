import React, { useState, useContext } from 'react';
import styles from './TaskItem.module.css';
import { TaskItemContext } from '../context';

export const EditTask = () => {
	const { task, handleSaveEdit, cancelEdit } = useContext(TaskItemContext);
	const [editText, setEditText] = useState(task.text);

	const handleSave = (e) => {
		e.preventDefault();
		handleSaveEdit(task.id, editText);
	};

	return (
		<form onSubmit={handleSave} className={styles['task-item-content']}>
			<input
				type="text"
				value={editText}
				onChange={(e) => setEditText(e.target.value)}
				className={styles['task-input']}
			/>
			<div className={styles['task-item-buttons']}>
				<button type="submit" className={styles['save-button']}>
					Сохранить
				</button>
				<button
					type="button"
					onClick={cancelEdit}
					className={styles['cancel-save-button']}
				>
					Отмена
				</button>
			</div>
		</form>
	);
};
