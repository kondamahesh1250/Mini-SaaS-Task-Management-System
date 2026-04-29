import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;
    await API.post("/tasks", { title });
    alert("Task added successfully");
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await API.put(`/tasks/${id}`);
    alert("Task updated successfully");
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Pending" ? "Completed" : "Pending",
            }
          : task,
      ),
    );
    // fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    alert("Task deleted successfully");
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>

        {/* Add Task */}
        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-center text-gray-500">No tasks yet</p>
          )}

          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border hover:shadow-sm transition"
            >
              <span
                className={`text-gray-800 ${
                  task.status === "Completed"
                    ? "line-through text-gray-400"
                    : ""
                }`}
              >
                {task.title}
              </span>

              <div className="flex gap-3">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="text-green-500 hover:text-green-600 text-lg"
                >
                  ✓
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-600 text-lg"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
