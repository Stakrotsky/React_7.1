import React, { useState, useContext } from 'react';
import styles from './TaskItem.module.css';
import { EditTask } from './EditTask';
import { TaskItemContext } from '../context';

export const TaskItem = ({ task }) => {
	const { handleEditTask, handleDeleteTask } = useContext(TaskItemContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleSaveEdit = (taskId, newText) => {
		handleEditTask(taskId, newText);
		setIsEditing(false);
	};

	const cancelEdit = () => {
		setIsEditing(false);
	};

	return (
		<TaskItemContext.Provider value={{ task, handleSaveEdit, cancelEdit }}>
			<li className={styles['tasks-block-item']}>
				{isEditing ? (
					<EditTask />
				) : (
					<div className={styles['task-item-content']}>
						<span>{task.text}</span>
						<div className={styles['task-item-buttons']}>
							<button onClick={() => setIsEditing(true)}>Изменить</button>
							<button
								onClick={() => handleDeleteTask(task.id)}
								className={styles['delete-button']}
							>
								Удалить
							</button>
						</div>
					</div>
				)}
			</li>
		</TaskItemContext.Provider>
	);
};
