import { Button } from "@/components/ui/button";


interface AnalyzeButtonProps{
onClick:()=>void;
disabled?:boolean;
}


export default function AnalyzeButton({
onClick,
disabled,
}:AnalyzeButtonProps){

return (

<Button
onClick={onClick}
disabled={disabled}
className="
w-full
bg-linear-to-r
from-primary
to-purple-500
text-white
shadow-lg
"
>

Analyze Feedback With AI

</Button>

);

}