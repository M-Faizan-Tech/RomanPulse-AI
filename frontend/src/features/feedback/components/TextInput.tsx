interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}


export default function TextInput({
  value,
  onChange,
}: TextInputProps) {


  return (

    <div className="space-y-3">


      <label className="text-sm app-muted">

        Paste Roman Urdu Customer Comments

      </label>




      <textarea


        value={value}


        onChange={(e)=>
          onChange(e.target.value)
        }


        placeholder={`Example:

delivery bohat late thi

quality achi hai

customer service weak hai`}


        className="
          min-h-55
          w-full
          rounded-xl
          border
          app-border
          bg-(--surface)
          p-4
          text-sm
          text-(--foreground)
          outline-none
          backdrop-blur
          placeholder:text-(--muted)
          focus:border-primary/50
        "


      />



    </div>


  );

}