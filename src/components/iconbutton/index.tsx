import { IconButton, IconButtonProps } from "@mui/material";

interface IIconButtonProps extends IconButtonProps {
  children?: React.ReactNode;
  props?: any;
}

const IconButtonComponent: React.FC<IIconButtonProps> = ({
  children,
  ...props
}) => {
  return <IconButton {...props}>{children}</IconButton>;
};

export default IconButtonComponent;
