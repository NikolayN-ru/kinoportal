import style from './Icon.module.scss';
import { Search } from "../../../public/svg/index";
import { Notify } from "../../../public/svg/index";
import { Avatar } from "../../../public/svg/index";

type IconComponentProps = { name: string };
type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = {
  search: Search,
  notify: Notify,
  avatar: Avatar,
};

const IconComponent = ({ name, ...props }: IconComponentProps) => {
  let Icon = iconTypes[name];
  return <Icon className={style.icon} {...props} />;
};

export default IconComponent;
