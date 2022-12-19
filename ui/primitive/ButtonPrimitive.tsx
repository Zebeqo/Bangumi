import { createHost, createSlot } from "create-slots";

const ButtonLabel = createSlot("span");
const ButtonIcon = createSlot("span");

export const ButtonPrimitive = (
  props: React.ComponentPropsWithoutRef<"button">
) => {
  return createHost(props.children, (slots) => {
    const textProps = slots.getProps(ButtonLabel);
    const iconProps = slots.getProps(ButtonIcon);

    return (
      <button {...props}>
        {iconProps && <span {...iconProps} />}
        {textProps && <span {...textProps} />}
      </button>
    );
  });
};

ButtonPrimitive.Label = ButtonLabel;
ButtonPrimitive.Icon = ButtonIcon;
