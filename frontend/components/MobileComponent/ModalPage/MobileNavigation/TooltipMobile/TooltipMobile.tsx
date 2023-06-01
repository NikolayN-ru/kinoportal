import { FC, useState } from "react";
// import s from './TooltipMobile.module.scss';

// interface ITooltipProps {
//   text: string;
// }

// const TooltipMobile: React.FC<ITooltipProps> = ({ text }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div onClick={() => setIsOpen(!isOpen)}>
//         {text.split(" ").slice(0, 2).join(" ")} &#x25BC;
//       </div>

//       {isOpen && (
//         <div className="tooltip">
//           {text}

//           <button className={s.tooltip_close} onClick={() => setIsOpen(false)}>
//             &times;
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default TooltipMobile;

import s from "./TooltipMobile.module.scss";

interface TooltipProps {
  title: string;
  links: string;
  titleCategory: string;
}
const TooltipMobile: React.FC<TooltipProps> = ({
  title,
  links,
  titleCategory,
}) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className={s.tooltip}>
      <div className={s.tooltiptext} onClick={() => setShowText(!showText)}>
        {title}
      </div>

      {showText && (
        <div>
          <div>{titleCategory}</div> <div>{links}</div>
        </div>
      )}
    </div>
  );
};

export default TooltipMobile;
