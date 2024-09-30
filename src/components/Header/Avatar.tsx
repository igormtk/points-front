import { Fragment } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

export function UserAvatar() {
  return (
    <Fragment>
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="flex align-middle"
        />
        <AvatarFallback>
          <Skeleton className="h-12 w-12 rounded-full" />
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col justify-start ml-4 text-start">
        <h4>{"Olá, Igor Eiiji"}</h4>
        <div>{"10.492 pontos"}</div>
      </div>
    </Fragment>
  );
}
