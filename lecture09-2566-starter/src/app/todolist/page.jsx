export default function TodolistPage() {
  return (
    <div style={{ maxWidth: "400px" }} className="mx-auto">
      <h3 className="text-center">Simple Todo List</h3>
      <div className="d-flex">
        <input
          className="form-control d-inline mx-1"
          placeholder="Insert task"
          style={{ width: "250px" }}
        />
        <button className="btn btn-primary ">Add task</button>
      </div>
    </div>
  );
}
