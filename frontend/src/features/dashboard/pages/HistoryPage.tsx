import { Link } from "react-router-dom";
import { Clock3, Eye, Trash2, History } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  useFeedbackStore,
} from "@/store/feedbackStore";


export default function HistoryPage() {


  const {
    history,
    loadHistoryAnalysis,
    removeHistory,
  } = useFeedbackStore();




  if (history.length === 0) {

    return (

      <div className="flex min-h-[60vh] items-center justify-center">

        <div className="text-center">


          <History
            className="
              mx-auto
              mb-4
              h-12
              w-12
              text-(--muted)
            "
          />



          <h2 className="text-2xl font-bold">

            No Analysis History

          </h2>



          <p className="mt-3 app-muted">

            Your previous AI analyses will appear here.

          </p>




          <Link to="/dashboard/upload">

            <Button className="mt-6">

              Analyze Feedback

            </Button>

          </Link>



        </div>

      </div>

    );

  }





  return (

    <div className="space-y-8">


      {/* Header */}


      <div>


        <h1 className="text-4xl font-bold">

          Analysis History

        </h1>



        <p className="mt-2 app-muted">

          Review your previous AI analyses.

        </p>


      </div>






      {/* History Cards */}



      <div className="grid gap-5">


        {
          history.map((item)=>(


            <div

              key={item.id}

              className="
                rounded-2xl
                border
                app-border
                app-surface
                p-6
                transition
                hover:border-violet-500/40
              "

            >



              <div

                className="
                  flex
                  flex-col
                  gap-5
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                "

              >





                <div className="space-y-3">


                  <div

                    className="
                      flex
                      items-center
                      gap-2
                      app-muted
                    "

                  >

                    <Clock3 className="h-4 w-4" />


                    <span className="text-sm">

                      {
                        new Date(
                          item.createdAt
                        ).toLocaleString()
                      }

                    </span>


                  </div>







                  <div className="flex flex-wrap gap-3">



                    <span

                      className="
                        rounded-full
                        bg-emerald-500/20
                        px-3
                        py-1
                        text-sm
                        text-emerald-500
                      "

                    >

                      {
                        item.analysis.sentiment
                      }

                    </span>





                    <span

                      className="
                        rounded-full
                        bg-violet-500/20
                        px-3
                        py-1
                        text-sm
                        text-violet-500
                      "

                    >

                      Brand Health:
                      {" "}
                      {
                        Math.round(
                          item.analysis.brandHealthScore
                        )
                      }

                    </span>





                    <span

                      className="
                        rounded-full
                        bg-orange-500/20
                        px-3
                        py-1
                        text-sm
                        text-orange-500
                      "

                    >

                      {
                        item.analysis.urgency
                      }

                    </span>



                  </div>







                  <p className="max-w-3xl text-(--foreground)/80">


                    {
                      item.analysis.overallSummary
                    }


                  </p>



                </div>








                <div className="flex gap-3">



                  <Link

                    to="/dashboard"

                    onClick={()=>{

                      loadHistoryAnalysis(
                        item.analysis
                      );

                    }}

                  >

                    <Button>


                      <Eye className="mr-2 h-4 w-4"/>


                      View


                    </Button>


                  </Link>







                  <Button

                    variant="destructive"

                    onClick={()=>{

                      removeHistory(
                        item.id
                      );

                    }}

                  >


                    <Trash2 className="mr-2 h-4 w-4"/>


                    Delete


                  </Button>



                </div>




              </div>



            </div>



          ))
        }



      </div>



    </div>

  );

}