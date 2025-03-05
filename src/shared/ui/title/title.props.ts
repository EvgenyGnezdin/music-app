import React from "react"

export type title = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    fontSize?: number;
    fontWeight?: number;
    backgroundColor?: string;
    color?: string;
    className?: string
}