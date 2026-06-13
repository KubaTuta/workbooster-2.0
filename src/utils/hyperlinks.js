import { damageUrl } from "../constants/urls";

export function openHyperlink(address) {
  window.open(address, "_blank");
}

export function openDamageHyperlink(plate) {
  const url = damageUrl(plate);
  window.open(url, "_blank");
}