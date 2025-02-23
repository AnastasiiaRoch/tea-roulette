/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Children,
  JSXElementConstructor,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";

const formElements: Array<string | JSXElementConstructor<any>> = [
  "input",
  "select",
  "textarea",
];

export const renderChildren = (
  children: ReactNode,
  props: Record<string, unknown>
): ReactNode =>
  Children.map(children, (child) => {
    if (isValidElement(child)) {
      const childProps = child.props as React.ComponentProps<any>;

      if (formElements.includes(child.type)) {
        return cloneElement(child, {
          ...props,
          ...childProps,
        });
      }

      if (childProps?.children) {
        return cloneElement(child, {
          children: renderChildren(childProps?.children, props),
        } as any);
      }
    }

    return child;
  });
