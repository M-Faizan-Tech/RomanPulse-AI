import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";


interface SentimentBreakdown {
  positive: number;
  neutral: number;
  negative: number;
}


interface Props {
  sentimentBreakdown: SentimentBreakdown;
}


const COLORS = [
  "#22c55e",
  "#eab308",
  "#ef4444",
];



export default function SentimentPieChart({
  sentimentBreakdown,
}: Props) {


  const data = [
    {
      name: "Positive",
      value: sentimentBreakdown.positive,
    },
    {
      name: "Neutral",
      value: sentimentBreakdown.neutral,
    },
    {
      name: "Negative",
      value: sentimentBreakdown.negative,
    },

  ].filter(
    (item) => item.value > 0
  );



  if (data.length === 0) {

    return (

      <p className="app-muted text-center">
        No sentiment data available.
      </p>

    );

  }



  return (

    <div className="h-80 w-full">


      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <PieChart>


          <Pie

            data={data}

            dataKey="value"

            nameKey="name"

            cx="50%"

            cy="45%"

            outerRadius={95}

            innerRadius={55}

            paddingAngle={3}

            stroke="transparent"


            label={({ name, percent }) =>
              `${name} ${(
                (percent ?? 0) * 100
              ).toFixed(0)}%`
            }


            labelLine={false}

          >


            {
              data.map((_, index)=>(

                <Cell

                  key={`cell-${index}`}

                  fill={COLORS[index]}

                />

              ))
            }


          </Pie>



          <Tooltip

            contentStyle={{
              background:
                "var(--surface)",

              border:
                "1px solid var(--border)",

              borderRadius:
                "12px",

              color:
                "var(--foreground)",
            }}


            formatter={(value)=>[

              `${Number(value)}%`,

              "Percentage",

            ]}

          />



          <Legend

            verticalAlign="bottom"

            height={36}

            wrapperStyle={{
              color:
                "var(--foreground)",
            }}

          />



        </PieChart>


      </ResponsiveContainer>


    </div>

  );

}