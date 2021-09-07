import styled from 'styled-components';
import { Breakpoints } from '../../src/utils';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Pie, PieChart, Cell, Label } from 'recharts';
import Button from '../../src/components/atoms/Button/index';
import Image from 'next/image';
import { IMG_Ava } from '../../src/assets';

const Dashboard = () => {

    const data = [
        {
            name: "Jan",
            income: 4850000,
            outcome: -2250000,
        },
        {
            name: "Feb",
            income: 4000000,
            outcome: -2109000,
        },
        {
            name: "Mar",
            income: 4750000,
            outcome: -1708000,
        },
        {
            name: "Apr",
            income: 3980000,
            outcome: -2050000,
        },
        {
            name: "May",
            income: 2400000,
            outcome: -1675000,
        },
        {
            name: "Jun",
            income: 4703000,
            outcome: -1200000,
        },
    ];

    const staffData = [
        { name: 'christine', achieved: 80, fill: 'green' },
        { name: 'other', achieved: 20, fill: 'gray' }
    ];

    const goals = [
        { name: 'goals', achieved: 76, fill: '#FFBA33' },
        { name: 'other goals', achieved: 24, fill: '#6A4029' }
    ];

    return (
        <StyledDashboard>
            <Container>
                <BodyWrapper>
                    <div className="top-title">
                        <h1>See how your store progress so far</h1>
                        <div className="radio-time">
                            <div className="daily">
                                <input type="radio" value="daily" name="time" /> <span>Daily</span>
                            </div>
                            <hr />
                            <div className="weekly">
                                <input type="radio" value="weekly" name="time" />  <span>Weekly</span>
                            </div>
                            <hr />
                            <div className="monthly">
                                <input type="radio" value="monthly" name="time" /> <span>Monthly</span>
                            </div>
                        </div>
                    </div>
                    <div className="body-content">
                        <div className="left">
                            <div className="chart">
                                <div className="report-title">
                                    <h2 className="title">Monthly Report</h2>
                                    <div className="more">
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                        <div className="dot"></div>
                                    </div>
                                </div>
                                
                                <h3 className="date">Last 6 months</h3>


                                <div className="chart-container">
                                    <BarChart
                                        width={750}
                                        height={600}
                                        data={data}
                                        stackOffset="sign"
                                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                                    >
                                        <CartesianGrid stroke="#FFFFFF" strokeDasharray="3 3" />
                                        <XAxis dataKey="name" axisLine={{ stroke: '#EAF0F4' }} />
                                        <YAxis axisLine={{ stroke: '#EAF0F4' }} />
                                        <Tooltip />
                                        <ReferenceLine y={0} stroke="lightgray" />
                                        <Bar dataKey="income" barSize={20} fill="#FFBA33" stackId="stack" />
                                        <Bar dataKey="outcome" barSize={20} fill="#6A4029" stackId="stack" />
                                    </BarChart>
                                </div>

                                <hr />
                                <div className="income-outcome">
                                    <div className="income"></div>
                                    <h4>Income</h4>
                                    <div className="outcome"></div>
                                    <h4>Outcome</h4>
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <div className="top-right">
                                <div className="staff">
                                    <div className="ava"><Image className="imgava" src={IMG_Ava} alt="image"/></div>
                                    <div className="name">
                                        <h1>Christine Lauren</h1>
                                        <h2>Keep up the good work <br /> and spread love</h2>
                                    </div>
                                </div>
                                <hr />
                                <div className="staff-chart">
                                    <h1>Best staff of the month</h1>
                                    <PieChart width={180} height={180}>
                                        <Tooltip />
                                        <Pie
                                            data={staffData}
                                            nameKey="name"
                                            dataKey="achieved"
                                            innerRadius="60%"
                                            outerRadius="80%"
                                            startAngle={90}
                                            endAngle={-270}
                                            fill="#8884d8">
                                            {
                                                staffData.map((entry, index) => <Cell fill={entry.fill} />)
                                            }
                                            <Label fontSize='30px' width={100} position="center">
                                                {`${staffData[0].achieved}%`}
                                            </Label>
                                        </Pie>
                                    </PieChart>
                                    <h2>Achieved 3.5M of a total 5M</h2>
                                    <h2>478 customers</h2>
                                </div>
                            </div>
                            <div className="bottom-right">
                                <div className="goals-chart">
                                    <h1>Goals</h1>
                                    <h2>Your goals is still on 76%. Keep up</h2>
                                    <h2> the good work!</h2>
                                    <PieChart width={250} height={250}>
                                        <Tooltip />
                                        <Pie
                                            data={goals}
                                            nameKey="name"
                                            dataKey="achieved"
                                            innerRadius="50%"
                                            outerRadius="80%"
                                            startAngle={90}
                                            endAngle={-270}
                                            fill="#8884d8">
                                            {
                                                goals.map((entry, index) => <Cell fill={entry.fill} />)
                                            }
                                            <Label fontSize='30px' width={100} position="center">
                                                {`${goals[0].achieved}%`}
                                            </Label>
                                        </Pie>
                                    </PieChart>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-dashboard">
                        <Button className="download">Download report</Button>
                        <Button className="share">Share report</Button>
                    </div>
                </BodyWrapper>
            </Container>
        </StyledDashboard >
    );
};

