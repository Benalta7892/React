import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../features/users";
import spinner from "../../assets/spinner.svg";

export default function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);

  if (!users.data && !users.loading && !users.error) {
    dispatch(getData());
  }

  return <div>Users</div>;
}
