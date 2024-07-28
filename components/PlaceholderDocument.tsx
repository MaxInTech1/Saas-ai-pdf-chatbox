"use client"
import { PlusCircleIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";

function PlaceholderDocument() {
    const router = useRouter();
    
    const handleClick = () => {
        router.push("/dashboard/upload");
    }
    return (
        <Button onClick={handleClick} className="flex flex-col item-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-lg text-gray-400">
            <PlusCircleIcon className="h-16 w-16"/>
            <p>Add a document</p>
        </Button>
    );
}
export default PlaceholderDocument