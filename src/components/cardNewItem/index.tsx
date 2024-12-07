import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";
import CardComponent from "../card";
import GridComponent from "../grid";
import TextComponent from "../typography";
import FabComponent from "../fab";

const CardNewItemComponent = ({ Icon, color, title, actionType }) => {
  const navigate = useNavigate();
  const { translate } = useAppContext();

  return (
    <CardComponent
      sx={{
        overflow: "visible",
        borderRadius: "10%",
      }}
    >
      <GridComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Icon
          sx={{
            marginTop: ".2em",
            fontSize: "3em",
            color: color,
          }}
        />
        <TextComponent
          sx={{
            fontSize: ".80em",
            marginTop: "0.5em",
            fontWeight: "700",
            textAlign: "center",
            wordWrap: "break-word",
            width: "90%",
          }}
        >
          {title}
        </TextComponent>
      </GridComponent>
      <GridComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextComponent
          sx={{
            marginTop: "0.5em",
            fontSize: "0.8em",
            fontWeight: "400",
            color: "#8f8f8f",
          }}
        >
          {translate("add_something")}
        </TextComponent>
      </GridComponent>
      <GridComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FabComponent
          size="small"
          sx={{
            color: color,
            backgroundColor: "#fff",
            position: "relative",
            bottom: "-20px",
          }}
          onClick={() => navigate(`/new/${actionType}`)}
        >
          <AddIcon />
        </FabComponent>
      </GridComponent>
    </CardComponent>
  );
};

export default CardNewItemComponent;
