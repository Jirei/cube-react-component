
export const cubeFaces = {
  // can't use real components with playwright test-ct I think because of the cross-environment things
  front: "front",
  right: "right",
  back: "back",
  left: "left",
  top: "top",
  bottom: "bottom",
} as const;