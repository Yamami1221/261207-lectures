//define props using object destructuring
export const Task = ({ id, title }) => {
  return (
    <li className="my-1 ms-2">
      <span>{title}</span>
      <button className="btn btn-danger ms-1">Delete</button>
    </li>
  );
};
