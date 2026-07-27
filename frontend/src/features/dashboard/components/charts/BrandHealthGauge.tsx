import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";


interface Props {
  score: number;
}


export default function BrandHealthGauge({
  score,
}: Props) {


  const value = Math.max(
    0,
    Math.min(100, score)
  );


  const data = [
    {
      value,
    },
  ];



  const getColor = () => {

    if (value >= 80)
      return "#22c55e";

    if (value >= 60)
      return "#3b82f6";

    if (value >= 40)
      return "#eab308";

    return "#ef4444";

  };



  return (

    <div className="h-80 w-full">


      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <RadialBarChart

          innerRadius="70%"

          outerRadius="100%"

          data={data}

          startAngle={180}

          endAngle={0}

          cx="50%"

          cy="60%"

        >


          <PolarAngleAxis

            type="number"

            domain={[0,100]}

            tick={false}

            axisLine={false}

          />



          <RadialBar

            dataKey="value"

            cornerRadius={12}

            background

            fill={getColor()}

          />



          <text

            x="50%"

            y="62%"

            textAnchor="middle"

            dominantBaseline="middle"

            fill="var(--foreground)"

            className="text-4xl font-bold"

          >

            {value}

          </text>




          <text

            x="50%"

            y="74%"

            textAnchor="middle"

            dominantBaseline="middle"

            fill="var(--muted)"

            className="text-sm"

          >

            Brand Health

          </text>



        </RadialBarChart>


      </ResponsiveContainer>


    </div>

  );

}