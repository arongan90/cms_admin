import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

const ChartBox = styled.div`
  width: 120px;
  height: 46px;
  margin: 0 auto;
  
  & > div {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    text-align: left;
    line-height: normal;
    z-index: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  & > div > div {
    margin: 0 auto;
  }
`;

const HighChart = ({ data }) => {
    const options = {
        chart: {
            type: 'spline',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            margin: [0, 0, 0, 0]
        },
        stockTools: {
            gui: {
                enabled: false // disable the built-in toolbar
            }
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: '',
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                enabled: false,
            },
            gridLineWidth:0
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            area: {
                lineColor: '#F75467',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgba(247,84,103,.18)', Highcharts.getOptions().colors[0]],
                        [1, 'rgba(255,255,255,0)', Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        series: [{
            type: 'area',
            name: 'USD to EUR',
            data: data,
            marker: {
                enabled: false
            },
        }],
        credits: {
            enabled: false
        }
    }

    return (
        <ChartBox>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </ChartBox>
    )
}

export default HighChart;