// src/components/Accordion.js
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { AccordionContent } from '../utils';
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 max-w-4xl md:mx-6">
      <button
        className="w-full text-left p-4  focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className={`${isOpen ? "text-bruning":"text-white"} font-DMMono text-[18px] md:text-[22px] `}>{title}</span>
          <span>{isOpen ? <MdOutlineKeyboardArrowUp color='white' width="200px" />: <MdOutlineKeyboardArrowDown color='white' />}</span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 text-white font-DMMono text-[14px] md:text-[20px]">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className=" mx-auto my-8  rounded-lg overflow-hidden shadow-lg">
        {AccordionContent.map((accordion)=>(
             <AccordionItem  key={accordion.id} title={accordion.title}>
                <p className='text-white '>{accordion.description}</p>
            </AccordionItem>
        ))}
      
    </div>
  );
};

export default Accordion;
