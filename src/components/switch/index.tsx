import { Switch, SwitchProps } from "@mui/material";

interface ISwitchProps extends SwitchProps {
  props?: any;
}

const SwitchComponent: React.FC<ISwitchProps> = ({ ...props }) => {
  return <Switch {...props} />;
};

export default SwitchComponent;
