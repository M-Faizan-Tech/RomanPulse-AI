import { Button } from "@/components/ui/button";
import { useFeedbackStore } from "@/store/feedbackStore";
import { Link } from "react-router-dom";
import { exportPDF } from "../utils/exportPDF";

import SentimentPieChart from "../components/charts/SentimentPieChart";
import BrandHealthGauge from "../components/charts/BrandHealthGauge";


export default function DashboardPage() {

  const { analysis } = useFeedbackStore();


  const handleExportPDF = () => {

    if (!analysis) return;

    exportPDF(analysis);

  };



  if (!analysis) {

    return (

      <div className="flex min-h-[70vh] items-center justify-center">

        <div className="max-w-xl text-center">

          <h2 className="text-3xl font-bold">
            No Analysis Available
          </h2>


          <p className="mt-4 app-muted leading-7">

            You haven't analyzed any customer feedback yet.
            Upload comments or use a demo dataset to generate
            your AI-powered dashboard.

          </p>


          <Link to="/dashboard/upload">

            <Button className="mt-8">

              Analyze New Feedback

            </Button>

          </Link>


        </div>

      </div>

    );

  }



  return (

    <div className="space-y-6">



      {/* Header */}


      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


        <div>

          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>


          <p className="mt-2 app-muted">
            AI Customer Feedback Intelligence
          </p>


        </div>


        <Button onClick={handleExportPDF}>
          Export PDF
        </Button>


      </div>





      {/* KPI Cards */}


      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">


        {[
          {
            title:"Brand Health",
            value:`${analysis.brandHealthScore}/100`
          },
          {
            title:"Overall Sentiment",
            value:analysis.sentiment
          },
          {
            title:"Emotion",
            value:analysis.emotion
          },
          {
            title:"Urgency",
            value:analysis.urgency
          }
        ].map((item,index)=>(

          <div
            key={index}
            className="rounded-2xl border app-border app-surface p-6"
          >

            <p className="text-sm app-muted">
              {item.title}
            </p>


            <h2 className="mt-3 text-3xl font-bold capitalize">
              {item.value}
            </h2>


          </div>

        ))}


      </div>





      {/* Charts */}


      <div className="grid gap-6 xl:grid-cols-2">


        <div className="rounded-2xl border app-border app-surface p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Sentiment Breakdown
          </h2>


          <SentimentPieChart
            sentimentBreakdown={
              analysis.sentimentBreakdown
            }
          />


        </div>





        <div className="rounded-2xl border app-border app-surface p-6">


          <h2 className="mb-6 text-xl font-semibold">
            Brand Health Score
          </h2>


          <BrandHealthGauge
            score={analysis.brandHealthScore}
          />


        </div>


      </div>





      {/* AI Summary */}


      <div className="rounded-2xl border app-border app-surface p-6">


        <h2 className="mb-5 text-xl font-semibold">
          AI Summary
        </h2>


        <div className="space-y-3">


          {analysis.summaryPoints
            .slice(0,5)
            .map((point,index)=>(


              <div
                key={index}
                className="flex gap-3"
              >

                <span className="text-green-500">
                  ✓
                </span>


                <p className="app-muted">
                  {point}
                </p>


              </div>


            ))}


        </div>


      </div>





      {/* Complaint Analysis */}


      <div className="rounded-2xl border app-border app-surface p-6">


        <h2 className="mb-6 text-xl font-semibold">
          Complaint Analysis
        </h2>


        <div className="space-y-5">


          {analysis.complaintAnalysis.map(
            (item,index)=>(


              <div key={index}>


                <div className="mb-2 flex justify-between">


                  <span>
                    {item.category}
                  </span>


                  <span>
                    {item.percentage}%
                  </span>


                </div>



                <div className="h-3 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">


                  <div
                    className="h-full rounded-full bg-blue-500 transition-all"
                    style={{
                      width:`${item.percentage}%`
                    }}
                  />


                </div>


              </div>


            )
          )}


        </div>


      </div>





      {/* Suggested Reply */}


      <div className="rounded-2xl border app-border app-surface p-6">


        <h2 className="mb-4 text-xl font-semibold">
          Suggested Reply
        </h2>


        <div className="rounded-xl border app-border bg-(--background) p-5">


          <p className="leading-7 app-muted">

            {analysis.shortSuggestedReply}

          </p>


        </div>


      </div>





      {/* Recommendations */}


      <div className="rounded-2xl border app-border app-surface p-6">


        <h2 className="mb-6 text-xl font-semibold">
          Priority Recommendations
        </h2>



        <div className="grid gap-4 md:grid-cols-3">


          {analysis.priorityRecommendations.map(
            (item,index)=>{


              const badgeColor =
                item.priority.toLowerCase()==="high"
                ? "bg-red-500"
                :
                item.priority.toLowerCase()==="medium"
                ? "bg-yellow-500"
                :
                "bg-green-500";


              return (

                <div
                  key={index}
                  className="rounded-xl border app-border bg-(--background) p-5"
                >


                  <div
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase text-white ${badgeColor}`}
                  >

                    {item.priority}

                  </div>


                  <p className="mt-4 leading-7 app-muted">

                    {item.action}

                  </p>


                </div>

              );


            }

          )}


        </div>


      </div>


    </div>

  );

}