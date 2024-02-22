import React, { ReactNode } from "react";

interface IFlexboxProps {
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    flexBasis?: string | number;
    flexGrow?: number;
    flexShrink?: number;
    flex?: string | number;
    gap?: string | number;
    className?: string;
    children: ReactNode;
}

export const Flex = ({
    flexDirection = "row",
    justifyContent = 'space-between',
    alignItems,
    flexWrap,
    flexBasis,
    flexGrow,
    flexShrink,
    flex,
    gap,
    className = '',
    children,
}: IFlexboxProps) => {


    const flexStyles: React.CSSProperties = {
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        flexBasis,
        flexGrow,
        flexShrink,
        flex,
        gap
    };

    return <div style={flexStyles} className={className}>{children}</div>;
};