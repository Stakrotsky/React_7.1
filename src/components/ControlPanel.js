import { useState, useContext } from 'react';
import styles from './ControlPanel.module.css';
import { TaskItemContext } from '../context';

export const ControlPanel = () => {
	const { handleAddTask, setSearchQuery, toggleSort, isSorted } =
		useContext(TaskItemContext);

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleAdd = (e) => {
		e.preventDefault();
		handleAddTask(inputValue);
		setInputValue('');
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleAdd}>
				<div className={styles['input-block']}>
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						placeholder="Ввести новую задачу"
					/>
					<button type="submit">Добавить задачу</button>
				</div>
			</form>
			<div className={styles['search-and-sort-block']}>
				<input
					type="text"
					onChange={handleSearchChange}
					placeholder="Поиск задач"
				/>
				<button onClick={toggleSort}>
					{isSorted ? 'Отмена сортировки' : 'Сортировать по алфавиту'}
				</button>
			</div>
		</div>
	);
};
