"use client";
import { Button } from "@/components/ui/button";
import React from "react";

type ActionBtnProps = {
    title:string,
    action?: () => void,
    variant?: "primary" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "link",
}

const ActionBtn = ({title, action, variant= "primary"}: ActionBtnProps) => {


  return (
    <Button size={"lg"} className="w-20 font-bold" onClick={action} variant={variant}>
      {title}
    </Button>
  );
};

export default ActionBtn;
