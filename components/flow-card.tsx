"use client";

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

interface IProps {
  available?: boolean;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
}

export const FlowCard: React.FC<IProps> = ({
  description,
  href,
  title,
  imageSrc,
  available = false,
}) => {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {available ? "New" : "Coming soon"}
        </p>
        <h4 className="text-white font-medium text-2xl">{title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card pizza background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={imageSrc}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">{description}</p>
        </div>
        <Button
          as={Link}
          className="text-tiny"
          color="primary"
          href={href}
          isDisabled={!available}
          radius="full"
          size="sm"
        >
          {available ? "START" : "SOON"}
        </Button>
      </CardFooter>
    </Card>
  );
};
