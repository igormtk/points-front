import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "../ui/dropdown-menu";

export function DropdownContentProfile() {
    return (
        <DropdownMenuContent>
        <DropdownMenuLabel>Meu perfil</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Editar Perfil</DropdownMenuItem>
        <DropdownMenuItem>Meu Plano</DropdownMenuItem>
        <DropdownMenuItem>Meus Pedidos</DropdownMenuItem>
        <DropdownMenuItem>Meus Pontos</DropdownMenuItem>
        <DropdownMenuItem>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    )
}