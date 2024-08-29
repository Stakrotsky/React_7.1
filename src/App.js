import { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import { TaskItemContext } from './context';
import styles from './app.module.css';
import { ControlPanel } from './components/ControlPanel';
import { TaskList } from './components/TaskList';

export const App = () => {
	const { tasks, error, isLoading, handleAddTask, handleEditTask, handleDeleteTask } =
		useTasks();

	const [searchQuery, setSearchQuery] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	const toggleSort = () => {
		setIsSorted((prevIsSorted) => !prevIsSorted);
	};

	return (
		<div className={styles.app}>
			<h3 className={styles.title}>Список задач:</h3>
			<ControlPanel
				setTaskText={() => {}}
				handleAddTask={handleAddTask}
				setSearchQuery={setSearchQuery}
				toggleSort={toggleSort}
				isSorted={isSorted}
			/>
			<TaskItemContext.Provider value={{ handleEditTask, handleDeleteTask }}>
				<TaskList
					tasks={tasks}
					searchQuery={searchQuery}
					isSorted={isSorted}
					isLoading={isLoading}
					error={error}
				/>
			</TaskItemContext.Provider>
		</div>
	);
};
