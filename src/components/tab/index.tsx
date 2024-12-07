import { Tab, TabProps } from "@mui/material";

interface ITabProps extends TabProps {
  props?: any;
}

const TabComponent: React.FC<ITabProps> = ({ ...props }) => {
  return <Tab {...props} />;
};

export default TabComponent;
