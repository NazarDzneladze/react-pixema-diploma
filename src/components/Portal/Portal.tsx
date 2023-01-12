import { PortalTarget } from "config";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ target, children }: IPortalProps) => {
  const container = document.getElementById(target) as HTMLElement;

  return createPortal(children, container);
};
