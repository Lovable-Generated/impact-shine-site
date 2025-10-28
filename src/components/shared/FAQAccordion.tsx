import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/mockData";

export const FAQAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={`item-${faq.id}`}
          className="bg-card border border-border rounded-lg px-6"
        >
          <AccordionTrigger className="text-left font-semibold hover:text-secondary hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
