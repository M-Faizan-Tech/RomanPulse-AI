import { Moon, Bot, ShieldCheck, Info, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function SettingsPage() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 app-muted">
          Manage your application preferences and view
          system information.
        </p>
      </div>


      {/* Appearance */}

      <div className="rounded-2xl border app-border app-surface p-6">

        <div className="mb-6 flex items-center gap-3">

          <Moon className="h-5 w-5 text-violet-400" />

          <h2 className="text-xl font-semibold">
            Appearance
          </h2>

        </div>


        <div className="flex items-center justify-between">

          <div>

            <p className="font-medium">
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </p>

            <p className="text-sm app-muted">
              Switch between light and dark themes.
            </p>

          </div>


          <button
            onClick={toggleTheme}
            className={`
              relative
              h-7
              w-12
              rounded-full
              transition
              ${
                theme === "dark"
                  ? "bg-violet-600"
                  : "bg-zinc-300"
              }
            `}
          >

            <div
              className={`
                absolute
                top-1
                h-5
                w-5
                rounded-full
                bg-white
                transition-transform
                ${
                  theme === "dark"
                    ? "translate-x-6"
                    : "translate-x-1"
                }
              `}
            />

          </button>

        </div>

      </div>



      {/* AI Configuration */}

      <div className="rounded-2xl border app-border app-surface p-6">

        <div className="mb-6 flex items-center gap-3">

          <Bot className="h-5 w-5 text-cyan-400" />

          <h2 className="text-xl font-semibold">
            AI Configuration
          </h2>

        </div>


        <div className="space-y-4">


          <div className="flex items-center justify-between">

            <span className="app-muted">
              AI Model
            </span>


            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
              Gemini 2.5 Flash
            </span>

          </div>



          <div className="flex items-center justify-between">

            <span className="app-muted">
              Status
            </span>


            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
              Connected
            </span>

          </div>


        </div>

      </div>



      {/* Authentication */}

      <div className="rounded-2xl border app-border app-surface p-6">


        <div className="mb-6 flex items-center gap-3">

          <ShieldCheck className="h-5 w-5 text-green-400" />

          <h2 className="text-xl font-semibold">
            Authentication
          </h2>

        </div>



        <div className="flex items-center justify-between">


          <span className="app-muted">
            Provider
          </span>


          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
            Supabase Authentication
          </span>


        </div>


      </div>




      {/* Application */}


      <div className="rounded-2xl border app-border app-surface p-6">


        <div className="mb-6 flex items-center gap-3">

          <Info className="h-5 w-5 text-blue-400" />


          <h2 className="text-xl;font-semibold">
            Application
          </h2>


        </div>



        <div className="space-y-4">


          <div className="flex justify-between">

            <span className="app-muted">
              Name
            </span>

            <span>
              RomanPulse AI
            </span>

          </div>



          <div className="flex justify-between">

            <span className="app-muted">
              Version
            </span>

            <span>
              v1.0.0
            </span>

          </div>



          <div className="flex justify-between">

            <span className="app-muted">
              Frontend
            </span>

            <span>
              React + Vite
            </span>

          </div>



          <div className="flex justify-between">

            <span className="app-muted">
              Backend
            </span>

            <span>
              FastAPI
            </span>

          </div>


        </div>


      </div>




      {/* Coming Soon */}


      <div className="rounded-2xl border border-dashed border-violet-500/40 bg-violet-500/5 p-6">


        <div className="mb-5 flex items-center gap-3">


          <Sparkles className="h-5 w-5 text-violet-400" />


          <h2 className="text-xl font-semibold">
            Coming Soon
          </h2>


        </div>



        <ul className="space-y-2 app-muted">

          <li>• Email Reports</li>

          <li>• WhatsApp Integration</li>

          <li>• Meta API Integration</li>

          <li>• Urdu Script Support</li>

          <li>• Multi-user Workspace</li>


        </ul>


      </div>


    </div>
  );
}