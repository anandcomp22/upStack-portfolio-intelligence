import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";


export default function DashboardPage() {
  return (
    <div className="p-8 space-y-6">

      <h1 className="text-3xl font-bold">
        Portfolio Dashboard
      </h1>


      <div className="grid grid-cols-4 gap-5">

        <Card>
          <CardHeader>
            <CardTitle>
              Portfolio Value
            </CardTitle>
          </CardHeader>

          <CardContent>
            ₹12,50,000
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle>
              Today's Return
            </CardTitle>
          </CardHeader>

          <CardContent>
            +2.4%
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle>
              Risk Score
            </CardTitle>
          </CardHeader>

          <CardContent>
            Low
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle>
              AI Insights
            </CardTitle>
          </CardHeader>

          <CardContent>
            5 Suggestions
          </CardContent>
        </Card>

      </div>

    </div>
  );
}