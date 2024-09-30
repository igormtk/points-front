import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar";
  
  interface NavigationItem {
    title: string;
    href: string;
    description: string;
  };
  
  interface NavigationMenu {
    title: string;
    items: NavigationItem[];
  };
  
  interface MenuBarProps {
    navigation: NavigationMenu[];
  }
  
  export function MenuBar({ navigation }: MenuBarProps) {
    return (
      <div className="flex justify-center">
        <Menubar className="border-none flex space-x-8">
          {navigation.map((menu) => (
            <MenubarMenu key={menu.title}>
              <MenubarTrigger className="cursor-pointer">{menu.title}</MenubarTrigger>
              <MenubarContent>
                {menu.items.map((item) => (
                  <MenubarItem key={item.title} className="cursor-pointer my-2">
                    {item.title}
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          ))}
        </Menubar>
      </div>
    );
  }
  