export const navItemClasses = {
  base: `inline-flex w-full items-center align-middle rounded-md
    px-2 py-1.5 text-sm transition-all duration-300 ease-in-out 
    text-text-secondary! cursor-pointer`,
  hover: "hover:bg-action-hover!",
  active: "bg-primary/(--opacity-hover)! hover:bg-primary/(--opacity-focus)! text-primary!",
  disabled: "cursor-not-allowed hover:bg-transparent text-action-disabled!",
};