// export default PrivateRoute(Dashboard);
export default Dashboard;

// START === STYLING CURRENT PAGE

const StyledDashboard = styled.div`
  /* START == BREAKPOINT */
  /* ${Breakpoints.lessThan('2xl')`
      background-color: yellow;
    `}
  ${Breakpoints.lessThan('xl')`
      background-color: blue;
    `}
    ${Breakpoints.lessThan('lg')`
      background-color: cyan;
    `}
    ${Breakpoints.lessThan('md')`
      background-color: pink;
    `}
    ${Breakpoints.lessThan('sm')`
      background-color: green;
    `}
    ${Breakpoints.lessThan('xsm')`
      background-color: pink;
    `} */
`;

const Container = styled.div`
    width: 100%;
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    background-color: #F8F8F8;
`
const BodyWrapper = styled.div`
    width: 90%;
    height: 100%;
    padding: 0 5%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    
    .top-title {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1  {
            color: #6A4029;
            font-size: 40px;
            font-weight: bolder;
            margin-bottom: 30px;
        }

        .radio-time {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 50px;

            .daily {
                margin-right: 100px;
                
                span {
                    font-size: 20px;
                }
            }

            .weekly {
                margin-right: 100px;

                span {
                    font-size: 20px;
                }
            }

            .monthly {
                span {
                    font-size: 20px;
                }
            }
        }
    }

    .body-content {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: row;
        margin-bottom: 50px;

        .left {
            width: 65%;
            height: 100%;
            border: none;
            border-radius: 15px;
            background-color: white;
            margin-right: 5%;

            .chart {
                display: flex;
                flex-direction: column;
                padding: 20px;

                .report-title {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    .more {
                        display: flex;
                        flex-direction: row; 
                    }

                    .dot {
                        display: flex;
                        flex-direction: row;
                        width: 15px;
                        height: 15px;
                        background-color: #6A4029;
                        border-radius: 100%;
                        margin-right: 5px;
                        cursor: pointer;
                    }

                }

                h2 {
                    font-size: 40px;
                    font-weight: bolder;

                }

                h3 {
                    font-size: 25px;
                    margin-bottom: 50px;
                }

                .chart-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    margin-bottom: 50px;
                }

                hr {
                    margin-bottom: 50px;
                    width: 80%;
                    align-self: center;
                }

                .income-outcome {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: 100%;

                    .income {
                        width: 20px;
                        height: 20px;
                        border: none;
                        border-radius: 100%;
                        background-color: #FFBA33;
                        position: relative;
                        top: -5%;
                        margin-right: 20px;

                    }

                    h4 {
                        font-size: 25px;
                        margin-right: 50px;
                    }

                    .outcome {
                        width: 20px;
                        height: 20px;
                        border: none;
                        border-radius: 100%;
                        background-color: #6A4029;
                        margin-right: 20px;

                    }
                }

            }
        }

        .right {
            width: 30%;
            height: 100%;
            display: flex;
            flex-direction: column;

            .top-right {
                width: 100%;
                height: 48%;
                border: none;
                border-radius: 15px;
                background-color: white;
                margin-bottom: 15%;

                .staff {
                    width: 100%;
                    height: 30%;
                    display: flex;
                    flex-diection: row;
                    justify-content: center;
                    align-items: center;

                    .ava {
                        width: 100px;
                        height: 100px;
                        margin-right: 30px;

                        .imgava {
                            border-radius: 100%;
                        }
                    }

                    .name {
                        display: flex;
                        flex-direction: column;

                        h1  {
                            font-size: 30px;
                            font-weight: bolder;
                        }

                        h2  {
                            font-size: 20px;
                            font-weight: normal;
                        }
                    }

                }

                hr {
                    width: 90%;
                    margin: 2% 0;
                    align-self: center;
                }

                .staff-chart {
                    width: 100%;
                    height: 65%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    h1 {
                        font-size: 25px;
                        font-weight: bolder;
                    }

                    h2 {
                        font-size: 20px;
                        font-weight: normal;
                        color: gray;
                    }
                }
            }

            .bottom-right {
                width: 100%;
                height: 48%;
                border: none;
                border-radius: 15px;
                background-color: white;

                .goals-chart {
                    width: 100%;
                    height: 65%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 25px;

                    h1 {
                        font-size: 35px;
                        font-weight: bolder;
                    }

                    h2 {
                        font-size: 20px;
                        font-weight: normal;
                        color: gray;
                    }
                }
            }
        }

    
    }

    .btn-dashboard {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .download {
            width: 65%;
            height: 75px;
            color: white;
            font-weight: bolder;
            background-color: #6A4029;
            margin-right: 5%;
        }

        .share {
            width: 30%;
            height: 75px;
            color: white;
            font-weight: bolder;
            background-color: #6A4029;
        }
    }

`
