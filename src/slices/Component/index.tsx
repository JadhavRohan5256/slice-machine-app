import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Component`.
 */
export type ComponentProps = SliceComponentProps<Content.ComponentSlice>;

/**
 * Component for "Component" Slices.
 */
const Component: FC<ComponentProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for component (variation: {slice.variation}) Slices
    </section>
  );
};

export default Component;
