"use client";

import { Avatar, Badge } from "@nextui-org/react";
import { FC } from "react";

import { CheckIcon } from "./icons";

interface IProps {
  success: boolean;
}

const MessageCardProfile: FC<IProps> = ({ success }) => {
  return success ? (
    <Badge
      isOneChar
      color="success"
      content={<CheckIcon />}
      placement="bottom-right"
    >
      <Avatar isBordered color={"success"} radius="lg" src="pizza-avatar.png" />
    </Badge>
  ) : (
    <Avatar isBordered color={"default"} radius="lg" src="pizza-avatar.png" />
  );
};

export default MessageCardProfile;
