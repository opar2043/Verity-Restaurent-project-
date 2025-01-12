import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Root/Hook/useAxios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
  const axiosSecure = useAxios();
  const { data: state = {} } = useQuery({
    queryKey: ["paymentMy"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { users, foodItem, reviews, order, revinew} = state || {};
  const {data : chartData = []} = useQuery({
    queryKey: ['order-stats'],
    queryFn: async ()=> {
      const res = await axiosSecure.get('/order');
      return res.data;
    }
  })


  // custom shape for the bar chart 
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // for pie chart 
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  const pieChartData = chartData.map(data => {
    return {name : data.category , value: data.revinew}
  })

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Revenue */}
        <div className="stat bg-white shadow-md rounded-lg p-4">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value text-primary">
            ${revinew?.toFixed(2) || 0}
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        {/* Food Items */}
        <div className="stat bg-white shadow-md rounded-lg p-4">
          <div className="stat-figure text-secondary">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg> 

          </div>
          <div className="stat-title">Total Items</div>
          <div className="stat-value text-secondary">{foodItem || 0}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        {/* Users */}
        <div className="stat bg-white shadow-md rounded-lg p-4">
          <div className="stat-figure text-accent">
            <div className="avatar online">
              <div className="w-16 rounded-full">
               <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Users"
                /> 

              </div>

            </div>
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-accent">{users || 0}</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>

        {/* Reviews */}
        <div className="stat bg-white shadow-md rounded-lg p-4">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">User Reviews</div>
          <div className="stat-value">{reviews || 0}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        {/* Orders */}
        <div className="stat bg-white shadow-md rounded-lg p-4">
          <div className="stat-title">Orders Completed</div>
          <div className="stat-value">{order || 0}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
        <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
        </div>

        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
