import Image from "next/image";
import clsx from "classnames";

import styles from "./Card.module.scss";

interface ICard {
  title: string;
  content: string;
  borderColor: string;
  Icon?: any;
  iconAlt: string;
}

const Card = ({ title, content, borderColor, Icon, iconAlt }: ICard) => {
  const borderStyle = clsx({
    [styles["Card__cyan"]]: borderColor === "cyan",
    [styles["Card__red"]]: borderColor === "red",
    [styles["Card__orange"]]: borderColor === "orange",
    [styles["Card__blue"]]: borderColor === "blue",
  });


  return (
    <div
      className={`${borderStyle} max-w-xs rounded-lg bg-[#111111]/30 
      px-6 py-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:cursor-pointer
      elevated-shadow
      `}
    >
        {Icon && (
        <div className="flex justify-start">
          <Image src={Icon} alt={iconAlt} priority width={64} height={64} />
        </div>
      )}
      <h4 className="mt-4 text-2xl text-center font-sans leading-[0.55] text-[#f5f5f5] sm:text-3xl pb-5">{title}</h4>
      <p className="mb-6 mt-1 text-left text-[#f5f5f5]">{content}</p>

      
    </div>
  );
};
export default Card;