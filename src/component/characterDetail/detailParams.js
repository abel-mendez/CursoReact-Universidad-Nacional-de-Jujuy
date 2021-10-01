import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Card from "../util/card/card";
export default function Character(props) {
  const params = useParams();
  const element = props.characters.find((element) => element.id === params.id);
  const history = useHistory();
  const volver = () => {
    history.push("/");
  };
  return (
    <>
      <Card
        name={element.name + " " + element.lastname}
        url={element.photo}
      ></Card>
      <button
        type="button"
        onClick={() => {
          volver();
        }}
      >
        Volver Al Home
      </button>
    </>
  );
}
