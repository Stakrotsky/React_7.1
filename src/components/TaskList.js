import { useContext } from 'react';
import styles from './TaskList.module.css';
import { TaskItem } from './TaskItem';
import { filterTasks, sortTasks } from '../utils/utils';
import { TaskItemContext } from '../context';

export const TaskList = () => {
	const { tasks, isLoading, searchQuery, isSorted } = useContext(TaskItemContext);

	const filteredTasks = sortTasks(filterTasks(tasks, searchQuery), isSorted);

	return (
		<div>
			<h3 className={styles.title}>Текущие задачи:</h3>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles['tasks-block-list']}>
					{filteredTasks.map((task) => (
						<TaskItem key={task.id} task={task} />
					))}
				</ul>
			)}
		</div>
	);
};
