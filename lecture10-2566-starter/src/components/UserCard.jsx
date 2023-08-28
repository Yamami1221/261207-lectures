"use client";

import { Icon3dCubeSphere, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import { UserCardDetail } from "./UserCardDetail";
import Image from "next/image";

export const UserCard = ({ name, imgUrl, address, email }) => {
  const [isDetailShown, setIsDetailShown] = useState(false);

  const userCardOnClick = () => {
    setIsDetailShown(!isDetailShown);
  };

  return (
    <div className="border-bottom">
      <div className="d-flex align-items-center p-3" onClick={userCardOnClick}>
        <Image src={imgUrl} width={90} height={90} className="rounded-circle me-4" alt="User Picture" />
        <span className="text-center display-6 me-auto">{name}</span>
        {isDetailShown ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {isDetailShown ? <UserCardDetail email={email} address={address} /> : null}
    </div>
  );
};
