interface FileUploaderProps {

  onFileSelect:(file:File)=>void;

}



export default function FileUploader({

  onFileSelect,

}:FileUploaderProps){



  return (


    <div className="space-y-3">


      <input

        type="file"

        accept=".csv,.txt"

        onChange={(e)=>{


          const file =
            e.target.files?.[0];



          if(file){

            onFileSelect(file);

          }


        }}


        className="hidden"

        id="feedback-file"

      />





      <label


        htmlFor="feedback-file"


        className="
          flex
          cursor-pointer
          items-center
          justify-center
          rounded-xl
          border
          border-dashed
          app-border
          bg-(--surface)
          px-5
          py-8
          text-sm
          app-muted
          transition
          hover:border-primary
          hover:text-(--foreground)
        "


      >

        Click to upload CSV or TXT file


      </label>



    </div>


  );

}