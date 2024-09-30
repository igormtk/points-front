import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion";
  import { ListItem } from "./ListItem";
  
  interface AccordionMenuProps {
    navigation: {
      title: string;
      items: { title: string; href: string; description: string }[];
    }[];
  }
  
  export function AccordionMenu({ navigation }: AccordionMenuProps) {
    const renderListItems = (items: { title: string; href: string; description: string }[]) => (
      items.map((item) => (
        <ListItem
          key={item.title}
          title={item.title}
          href={item.href}
          description={item.description}
        />
      ))
    );
  
    return (
      <Accordion type="single" collapsible className="w-full">
        {navigation.map((category, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{category.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-1 gap-3 p-4">
                {renderListItems(category.items)}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  