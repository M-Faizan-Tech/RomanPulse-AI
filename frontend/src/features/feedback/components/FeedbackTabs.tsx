import { motion } from "framer-motion";


type FeedbackTab = "text" | "file";


interface FeedbackTabsProps {

  activeTab: FeedbackTab;

  setActiveTab:(tab:FeedbackTab)=>void;

}



export default function FeedbackTabs({

  activeTab,

  setActiveTab,

}:FeedbackTabsProps){



return (

<div className="flex rounded-xl bg-black/5 p-1 dark:bg-white/5">



<button

onClick={()=>
  setActiveTab("text")
}

className="
relative
flex-1
rounded-lg
px-4
py-2
text-sm
font-medium
"


>


{
activeTab === "text" && (

<motion.div

layoutId="activeTab"

className="
absolute
inset-0
rounded-lg
bg-primary/20
"

/>

)

}



<span className="relative z-10">

Paste Comments

</span>



</button>






<button


onClick={()=>
  setActiveTab("file")
}


className="
relative
flex-1
rounded-lg
px-4
py-2
text-sm
font-medium
"

>


{
activeTab === "file" && (

<motion.div

layoutId="activeTab"

className="
absolute
inset-0
rounded-lg
bg-primary/20
"

/>

)

}




<span className="relative z-10">

Upload File

</span>



</button>



</div>

);

}