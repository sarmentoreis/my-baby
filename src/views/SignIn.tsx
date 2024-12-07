import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/authentication";
import { useState } from "react";
import { handleChange } from "../utils/core";
import { useAppContext } from "../Context";
import BoxComponent from "../components/box";
import GridComponent from "../components/grid";
import AvatarComponent from "../components/avatar";
import TextComponent from "../components/typography";
import TextFieldComponent from "../components/textfield";
import ButtonComponent from "../components/button";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { showSnackMessage, showAlertMessage, supabase, translate } =
    useAppContext();
  const [data, setData] = useState({
    email: {
      value: "",
      error: null,
      helperText: null,
    },
    password: {
      value: "",
      error: null,
      helperText: null,
    },
  });

  const verifyLogin = async () => {
    let { data: response, error } = await signIn(
      data.email.value,
      data.password.value,
      supabase
    );

    if (error && error.message === "Invalid login credentials") {
      showSnackMessage("Dados de usuário inválidos");
    } else {
      localStorage.setItem("session", JSON.stringify(response.session));
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    }
  };

  return (
    <BoxComponent
      sx={{
        height: "100vh",
        paddingTop: 8,
      }}
    >
      <GridComponent sx={styles.boxAdjustment} container={true}>
        <GridComponent sx={styles.centerBox} item={true} size={{ xs: 12 }}>
          <AvatarComponent sx={{ width: 180, height: 180 }} src={logo} />
        </GridComponent>
        <GridComponent
          sx={{
            ...styles.centerBox,
            ...styles.marginTop,
          }}
          item={true}
          size={{ xs: 12 }}
        >
          <TextComponent variant="h3">Login</TextComponent>
        </GridComponent>
        <GridComponent sx={styles.centerBox} item={true} size={{ xs: 12 }}>
          <TextComponent variant="h5">{translate("welcome")}</TextComponent>
        </GridComponent>
        <GridComponent sx={styles.marginTop} item={true} size={{ xs: 12 }}>
          <TextFieldComponent
            label="E-mail"
            fullWidth={true}
            onChange={(event) =>
              handleChange(data, setData, event.target.value, "email")
            }
            value={data.email.value}
          />
        </GridComponent>
        <GridComponent sx={styles.marginTop} item={true} size={{ xs: 12 }}>
          <TextFieldComponent
            label="Senha"
            fullWidth={true}
            onChange={(event) =>
              handleChange(data, setData, event.target.value, "password")
            }
            type="password"
            value={data.password.value}
          />
        </GridComponent>
        <GridComponent
          sx={{
            ...styles.centerBox,
            ...styles.marginTop,
          }}
          item={true}
          size={{ xs: 12 }}
        >
          <Link to="/signup">Cadastrar</Link>
        </GridComponent>
        <GridComponent sx={styles.marginTop} item={true} size={{ xs: 12 }}>
          <ButtonComponent fullWidth={true} onClick={verifyLogin}>
            Entrar
          </ButtonComponent>
        </GridComponent>
      </GridComponent>
    </BoxComponent>
  );
};

const styles = {
  centerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxAdjustment: {
    padding: 2,
  },
  marginTop: {
    marginTop: 4,
  },
};

export default SignIn;
