export default function TasksTable() {
  const tasks = [
    {
      title: "Approve PR",
      desc: "Pull Request with SOLID Principal",
      status: "Pending"
    },
    {
      title: "UAT Approval",
      desc: "Business Validation",
      status: "Pending"
    },
    {
      title: "Assign Stories",
      desc: "Assign Stories Priority Wise",
      status: "Pending"
    },
    {
      title: "Create Stories",
      desc: "TasksUI Stories",
      status: "Pending"
    },
    {
      title: "Create Complete Feature",
      desc: "JIRA feature for TasksUI",
      status: "Pending"
    },
    {
      title: "SignOff Tasks",
      desc: "Business Approval",
      status: "Done"
    },
    {
      title: "Estimate Stories",
      desc: "Discuss With Team",
      status: "Done"
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">📋 All Tasks</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Task</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border font-semibold">{task.title}</td>
              <td className="p-3 border">{task.desc}</td>
              <td
                className={`p-3 border font-medium ${
                  task.status === "Done"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {task.status}
              </td>
              <td className="p-3 border">
                <button className="bg-yellow-500 px-3 py-1 text-white rounded-md mr-2">
                  Edit
                </button>
                <button className="bg-red-600 px-3 py-1 text-white rounded-md">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}