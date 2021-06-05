import clsx from "clsx";
import React from "react";
import { css, styled } from "../lib/stitches.config";
import PressableOverlay from "./PressableOverlay";

const PressableButtonWrapper = styled(PressableOverlay, {
  fontWeight: "bold",
  fontSize : ".9em",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  variants: {
    variant: {
      base : {
        background : "$button",
      },
      secondary: {
        backgroundColor: "$text200",
        color: "$text",
        "&:hover": {
          backgroundColor: "$text300",
        },
      },
      primary: {
        backgroundColor: "$primary",
        color: "$text100",
      },
    },
    autoWidth : {
      true : {
        width : "100%"
      }
    },
    size : {
      small : {
        height : "25px",
      },
      base : {
        height : "40px",
      },
      medium : {
        height : "46px",
      }
    }
  },
  defaultVariants : {
    variant : "base",
    size : "base"
  }
});
const iconCSS = css({
  marginRight : 5,
  lineHeight : 0,
})

type BaseButtonProps = {
  variant?: keyof typeof PressableButtonWrapper["variants"]["variant"];
  size?: keyof typeof PressableButtonWrapper["variants"]["size"];
  className?: string;
  children ?: React.ReactNode;
  icon?: React.JSXElementConstructor<{ size: number }>;
  autoWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};


const BaseButton = (props : BaseButtonProps) => {
  const { children, variant,size, className, icon: IconComponent, onClick, autoWidth } = props;

  const iconClassnames = clsx((typeof IconComponent === "function" && children) && iconCSS().toString())

  return (
    <PressableButtonWrapper
      as="button"
      variant={variant}
      spacing={size}
      autoWidth={autoWidth}
      className={className}
      onClick={onClick}
    >
      {IconComponent && (
        <span className={iconClassnames}>
          <IconComponent size={20} />
        </span>
      )}
      {children}
    </PressableButtonWrapper>
  );
};

BaseButton.defaultProps = {
  children : null,
}

export default BaseButton;
