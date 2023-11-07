import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"

const Menu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="
                    focus:outline-none 
                    hover:bg-gray-100 
                    hover:opacity-80
                    transition 
                    p-2 
                    rounded-sm
                "
            >
                <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white p-2">
                <DropdownMenuItem>Flights</DropdownMenuItem>
                <DropdownMenuItem>Hotels</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>My Bookings</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Menu