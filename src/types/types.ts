import { StaticImageData } from "next/image";

export interface INavLink {
  path: string;
  name: string;
}

export interface IEventItem {
  avatar: string | StaticImageData;
  alt: string;
  name?: string;
  event?: string;
  date?: string;
  style?: object;
}
export interface IFeatureItem {
  icon: string | StaticImageData;
  iconAlt: string;
  title?: string;
  descr?: string;
  imgURL: string | StaticImageData;
  imgAlt: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler;
}
export interface IIntegrationItem {
  icon: string | StaticImageData;
  alt: string;
  descr?: string;
}
export interface IFAQItem {
  title?: string;
  descr?: string;
  onClick: React.MouseEventHandler;
  isOpen?: boolean;
  idx?: number;
}
export interface ISvgIcons {
  icon?: { path: React.ReactNode; viewbox: string };
  width?: string;
  height?: string;
  style?: object;
  size?: string;
}
export interface ISvgIcon {
  iconId?: string;
  style?: object;
  size?: string;
  width?: string;
  height?: string;
}
export interface ITransferItem {
  from: string;
  to: string;
  fill: string;
  descrList: string[];
  link: string;
}
