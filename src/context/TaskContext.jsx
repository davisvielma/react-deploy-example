import { createContext, useState, useEffect } from "react";
import { tasks as data } from "./../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);

	const createTask = ({ title, description }) => {
		const newTask = {
			id: tasks.length,
			title,
			description,
		};
		setTasks([...tasks, newTask]);
	};

	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	useEffect(() => {
		setTasks(data);
	}, []);

	return (
		<TaskContext.Provider
			value={{
				tasks,
				createTask,
				deleteTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}
