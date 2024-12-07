import { Avatar, AvatarProps } from "@mui/material";

interface IAvatarProps extends AvatarProps {
  children?: React.ReactNode;
  props?: any;
}

const AvatarComponent: React.FC<IAvatarProps> = ({ children, ...props }) => {
  return <Avatar {...props}>{children}</Avatar>;
};

export default AvatarComponent;
