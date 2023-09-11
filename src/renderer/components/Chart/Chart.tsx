import Chart from 'react-apexcharts';

export const LineChart = ({ data }) => {
  const { dataChart, totalChart, key } = data;
  console.log('chart', dataChart);

  const Template4SkillSChart = () => {
    const options = {
      chart: {
        animations: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          'Mini test 1 \n 5%'?.split('\n')?.map((item) => item),
          'Mini test  2 \n 5%'.split('\n')?.map((item) => item),
          'Midterm test  \n 30%'.split('\n')?.map((item) => item),
          'Mini test  3 \n 5%'.split('\n')?.map((item) => item),
          'Mini test 4 \n 5%'.split('\n')?.map((item) => item),
          'Final test \n 50%'.split('\n')?.map((item) => item),
        ],
        labels: {
          style: {
            fontSize: '8px',
            fontWeight: 'bold',
          },
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 1,
        tickAmount: 5,
        axisBorder: {
          show: true,
          color: '#8e8f9051',
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          formatter: (value) => {
            return value?.toFixed();
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          colors: ['black'],
          zindex: 1,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
          horizontal: false,
          distributed: true,
        },
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      colors: [
        '#ee141448',
        '#ee141448',
        '#fa000090',
        '#ee141448',
        '#ee141448',
        '#cd2027',
      ],
      annotations: {
        yaxis: [
          {
            y: 100,
            strokeDashArray: 0,
            borderColor: '#dc292976',
            borderWidth: 1,
            opacity: 0.2,
          },
        ],
      },
    };
    const series = [
      {
        data: dataChart,
      },
    ];

    return (
      <Chart
        options={options}
        series={series}
        type="bar"
        width={340}
        height={170}
      />
    );
  };
  const TemplateIeltsAEChart = () => {
    console.log('Template Ielts AE');
    const convertNumber = (number) => {
      const newNumber = (number * 11.111).toFixed(1);
      return newNumber;
    };
    console.log('number', convertNumber(4));

    const options = {
      animation: {
        duration: 0, // general animation time
      },
      hover: {
        animationDuration: 0, // duration of animations when hovering an item
      },
      responsiveAnimationDuration: 0,
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top' as const,
        },
        datalabels: {
          display: true,
          color: 'black',
          align: 'end',
          labels: {
            title: {
              font: {
                weight: 'bold',
                size: 9,
              },
            },
          },
        },
      },
      scales: {
        y: {
          max: 100,
          min: 0,
          ticks: {
            font: {
              size: 9,
            },
          },
          offset: true,
        },
        x: {
          ticks: {
            font: {
              size: 6,
            },
          },
        },
      },
      elements: {
        point: {
          radius: 2,
          borderWidth: 4,
          hoverRadius: 4,
          hoverBorderWidth: 2,
        },
      },
    };
    const labels = [
      '',
      'Mini test 1',
      'Mini test 2',
      'Midterm Test',
      'Final Test',
      '',
    ];

    const data = {
      labels,
      datasets: [
        {
          data: [
            null,
            dataChart[0],
            dataChart[1],
            dataChart[2],
            convertNumber(dataChart[3]),
            null,
          ],
          borderColor: ['#57c0e9c6'],
          backgroundColor: ['rgb(90, 123, 232)'],
        },
      ],
    };

    return <Chart type="line" data={data} options={options} />;
  };
  const TemplateIeltsFOChart = () => {
    console.log('Template Ielts FO');
    const options = {
      animation: {
        duration: 0, // general animation time
      },
      hover: {
        animationDuration: 0, // duration of animations when hovering an item
      },
      responsiveAnimationDuration: 0,
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top' as const,
        },
        datalabels: {
          display: true,
          color: 'black',
          align: 'end',
          labels: {
            title: {
              font: {
                weight: 'bold',
                size: 9,
              },
            },
          },
        },
      },
      scales: {
        y: {
          max: 6.0,
          min: 0,
          ticks: {
            font: {
              size: 9,
            },
          },
          offset: true,
        },
        x: {
          ticks: {
            font: {
              size: 5,
            },
          },
        },
      },
      elements: {
        point: {
          radius: 2,
          borderWidth: 4,
          hoverRadius: 4,
          hoverBorderWidth: 2,
        },
      },
    };
    const labels = [
      '',
      'Speaking test 1',
      'Speaking test 2',
      'Midterm Test',
      'Speaking test 3',
      'Speaking test 4',
      'Final Test',
      '',
    ];

    const data = {
      labels,
      datasets: [
        {
          data: [null, ...dataChart, null],
          borderColor: ['#57c0e9c6'],
          backgroundColor: ['rgb(90, 123, 232)'],
        },
      ],
    };
    return <Chart type="line" data={data} options={options} />;
  };
  const TemplateToeicChart = () => {
    console.log('Template Toeic');
    const options = {
      chart: {
        animations: {
          enabled: false,
        },
        toolbar: { show: false },
      },
      legend: {
        show: false,
      },

      xaxis: {
        categories: [
          'Progress test 1 \n '?.split('\n')?.map((item) => item),
          ' Midterm test  \n '.split('\n')?.map((item) => item),
          'Progress test  2 \n '.split('\n')?.map((item) => item),
          'Final test \n '.split('\n')?.map((item) => item),
        ],
        labels: {
          style: {
            fontSize: '8px',
            fontWeight: 'bold',
          },
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        min: 0,
        max: 990,
        tickAmount: 3,
        axisBorder: {
          show: true,
          color: '#8e8f9051',
          offsetX: 0,
          offsetY: 0,
        },
        seriesName: '0',
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          colors: ['black'],
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
          horizontal: false,
          distributed: true,
        },
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      colors: ['#ee141448', '#fa000090', '#ee141448', '#cd2027'],
      annotations: {
        yaxis: [
          {
            y: 990,
            strokeDashArray: 0,
            borderColor: '#dc2929',
            borderWidth: 1,
            opacity: 1,
          },
        ],
      },
    };
    const series = [
      {
        data: dataChart,
      },
    ];

    return (
      <Chart
        options={options}
        series={series}
        type="bar"
        width={340}
        height={200}
      />
    );
  };
  console.log("totalChart",totalChart)
  return (
    <>
      {key === '4skills' ? (
        <div className="chart">
          <div style={{ marginTop: 4 }}>
            <p style={{ fontSize: 10 }}>
              Average score / Điểm trung bình toàn khóa
            </p>
            <p style={{ color: '#ff0606' }}>{Math.round(totalChart?.toFixed(2) * 10) / 10}</p>
          </div>

          <Template4SkillSChart />
        </div>
      ) : key === 'Toeic' ? (
        <div className="chart">
          <TemplateToeicChart />
        </div>
      ) : null}
    </>
  );
};
