import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

const Cart = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
        <div className="flex justify-end">
            <Button variant="link">Clear All</Button>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Items</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead className="text-right">Remove</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="" alt=""/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </TableCell>
                    <TableCell> Biryani</TableCell>
                    <TableCell> 80</TableCell>
                    <TableCell>
                        <div className="w-fit flex items-center rounded-full border ">

                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default Cart