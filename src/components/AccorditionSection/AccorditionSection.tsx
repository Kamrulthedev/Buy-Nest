import Heading from "@/Heading/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AccorditionSection = () => {
  return (
    <div className="mt-24 mb-20">
      <Heading
        Heading="Know the Difference"
        Text="The search for your favorite mechanical switch starts with understanding the 3 basic types."
      ></Heading>

      <div className="">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Clicky</AccordionTrigger>
            <AccordionContent>
              Clicky switches provide the most tactility and make an audible
              'click' when typing. Clicky switches are typically preferred by
              typists, but are noticeably louder than other mechanical switches.
              Use with caution near noise sensitive co-workers
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Linear</AccordionTrigger>
            <AccordionContent>
              Popular with gamers and quiet typists, linear switches have no
              bump before bottoming out. They travel smoothly and increase in
              resistance as you reach the end of the key press. Because they
              have no bump, these are often some of the quietest switches..
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Tactile</AccordionTrigger>
            <AccordionContent>
              About halfway between linear and clicky switches, tactile switches
              have a (sometimes subtle) bump you can feel in the key press
              before bottoming out. While this bump traditionally represented
              the actuation point, recent switches have actuation points and
              tactile bumps all along the travel distance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default AccorditionSection;
