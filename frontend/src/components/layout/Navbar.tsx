import { Link, useNavigate } from "react-router-dom";

import Logo from "@/components/common/Logo";
import { useAuth } from "@/features/auth/hooks/useAuth";



export default function Navbar() {


const navigate = useNavigate();


const { user, signOut } = useAuth();



const handleLogout = async()=>{

await signOut();

navigate("/login");

};



return (

<nav

className="
fixed
top-0
z-50
w-full
border-b
app-border
bg-(--background)
"

>

<div

className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-4
"

>


{/* Logo */}

<Logo />





<div className="hidden items-center gap-8 md:flex">



<Link

to="/"

className="
text-sm
app-muted
transition
hover:text-(--foreground)
"

>

Home

</Link>




<Link

to="/dashboard"

className="
text-sm
app-muted
transition
hover:text-(--foreground)
"

>

Dashboard

</Link>






{
user ? (

<button

onClick={handleLogout}

className="
rounded-full
border
app-border
px-5
py-2
text-sm
font-medium
transition
hover:bg-black/5
dark:hover:bg-white/10
"

>

Logout

</button>


)

:

(

<Link

to="/login"

className="
rounded-full
bg-primary
px-5
py-2
text-sm
font-medium
text-primary-foreground
transition
hover:scale-105
"

>

Get Started

</Link>


)

}



</div>


</div>


</nav>


);

}