import { Utils } from 'renderer/utils/utils';

export const TableSkill = ({ dataTable, excel }) => {
  console.log(dataTable);
  const { tableMidterm, tableFinal, key } = dataTable;
  const convertNumber = (num) => {
    const newNumber = (num * 11.111)?.toFixed(1);
    return newNumber;
  };
  console.log(convertNumber(5.5));

  return (
    <div>
      {key === '4skills' ? (
        <div className="tablegrade" style={{ margin: 10, fontSize: 10 }}>
          <div className="tablemidterm">
            <div
              style={{
                width: 115,
                height: 49,
                backgroundColor: 'rgb(205 32 39 / 42%)',
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 5,
              }}
            >
              <div
                style={{
                  backgroundColor: ' #fa000090',
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 5,
                  width: 110,
                  height: 49,
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: 4,
                  }}
                >
                  <h4
                    style={{
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      color: 'white',
                    }}
                  >
                    Midterm Test{' '}
                  </h4>
                  <div style={{ display: 'flex', marginLeft: 2 }}>
                    <span
                      style={{
                        letterSpacing: 1,
                        color: 'white',
                        fontSize: 7,
                        marginBottom: 5,
                      }}
                    >
                      {Utils.convertDate(excel[9]?.['__EMPTY_6'])}
                    </span>
                  </div>
                  <span style={{ color: 'white', fontSize: 13 }}>
                    {tableMidterm[tableMidterm.length - 1]}
                  </span>
                </div>
              </div>
            </div>

            <table>
              <tr>
                <th>Skill</th>
                <th>Score</th>
              </tr>
              <tr>
                <td>Listening (20)</td>
                <td>{tableMidterm[0]}</td>
              </tr>
              <tr>
                <td>Vocabulary (30)</td>
                <td>{tableMidterm[1]}</td>
              </tr>
              <tr>
                <td>Grammar (25)</td>
                <td>{tableMidterm[2]}</td>
              </tr>
              <tr>
                <td>Reading (10)</td>
                <td>{tableMidterm[3]}</td>
              </tr>
              <tr>
                <td>Writing (15)</td>
                <td>{tableMidterm[4]}</td>
              </tr>
            </table>
          </div>
          <div className="tablefinal">
            <div
              style={{
                width: 115,
                height: 49,
                backgroundColor: 'rgb(205 32 39 / 42%)',
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 5,
              }}
            >
              <div
                style={{
                  backgroundColor: '#cd2027',
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 5,
                  width: 110,
                  height: 49,
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: 4,
                  }}
                >
                  <h4
                    style={{
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      color: 'white',
                    }}
                  >
                    Final Test{' '}
                  </h4>
                  <div style={{ display: 'flex', marginLeft: 2 }}>
                    <span
                      style={{
                        letterSpacing: 1,
                        color: 'white',
                        fontSize: 7,
                        marginBottom: 5,
                      }}
                    >
                      {Utils.convertDate(excel[9]?.['__EMPTY_13'])}
                    </span>
                  </div>
                  <span style={{ color: 'white', fontSize: 13 }}>
                    {tableFinal[tableFinal.length - 1]}
                  </span>
                </div>
              </div>
            </div>
            <table>
              <tr>
                <th>Skill</th>
                <th>Score</th>
              </tr>

              <tr>
                <td>Listening (20)</td>
                <td>{tableFinal[0]}</td>
              </tr>
              <tr>
                <td>Vocabulary (20)</td>
                <td>{tableFinal[1]}</td>
              </tr>
              <tr>
                <td>Grammar (10)</td>
                <td>{tableFinal[2]}</td>
              </tr>
              <tr>
                <td>Reading (10)</td>
                <td>{tableFinal[3]}</td>
              </tr>
              <tr>
                <td>Writing (15)</td>
                <td>{tableFinal[4]}</td>
              </tr>
              <tr>
                <td>Speaking (25)</td>
                <td>{tableFinal[5]}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : key === 'Toeic' ? (
        <div style={{ fontSize: 11, marginTop: 10 }}>
          <div
            style={{
              border: ' 1px solid rgba(206, 205, 205, 0.941)',
              borderRadius: 10,
            }}
          >
            <div
              style={{
                width: 215,
                height: 42,
                backgroundColor: 'rgb(205 32 39 / 42%)',
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 5,
              }}
            >
              <div
                style={{
                  backgroundColor: '#cd2027',
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 5,
                  width: 206,
                  height: 42,
                  zIndex: 1,
                }}
              >
                <div>
                  <h4
                    style={{
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      color: 'white',
                      paddingTop: 15,
                      paddingLeft: 27,
                      fontSize: 12,
                    }}
                  >
                    DIAGNOSTIC TEST
                  </h4>
                </div>
              </div>
            </div>

            <table style={{ marginTop: 15 }}>
              <tr>
                <th>Test</th>
                <th>Reading (495)</th>
                <th>Listening (495)</th>
                <th>Total (990)</th>
              </tr>
              <tr>
                <td>
                  Progress test 1 <br />
                  <p style={{ fontSize: 7, marginTop: 2 }}>
                    {Utils.convertDate(excel[8]?.['__EMPTY_1'])}
                  </p>
                </td>
                <td>{tableMidterm[0]}</td>
                <td>{tableMidterm[1]}</td>
                <td>{tableMidterm[2]}</td>
              </tr>
              <tr>
                <td>
                  Midterm test <br />
                  <p style={{ fontSize: 7, marginTop: 2 }}>
                    {' '}
                    {Utils.convertDate(excel[8]?.['__EMPTY_7'])}
                  </p>
                </td>
                <td>{tableMidterm[6]}</td>
                <td>{tableMidterm[7]}</td>
                <td>{tableMidterm[8]}</td>
              </tr>
              <tr>
                <td>
                  Progress test 2<br />
                  <p style={{ fontSize: 7, marginTop: 2 }}>
                    {Utils.convertDate(excel[8]?.['__EMPTY_4'])}
                  </p>
                </td>
                <td>{tableMidterm[3]}</td>
                <td>{tableMidterm[4]}</td>
                <td>{tableMidterm[5]}</td>
              </tr>
              <tr>
                <td>
                  Final Test <br />
                  <p style={{ fontSize: 7, marginTop: 2 }}>
                    {Utils.convertDate(excel[8]?.['__EMPTY_10'])}
                  </p>
                </td>
                <td>{tableMidterm[9]}</td>
                <td>{tableMidterm[10]}</td>
                <td>{tableMidterm[11]}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : key === 'Ielts-fo-in' ? (
        <div className="tablegrade" style={{ margin: 10, fontSize: 10 }}>
          {' '}
          <div className="tablemidterm">
            <div
              style={{
                width: 115,
                height: 49,
                backgroundColor: 'rgb(205 32 39 / 42%)',
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 5,
              }}
            >
              <div
                style={{
                  backgroundColor: '#cd2027',
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 5,
                  width: 110,
                  height: 49,
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: 4,
                  }}
                >
                  <h4
                    style={{
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      color: 'white',
                    }}
                  >
                    Midterm Test{' '}
                  </h4>
                  <div style={{ display: 'flex', marginLeft: 2 }}>
                    <span
                      style={{
                        letterSpacing: 1,
                        color: 'white',
                        fontSize: 7,
                        marginBottom: 5,
                      }}
                    >
                      {' '}
                      {Utils.getDate(excel[9]?.['__EMPTY_5'])}
                    </span>
                  </div>
                  <span style={{ color: 'white', fontSize: 13 }}>
                    {tableMidterm[tableMidterm.length - 1]}
                  </span>
                </div>
              </div>
            </div>

            <table>
              <tr>
                <th>Skill</th>
                <th>Grade</th>
              </tr>
              <tr>
                <td>Listening (20)</td>
                <td>{tableMidterm[0]}</td>
              </tr>
              <tr>
                <td>Reading (25)</td>
                <td>{tableMidterm[1]}</td>
              </tr>
              <tr>
                <td>Writing (25)</td>
                <td>{tableMidterm[2]}</td>
              </tr>
            </table>
          </div>
          <div className="tablefinal">
            <div
              style={{
                width: 115,
                height: 49,
                backgroundColor: 'rgb(205 32 39 / 42%)',
                borderBottomRightRadius: 40,
                borderTopLeftRadius: 5,
              }}
            >
              <div
                style={{
                  backgroundColor: '#cd2027',
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 5,
                  width: 110,
                  height: 49,
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingTop: 4,
                  }}
                >
                  <h4
                    style={{
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                      color: 'white',
                    }}
                  >
                    Final Test{' '}
                  </h4>
                  <div style={{ display: 'flex', marginLeft: 2 }}>
                    <span
                      style={{
                        letterSpacing: 1,
                        color: 'white',
                        fontSize: 7,
                        marginBottom: 5,
                      }}
                    >
                      {' '}
                      {Utils.getDate(excel[9]?.['__EMPTY_9'])}
                    </span>
                  </div>
                  <span style={{ color: 'white', fontSize: 13 }}>
                    {tableFinal[tableFinal.length - 1]}
                  </span>
                </div>
              </div>
            </div>
            <table>
              <tr>
                <th>Skill</th>
                <th>Grade</th>
              </tr>

              <tr>
                <td>Listening (20)</td>
                <td>{tableFinal[0]}</td>
              </tr>
              <tr>
                <td>Reading (25)</td>
                <td>{tableFinal[1]}</td>
              </tr>
              <tr>
                <td>Writing (25)</td>
                <td>{tableFinal[2]}</td>
              </tr>
              <tr>
                <td>Speaking (25)</td>
                <td>{tableFinal[3]}</td>
              </tr>
            </table>
          </div>
        </div>
      ) : key === 'Ielts-ae' ? (
        <div>
          <div className="tablegrade" style={{ margin: 10, fontSize: 10 }}>
            <div
              style={{
                width: '45%',
                border: '1px solid rgba(206, 205, 205, 0.941)',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 115,
                  height: 49,
                  backgroundColor: 'rgb(205 32 39 / 42%)',
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 5,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#cd2027',
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 5,
                    width: 110,
                    height: 49,
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      flexDirection: 'column',
                      paddingTop: 4,
                    }}
                  >
                    <h4
                      style={{
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        color: 'white',
                      }}
                    >
                      Midterm Test{' '}
                    </h4>
                    <div style={{ display: 'flex', marginLeft: 2 }}>
                      <span
                        style={{
                          letterSpacing: 1,
                          color: 'white',
                          fontSize: 7,
                          marginBottom: 5,
                        }}
                      >
                        {' '}
                        {Utils.getDate(excel[9]?.['__EMPTY_3'])}
                      </span>
                    </div>
                    <span style={{ color: 'white', fontSize: 13 }}>
                      {tableMidterm[tableMidterm.length - 1]}
                    </span>
                  </div>
                </div>
              </div>

              <table>
                <tr>
                  <th>Skill</th>
                  <th>Score</th>
                </tr>
                <tr>
                  <td>Listening (30)</td>
                  <td>{tableMidterm[0]}</td>
                </tr>
                <tr>
                  <td>Reading (40.5)</td>
                  <td>{tableMidterm[1]}</td>
                </tr>
                <tr>
                  <td>Writing (14.5)</td>
                  <td>{tableMidterm[2]}</td>
                </tr>
                <tr>
                  <td>Vocabulary (15)</td>
                  <td>{tableMidterm[3]}</td>
                </tr>
              </table>
            </div>
            <div
              style={{
                width: '45%',
                border: '1px solid rgba(206, 205, 205, 0.941)',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  width: 115,
                  height: 49,
                  backgroundColor: 'rgb(205 32 39 / 42%)',
                  borderBottomRightRadius: 40,
                  borderTopLeftRadius: 5,
                }}
              >
                <div
                  style={{
                    backgroundColor: '#cd2027',
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 5,
                    width: 110,
                    height: 49,
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      flexDirection: 'column',
                      paddingTop: 4,
                    }}
                  >
                    <h4
                      style={{
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        color: 'white',
                      }}
                    >
                      Final Test{' '}
                    </h4>
                    <div style={{ display: 'flex', marginLeft: 2 }}>
                      <span
                        style={{
                          letterSpacing: 1,
                          color: 'white',
                          fontSize: 7,
                          marginBottom: 5,
                        }}
                      >
                        {' '}
                        {Utils.getDate(excel[9]?.['__EMPTY_8'])}
                      </span>
                    </div>
                    <span style={{ color: 'white', fontSize: 13 }}>
                      {convertNumber(tableFinal[tableFinal.length - 1])}
                    </span>
                  </div>
                </div>
              </div>
              <table>
                <tr>
                  <th>Skill</th>
                  <th>Score</th>
                </tr>

                <tr>
                  <td>Listening (9.0)</td>
                  <td>{tableFinal[0]}</td>
                </tr>
                <tr>
                  <td>Reading (9.0)</td>
                  <td>{tableFinal[1]}</td>
                </tr>
                <tr>
                  <td>Writing (9.0)</td>
                  <td>{tableFinal[2]}</td>
                </tr>
                <tr>
                  <td>Speaking (9.0)</td>
                  <td>{tableFinal[3]}</td>
                </tr>
                <tr>
                  <td>Total (9.0)</td>
                  <td>{tableFinal[tableFinal.length - 1]}</td>
                </tr>
                <tr>
                  <td>Total (100) </td>
                  <td>{convertNumber(tableFinal[tableFinal.length - 1])}</td>
                </tr>
              </table>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              style={{ width: 10, height: 10 }}
              src={require('../../assets/imgae/star1.jpg')}
            />
            <p style={{ fontSize: 8, marginLeft: 1 }}>
              Quy đổi điểm từ thang điểm 9.0 sang thang điểm 100 chỉ mang tính
              chất tương đối
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
