// import { useState } from "react";
import "./value.css";
import data from "../../src/utils/accordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Value() {
  return (
    <>
      <section className="value">
        <div className="container py-lg-5">
          <div className="row ">
            <div className="image col-12 col-md-12 col-lg-6 col-xl-5 ">
              <img src="../public/value.png" alt="" />
            </div>
            <div className=" rigth mt-sm-3  mt-lg-0 col-12 col-md-12 col-lg-6 col-xl-6 ms-xl-5 ps-xl-5 mt-lg-4  ">
              <span className="orangeText">Our Value</span>
              <h2 className="primaryText my-3">Value We Give to You</h2>
              <p className="secondaryText fs-6 mb-4">
                We always ready to help by providijng the best services for you.
                We beleive a good blace to live can make your life better
              </p>

              <Accordion
                className="accordion mt-5 d-flex gap-4 flex-column "
                allowMultipleExpanded={false}
                preExpanded={[0]}
              >
                {data.map((item, i) => (
                  // const [className ,useClassName] =useState(null)
                  <AccordionItem className="accordionItem " key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="my-2 accordionButton d-flex align-items-center justify-content-between">
                        {/* <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState> */}

                        <div className=" icon rounded-2">{item.icon}</div>
                        <span className="title primaryText fs-5 ">
                          {item.heading}
                        </span>
                        <div className="icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className=" details secondaryText mt-3 ">
                        {" "}
                        {item.detail}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
