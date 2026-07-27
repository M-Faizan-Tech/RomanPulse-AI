import { useState } from "react";

import { useFeedback } from "../hooks/useFeedback";

import FeedbackTabs from "../components/FeedbackTabs";
import TextInput from "../components/TextInput";
import FileUploader from "../components/FileUploader";
import AnalyzeButton from "../components/AnalyzeButton";

import { demoDatasets } from "../data/datasets";


type FeedbackTab = "text" | "file";


export default function UploadFeedbackPage() {


  const [activeTab, setActiveTab] =
    useState<FeedbackTab>("text");


  const { analyze, loading } =
    useFeedback();


  const [comments, setComments] =
    useState("");


  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);



  const [selectedDataset, setSelectedDataset] =
    useState(
      demoDatasets[0]
    );




  function handleAnalyze() {

    if (!comments.trim()) {
      return;
    }

    analyze(comments);

  }





  function handleLoadDemoDataset() {


    const datasetComments =
      selectedDataset.comments
        .map(
          item => item.comment
        )
        .join("\n");


    setComments(
      datasetComments
    );


    setActiveTab("text");

  }






  return (

    <div className="space-y-8">


      {/* Header */}


      <div>


        <h1 className="text-4xl font-bold">
          Upload Feedback
        </h1>



        <p className="mt-2 app-muted">
          Upload customer comments or use a demo dataset
          to generate AI insights.
        </p>


      </div>






      {/* Main Container */}


      <div
        className="
          rounded-2xl
          border
          app-border
          app-surface
          p-6
          space-y-6
        "
      >




        {/* Tabs */}


        <FeedbackTabs

          activeTab={activeTab}

          setActiveTab={setActiveTab}

        />







        {/* Demo Dataset */}



        <div className="space-y-3">


          <label className="text-sm font-medium">

            Demo Dataset

          </label>




          <select

            value={
              selectedDataset.id
            }


            onChange={(e)=>{


              const dataset =
                demoDatasets.find(
                  item =>
                    item.id === e.target.value
                );



              if(dataset){

                setSelectedDataset(
                  dataset
                );

              }


            }}


            className="
              w-full
              rounded-xl
              border
              app-border
              bg-(--surface)
              px-4
              py-3
              text-sm
              text-(--foreground)
              outline-none
            "

          >



            {
              demoDatasets.map(
                dataset => (

                  <option

                    key={
                      dataset.id
                    }

                    value={
                      dataset.id
                    }

                  >

                    {
                      dataset.name
                    }


                  </option>

                )
              )
            }



          </select>





          <p className="text-sm app-muted">

            {
              selectedDataset.description
            }

          </p>





          <button

            onClick={
              handleLoadDemoDataset
            }


            className="
              rounded-xl
              border
              app-border
              bg-black/5
              px-5
              py-2
              text-sm
              transition
              hover:bg-black/10
              dark:bg-white/10
              dark:hover:bg-white/20
            "

          >

            Load Dataset

          </button>




        </div>








        {/* Input Area */}


        {
          activeTab === "text"

          ?

          <TextInput

            value={
              comments
            }

            onChange={
              setComments
            }

          />

          :

          <FileUploader

            onFileSelect={
              setSelectedFile
            }

          />

        }








        {/* Preview */}



        {
          comments &&
          activeTab === "text" &&

          (

            <div

              className="
                rounded-xl
                border
                app-border
                bg-black/5
                dark:bg-white/5
                p-5
              "

            >


              <h3 className="mb-3 font-semibold">

                Comment Preview

              </h3>





              <p

                className="
                  max-h-64
                  overflow-y-auto
                  whitespace-pre-line
                  text-sm
                  app-muted
                "

              >

                {
                  comments
                }


              </p>



            </div>


          )

        }









        {
          selectedFile &&
          activeTab === "file" &&

          (

            <div

              className="
                rounded-xl
                border
                app-border
                bg-black/5
                dark:bg-white/5
                p-4
                text-sm
              "

            >

              Selected File:

              <span className="ml-2 font-semibold">

                {
                  selectedFile.name
                }

              </span>


            </div>

          )

        }









        {/* Analyze */}


        <AnalyzeButton

          onClick={
            handleAnalyze
          }


          disabled={
            loading ||
            (
              !comments.trim()
              &&
              !selectedFile
            )
          }

        />





      </div>


    </div>

  );

}