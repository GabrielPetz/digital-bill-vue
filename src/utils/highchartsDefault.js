const HighChartsDarkTheme = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
        '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        plotBackgroundColor: "#202428",
        backgroundColor: "#202428",
        fontColor: "white",
        plotBorderWidth: null,
        plotShadow: false,
        style: {
            color: "#fff"
        },
    },
    title: {
        style: {
            color: '#fff',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        gridLineWidth: .2,
        minorTickLength: 0,
        tickLength: 0,
        tickColor: '#fff',
        labels: {
            style: {
                color: '#fff',
                font: '11px Trebuchet MS, Verdana, sans-serif'
            }
        },
        title: {
            style: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '12px',
                fontFamily: 'Trebuchet MS, Verdana, sans-serif'

            }
        }
    },
    yAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        gridLineWidth: .2,
        minorTickLength: 0,
        tickLength: 0,
        minorTickInterval: 'auto',
        tickWidth: 1,
        tickColor: '#fff',
        labels: {
            style: {
                color: '#fff',
                font: '11px Trebuchet MS, Verdana, sans-serif'
            }
        },
        title: {
            style: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '12px',
                fontFamily: 'Trebuchet MS, Verdana, sans-serif'
            }
        }
    },
    legend: {
        itemStyle: {
            color: 'white'
        },
        itemHoverStyle: {
            color: 'gray'
        }
    }
};

const CommonConfig = {
    exporting: {
        enabled: false,
    },
    title: {
        text: null
    },
    credits: {
        enabled: false
    }
}


class HighChartsConfigs {
    static getDarkTheme() {
        return HighChartsDarkTheme;
    }
    static getDefaultCommonConfig() {
        return CommonConfig;
    }
}
export default HighChartsConfigs;