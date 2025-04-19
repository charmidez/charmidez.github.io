import React from "react";

interface SectionMineProps {
  idSectionMine: string;
  className?: string;
  children?: React.ReactNode;
}

const SectionMine = ({
  idSectionMine,
  className = "",
  children,
}: SectionMineProps) => {
  return (
    <>
        <section id={idSectionMine} className={className}>
          {children}
        </section>
    </>
  );
};

export default SectionMine;
