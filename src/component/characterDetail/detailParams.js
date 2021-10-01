import { useHistory, useParams } from "react-router";
import Card from "../util/card/card";
import data from "../../data/data.json";
export default function Character(props) {
  const params = useParams();
  const element = data.Characters.find((element) => element.id === params.id);
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
