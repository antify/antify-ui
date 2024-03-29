import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { RouteLocationRaw } from "vue-router";

export type TabItem = {
  id: string;
  label: string;
  prependIcon?: IconDefinition;
  appendIcon?: IconDefinition;
  to?: string | RouteLocationRaw;
  clickHandler?: () => void;
  [key: string]: unknown;
}