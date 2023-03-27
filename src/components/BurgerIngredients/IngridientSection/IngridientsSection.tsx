import React, {ReactNode} from "react";

type TIngrSection = {
  sectionStyle:string,
  children: ReactNode
}

function IngridientsSection({sectionStyle,children}:TIngrSection) {
  return <section className={sectionStyle}>{children}</section>;
}



export {IngridientsSection}
