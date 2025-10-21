import { section } from "motion/react-client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { FaHome } from "react-icons/fa";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (items) => {
            return (
              <BentoGridItem
                id={items.id}
                key={items.id}
                title={items.title}
                description={items.description}
                className={items.className}
                img={items.img}
                imgclassName={items.imgClassName}
                titleclassName={items.titleClassName}
                spareImg={items.spareImg}
              />
            );
          }
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
