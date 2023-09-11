import React from 'react';

const ReplaceChart = (props: any) => {
  const data = [
    { name: 'Listening' },
    { name: 'Reading' },
    { name: 'Writing' },
    { name: 'Speaking' },
    { name: 'Overall Band Score' },
  ];
  const dataBand = [
    {
      name: 'BAND 9',
      title: 'EXPERT USER',
      desc: 'Has fully operational command of the language: appropriate, accurate and fluent with complete understanding.',
    },
    {
      name: 'BAND 8',
      title: 'VERY GOOD USER',
      desc: 'Has fully operational command of the language with only occasional unsystematic inaccuracies and inappropriacies. Misunderstandings may occur in unfamiliar situations. Handles complex detailed argumentation well.',
    },
    {
      name: 'BAND 7',
      title: 'GOOD USER',
      desc: 'Has operational command of the language, though with occasional inaccuracies, inappropriacies and misunderstandings in some situations. Generally handles complex language well and understands detailed reasoning.',
    },
    {
      name: 'BAND 6',
      title: 'COMPETENT USER',
      desc: 'Has generally effective command of the language despite some inaccuracies, inappropriacies and misunderstandings. Can use and understand fairly complex language, particularly in familiar situations.',
    },
    {
      name: 'BAND 5',
      title: 'MODEST USER',
      desc: 'Has partial command of the language, coping with overall meaning in most situations, though is likely to make many mistakes. Should be able to handle basic communication in own field.',
    },
    {
      name: 'BAND 4',
      title: 'LIMITED USER ',
      desc: 'Basic competence is limited to familiar situations. Has frequent problems in understanding and expression. Is not able to use complex language.',
    },
    {
      name: 'BAND 3',
      title: 'EXTREMELY LIMITED USER',
      desc: 'Conveys and understands only general meaning in very familiar situations. Frequent breakdowns in communication occur.',
    },
    {
      name: 'BAND 2',
      title: 'INTERMITTENT USER',
      desc: 'No real communication is possible except for the most basic information using isolated words or short formulae in familiar situations and to meet immediate needs. Has great difficulty understanding spoken and written English.',
    },
    {
      name: 'BAND 1',
      title: 'NON USER',
      desc: 'Essentially has no ability to use the language beyond possibly a few isolated words',
    },
    {
      name: 'BAND 0',
      title: 'DID NOT ATTEMPT THE TEST',
      desc: 'No assessable information provided',
    },
  ];
  // console.log('dataChart', props?.dataChart);
  // console.log('dataexcel={excel}', props?.tableFinal);
  return (
    <div style={{}}>
      {props.dataChart ? (
        <div
          style={{
            marginTop: 15,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                alignContent: 'end',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between  ',
              }}
            >
              <div>
                <span style={{ fontSize: '8px', fontWeight: '600' }}>
                  {item.name?.split(' ')?.map((item: any) => {
                    return <div style={{ lineHeight: '9px' }}>{item}</div>;
                  })}
                </span>
              </div>
              <div
                style={{
                  background: '#CD2027',
                  width: 26,
                  height: 26,
                  textAlign: 'center',
                  marginLeft: 5,
                  color: 'white',
                  fontWeight: '600',
                }}
              >
                <span style={{ fontSize: '10px' }}>
                  {Number(props.dataChart[index])?.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {props.tableFinal ? (
        <div>
          {dataBand.map((item2, index) => (
            <div key={index} style={{ marginTop: 7, display: 'flex', gap: 5 }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <div
                  style={{
                    backgroundColor:
                      9 - index - Math.floor(props.tableFinal[4]) == 0
                        ? '#CD2027'
                        : '#fa000090',
                    fontSize: '8px',
                    padding: 3,
                    fontWeight: '600',
                    color: 'white',
                  }}
                >
                  {item2.name}
                </div>
              </div>

              <div style={{ marginRight: 10, flex: 8 }}>
                <div
                  style={{
                    fontSize: '8px',
                    fontWeight: '600',
                    color:
                      9 - index - Math.floor(props.tableFinal[4]) == 0
                        ? '#CD2027'
                        : '',
                  }}
                >
                  {item2.title}
                </div>
                <div
                  style={{
                    fontSize: '7px',
                    color:
                      9 - index - Math.floor(props.tableFinal[4]) == 0
                        ? '#CD2027'
                        : '',
                  }}
                >
                  {item2.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ReplaceChart;
