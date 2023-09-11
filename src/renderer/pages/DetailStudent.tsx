import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { LineChart } from 'renderer/components/Chart/Chart';
import Footer from 'renderer/components/Footer/Footer';
import Header from 'renderer/components/Header/Header';
import ReplaceChart from 'renderer/components/ReplaceChart';
import { Result } from 'renderer/components/Result/Result';
import Sidebar from 'renderer/components/Sidebar/Sidebar';
import { TableSkill } from 'renderer/components/Table/Table';
import { TitleCustom } from 'renderer/components/Title/Title';
import { Utils } from 'renderer/utils/utils';
// import faker from 'faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

type Props = {
  info: any;
  classInfo: any;
  classKey: any;
};

export function DetailStudent(props: Props) {
  // console.log('param', JSON.stringify(props));

  const { info, classKey, excel } = props;
  console.log(classKey, 'detail classKey');
  // console.log('info', JSON.stringify(info));
  console.log('info', info['Đạt đầu ra: \nPRES, S: >= 70\nTC, MTC: >=60']);
  console.log('info', info['Tăng cường hỗ trợ học thuật']);

  const { classInfo } = props;
  const imageTitle = [
    require('../assets/imgae/star.jpg'),
    require('../assets/imgae/time.jpg'),
    require('../assets/imgae/sach.jpg'),
    require('../assets/imgae/diem.jpg'),
  ];
  function renderLineChart() {
    const key = classKey;
    let dataChart = [
      info['__EMPTY_1'],
      info['Đạt đầu ra: \nPRES, S: >= 70\nTC, MTC: >=60'],
      info['__EMPTY_3'],
      info['__EMPTY_2'],
      info['Tăng cường hỗ trợ học thuật'],
      info['__EMPTY_17'],
    ];
    let totalChart = info['__EMPTY_18'];
    if (classKey === '4skills') {
      const value = [
        info['__EMPTY_1'],
        info['__EMPTY_2'],
        info['__EMPTY_11'],
        info['__EMPTY_3'],
        info['__EMPTY_4'],
        info['__EMPTY_19'],
      ];
      dataChart = Utils?.checkData(value);
      totalChart =
        typeof info['__EMPTY_20'] === 'number' ? info['__EMPTY_20'] : 0;
    } else if (classKey === 'Toeic') {
      const value = [
        info['__EMPTY_3'],
        info['__EMPTY_9'],
        info['__EMPTY_6'],
        info['__EMPTY_12'],
      ];
      dataChart = Utils?.checkData(value);
    } else if (classKey === 'Ielts-fo-in') {
      const valueDataChart = [
        info['__EMPTY_9'],
        info['__EMPTY_10'],
        info['__EMPTY_11'],
        info['__EMPTY_12'],
        info['__EMPTY_13'],
      ];
      dataChart = Utils?.checkData(valueDataChart);
    } else {
      const valueDataChart = [
        info['__EMPTY_8'],
        info['__EMPTY_9'],
        info['__EMPTY_10'],
        info['__EMPTY_11'],
        info['__EMPTY_12'],
      ];
      dataChart = Utils?.checkData(valueDataChart);
    }
    return key == '4skills' ? (
      <LineChart data={{ dataChart, totalChart, key }} />
    ) : key == 'Toeic' ? (
      <LineChart data={{ dataChart, totalChart, key }} />
    ) : (
      <ReplaceChart dataChart={dataChart} key={key} />
    );
  }

  function renderTable() {
    const key = classKey;
    let tableMidterm = [
      info['__EMPTY_4'],
      info['__EMPTY_5'],
      info['__EMPTY_6'],
      info['__EMPTY_7'],
      info['__EMPTY_8'],
      info['__EMPTY_9'],
    ];
    let tableFinal = [
      info['__EMPTY_11'],
      info['__EMPTY_12'],
      info['__EMPTY_13'],
      info['__EMPTY_14'],
      info['__EMPTY_15'],
      info['__EMPTY_16'],
      info['__EMPTY_17'],
    ];
    if (classKey === '4skills') {
      const valueTableMidterm = [
        info['__EMPTY_6'],
        info['__EMPTY_7'],
        info['__EMPTY_8'],
        info['__EMPTY_9'],
        info['__EMPTY_10'],
        info['__EMPTY_11'],
      ];
      const valueTableFinal = [
        info['__EMPTY_13'],
        info['__EMPTY_14'],
        info['__EMPTY_15'],
        info['__EMPTY_16'],
        info['__EMPTY_17'],
        info['__EMPTY_18'],
        info['__EMPTY_19'],
      ];
      tableMidterm = Utils?.checkData(valueTableMidterm);
      tableFinal = Utils?.checkData(valueTableFinal);
    } else if (classKey === 'Toeic') {
      const valueTableMidterm = [
        info['__EMPTY_1'],
        info['__EMPTY_2'],
        info['__EMPTY_3'],
        info['__EMPTY_4'],
        info['__EMPTY_5'],
        info['__EMPTY_6'],
        info['__EMPTY_7'],
        info['__EMPTY_8'],
        info['__EMPTY_9'],
        info['__EMPTY_10'],
        info['__EMPTY_11'],
        info['__EMPTY_12'],
      ];
      const valueTableFinal = [
        info['__EMPTY_10'],
        info['__EMPTY_11'],
        info['__EMPTY_12'],
      ];
      tableMidterm = Utils?.checkData(valueTableMidterm);
      tableFinal = Utils?.checkData(valueTableFinal);
    } else if (classKey === 'Ielts-fo-in') {
      tableMidterm = [
        info['__EMPTY_5'],
        info['__EMPTY_6'],
        info['__EMPTY_7'],
        Math.round(info['__EMPTY_8']),
      ];
      const valueTableFinal = [
        info['__EMPTY_9'],
        info['__EMPTY_10'],
        info['__EMPTY_11'],
        info['__EMPTY_12'],
        info['__EMPTY_13'],
      ];
      tableFinal = Utils.checkData(valueTableFinal);
    } else {
      tableMidterm = [
        info['__EMPTY_3'],
        info['__EMPTY_4'],
        info['__EMPTY_5'],
        info['__EMPTY_6'],
        info['__EMPTY_7'],
      ];
      const valueTableFinal = [
        info['__EMPTY_8'],
        info['__EMPTY_9'],
        info['__EMPTY_10'],
        info['__EMPTY_11'],
        info['__EMPTY_12'],
      ];
      tableFinal = Utils.checkData(valueTableFinal);
    }
    return key == '4skills' ? (
      <TableSkill dataTable={{ tableMidterm, tableFinal, key }} excel={excel} />
    ) : key == 'Toeic' ? (
      <TableSkill dataTable={{ tableMidterm, tableFinal, key }} excel={excel} />
    ) : (
      <ReplaceChart tableFinal={tableFinal} key={key} />
    );
  }

  return (
    <div style={{ maxHeight: '842px', width: '630px' }}>
      <Header classKey={classKey} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Sidebar info={info} classInfo={classInfo} classKey={classKey} />{' '}
        <div style={{ width: '370px', marginLeft: 22 }}>
          <div style={{}}>
            <div style={{ height: '707px', paddingRight: 30 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                {classKey === '4skills' ? (
                  <>
                    <Result
                      title={'Final test'}
                      text={'Bài thi cuối kỳ'}
                      score={
                        typeof info['__EMPTY_19'] === 'number'
                          ? info['__EMPTY_19']
                          : 0
                      }
                      src={imageTitle[0]}
                    />
                    <Result
                      title={'Assessment'}
                      text={'Đánh giá'}
                      score={info['__EMPTY_28']}
                      src={imageTitle[0]}
                    />
                    <Result
                      title={'Evaluation'}
                      text={'Định hướng'}
                      score={info['__EMPTY_29']}
                      src={imageTitle[0]}
                    />
                  </>
                ) : classKey === 'Ielts-fo-in' ? (
                  <>
                    <Result
                      title={'Final test'}
                      text={'Bài thi cuối kỳ'}
                      score={
                        typeof info['__EMPTY_13'] === 'number'
                          ? info['__EMPTY_13']
                          : 0
                      }
                      src={imageTitle[0]}
                      newKey={'check'}
                    />
                    <Result
                      title={'ACTFL LEVEL'}
                      text={'Đánh giá'}
                      score={info['__EMPTY_21']}
                      src={imageTitle[0]}
                    />
                    <Result
                      title={'Evaluation'}
                      text={'Định hướng'}
                      score={info['__EMPTY_22']}
                      src={imageTitle[0]}
                    />
                  </>
                ) : classKey === 'Toeic' ? (
                  <>
                    <Result
                      title={'Final test'}
                      text={'Bài thi cuối kỳ'}
                      score={
                        typeof info['__EMPTY_12'] === 'number'
                          ? info['__EMPTY_12']
                          : 0
                      }
                      src={imageTitle[0]}
                    />
                    <Result
                      title={'ACTFL LEVEL'}
                      text={'Trình độ ACTFL'}
                      score={info['__EMPTY_20']}
                      src={imageTitle[0]}
                    />
                    <Result
                      title={'Evaluation'}
                      text={'Định hướng'}
                      score={info['__EMPTY_21']}
                      src={imageTitle[0]}
                    />
                  </>
                ) : classKey === 'Ielts-ae' ? (
                  <>
                    <Result
                      title={'Final test'}
                      text={'Bài thi cuối kỳ'}
                      score={
                        typeof info['__EMPTY_12'] === 'number'
                          ? info['__EMPTY_12']
                          : 0
                      }
                      src={imageTitle[0]}
                      newKey={'check'}
                    />
                    <Result
                      title={'ACTFL LEVEL'}
                      text={'Trình độ ACTFL'}
                      score={info['__EMPTY_20']}
                      src={imageTitle[0]}
                    />
                    <Result
                      title={'Evaluation'}
                      text={'Định hướng'}
                      score={info['__EMPTY_21']}
                      src={imageTitle[0]}
                    />
                  </>
                ) : (
                  <>
                    <Result
                      title={'Final test'}
                      text={'Bài thi cuối kỳ'}
                      score={
                        typeof info['__EMPTY_12'] === 'number'
                          ? info['__EMPTY_12']?.toFixed(1)
                          : 0
                      }
                      src={imageTitle[0]}
                    />
                    <Result
                      title={'ACTFL LEVEL'}
                      text={'Trình độ ACTFL'}
                      score={info['__EMPTY_18']}
                      src={imageTitle[0]}
                    />
                    <Result
                      title={'Evaluation'}
                      text={'Định hướng'}
                      score={info['__EMPTY_19']}
                      src={imageTitle[0]}
                    />
                  </>
                )}
              </div>
              {/* chuyên cần */}
              <div style={{}}>
                <TitleCustom
                  src={imageTitle[1]}
                  title={'Attendance'}
                  text={'Chuyên cần'}
                />
                {classKey === '4skills' ? (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        margin: 7,
                      }}
                    >
                      <div style={{ textAlign: 'center', height: '86px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={
                              typeof info['__EMPTY_23'] === 'number'
                                ? info['__EMPTY_23']?.toFixed(3) * 100
                                : 0
                            }
                            styles={buildStyles({
                              rotation: 1.2,
                              textColor: '#09161e',
                              textSize: 11,
                              pathColor: '#cf2123',
                              trailColor: '#2e3192',
                              strokeLinecap: 'butt',
                            })}
                            strokeWidth={20}
                          >
                            <span style={{ fontSize: 10, fontWeight: '900' }}>
                              {typeof info['__EMPTY_23'] === 'number'
                                ? Utils.convertNumber(info['__EMPTY_23']) + '%'
                                : 0}
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <div
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 9,
                              fontWeight: '900',
                            }}
                          >
                            Traditional lecture
                          </div>
                          <p
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 5,
                              fontWeight: '600',
                            }}
                          ></p>
                          <p style={{ fontSize: 7 }}>Số buổi đi học</p>
                          <p style={{ fontSize: 7 }}>
                            {(typeof info['__EMPTY_21'] === 'number'
                              ? info['__EMPTY_21']
                              : 0) +
                              '/' +
                              (typeof info['__EMPTY_22'] === 'number'
                                ? info['__EMPTY_22']
                                : 0)}
                          </p>
                        </div>
                      </div>
                      <div style={{ textAlign: 'center', height: '86px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={
                              typeof info['__EMPTY_24'] === 'number'
                                ? info['__EMPTY_24']?.toFixed(3) * 100
                                : 0
                            }
                            styles={buildStyles({
                              rotation: 1.2,
                              textColor: '#09161e',
                              textSize: 11,
                              pathColor: '#cf2123',
                              trailColor: '#2e3192',
                              strokeLinecap: 'butt',
                            })}
                            strokeWidth={20}
                          >
                            <span style={{ fontSize: 10, fontWeight: '900' }}>
                              {typeof info['__EMPTY_24'] === 'number'
                                ? Utils.convertNumber(info['__EMPTY_24']) + '%'
                                : 0}
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <div
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 9,
                              fontWeight: '900',
                            }}
                          >
                            Active learning
                          </div>
                          <p style={{ fontSize: 7 }}>Học tập chủ động</p>
                          <p style={{ fontSize: 7 }}> Flipped & Homework </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : classKey === 'Ielts-fo-in' ? (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        margin: 7,
                      }}
                    >
                      <div style={{ textAlign: 'center', height: '86px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={
                              typeof info['__EMPTY_16'] === 'number'
                                ? info['__EMPTY_16']?.toFixed(3) * 100
                                : 0
                            }
                            styles={buildStyles({
                              rotation: 1.2,
                              textColor: '#09161e',
                              textSize: 11,
                              pathColor: '#cf2123',
                              trailColor: '#2e3192',
                              strokeLinecap: 'butt',
                            })}
                            strokeWidth={20}
                          >
                            <span style={{ fontSize: 10, fontWeight: '900' }}>
                              {typeof info['__EMPTY_16'] === 'number'
                                ? Utils.convertNumber(info['__EMPTY_16']) + '%'
                                : 0}
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <div
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 9,
                              fontWeight: '900',
                            }}
                          >
                            Traditional lecture
                          </div>
                          <p
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 5,
                              fontWeight: '600',
                            }}
                          ></p>
                          <p style={{ fontSize: 7 }}>Số buổi đi học</p>
                          <p style={{ fontSize: 7 }}>
                            {(typeof info['__EMPTY_14'] === 'number'
                              ? info['__EMPTY_14']
                              : 0) +
                              '/' +
                              (typeof info['__EMPTY_15'] === 'number'
                                ? info['__EMPTY_15']
                                : 0)}
                          </p>
                        </div>
                      </div>
                      <div style={{ textAlign: 'center', height: '86px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={
                              typeof info['__EMPTY_17'] === 'number'
                                ? info['__EMPTY_17']?.toFixed(3) * 100
                                : 0
                            }
                            styles={buildStyles({
                              rotation: 1.2,
                              textColor: '#09161e',
                              textSize: 11,
                              pathColor: '#cf2123',
                              trailColor: '#2e3192',
                              strokeLinecap: 'butt',
                            })}
                            strokeWidth={20}
                          >
                            <span style={{ fontSize: 10, fontWeight: '900' }}>
                              {typeof info['__EMPTY_17'] === 'number'
                                ? Utils.convertNumber(info['__EMPTY_17']) + '%'
                                : 0}
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <div
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 9,
                              fontWeight: '900',
                            }}
                          >
                            Active learning
                          </div>
                          <p style={{ fontSize: 7 }}>Học tập chủ động</p>
                          <p style={{ fontSize: 7 }}> Flipped & Homework </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : classKey === 'Toeic' ? (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        margin: 7,
                      }}
                    >
                      <div style={{ textAlign: 'center', height: '86px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={
                              typeof info['__EMPTY_15'] === 'number'
                                ? info['__EMPTY_15']?.toFixed(2) * 100
                                : 0
                            }
                            styles={buildStyles({
                              rotation: 1.2,
                              textColor: '#09161e',
                              textSize: 11,
                              pathColor: '#cf2123',
                              trailColor: '#2e3192',
                              strokeLinecap: 'butt',
                            })}
                            strokeWidth={20}
                          >
                            <span style={{ fontSize: 10, fontWeight: '900' }}>
                              {typeof info['__EMPTY_15'] === 'number'
                                ? Utils.convertNumber(info['__EMPTY_15']) + '%'
                                : 0}
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <div
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 9,
                              fontWeight: '900',
                            }}
                          >
                            Traditional lecture
                          </div>
                          <p
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 5,
                              fontWeight: '600',
                            }}
                          ></p>
                          <p style={{ fontSize: 7 }}>Số buổi đi học</p>
                          <p style={{ fontSize: 7 }}>
                            {(typeof info['__EMPTY_13'] === 'number'
                              ? info['__EMPTY_14']
                              : 0) +
                              '/' +
                              (typeof info['__EMPTY_13'] === 'number'
                                ? info['__EMPTY_14']
                                : 0)}
                          </p>
                        </div>
                      </div>
                      <div style={{ textAlign: 'center', height: '86px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={
                              typeof info['__EMPTY_16'] === 'number'
                                ? info['__EMPTY_16']?.toFixed(3) * 100
                                : 0
                            }
                            styles={buildStyles({
                              rotation: 1.2,
                              textColor: '#09161e',
                              textSize: 11,
                              pathColor: '#cf2123',
                              trailColor: '#2e3192',
                              strokeLinecap: 'butt',
                            })}
                            strokeWidth={20}
                          >
                            <span style={{ fontSize: 10, fontWeight: '900' }}>
                              {typeof info['__EMPTY_16'] === 'number'
                                ? Utils.convertNumber(info['__EMPTY_16']) + '%'
                                : 0}
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <div
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 9,
                              fontWeight: '900',
                            }}
                          >
                            Active learning
                          </div>
                          <p style={{ fontSize: 7 }}>Học tập chủ động</p>
                          <p style={{ fontSize: 7 }}> Flipped & Homework </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : classKey === 'Ielts-ae' ? (
                  <>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        margin: 7,
                      }}
                    >
                      <div style={{ textAlign: 'center', height: '86px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={
                              typeof info['__EMPTY_15'] === 'number'
                                ? info['__EMPTY_15']?.toFixed(3) * 100
                                : 0
                            }
                            styles={buildStyles({
                              rotation: 1.2,
                              textColor: '#09161e',
                              textSize: 11,
                              pathColor: '#cf2123',
                              trailColor: '#2e3192',
                              strokeLinecap: 'butt',
                            })}
                            strokeWidth={20}
                          >
                            <span style={{ fontSize: 10, fontWeight: '900' }}>
                              {typeof info['__EMPTY_15'] === 'number'
                                ? Utils.convertNumber(info['__EMPTY_15']) + '%'
                                : 0}
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <div
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 9,
                              fontWeight: '900',
                            }}
                          >
                            Traditional lecture
                          </div>
                          <p
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 5,
                              fontWeight: '600',
                            }}
                          ></p>
                          <p style={{ fontSize: 7 }}>Số buổi đi học</p>
                          <p style={{ fontSize: 7 }}>
                            {(typeof info['__EMPTY_13'] === 'number'
                              ? info['__EMPTY_13']
                              : 0) +
                              '/' +
                              (typeof info['__EMPTY_14'] === 'number'
                                ? info['__EMPTY_14']
                                : 0)}
                          </p>
                        </div>
                      </div>
                      <div style={{ textAlign: 'center', height: '86px' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                          }}
                        >
                          <CircularProgressbarWithChildren
                            value={
                              typeof info['__EMPTY_16'] === 'number'
                                ? info['__EMPTY_16']?.toFixed(3) * 100
                                : 0
                            }
                            styles={buildStyles({
                              rotation: 1.2,
                              textColor: '#09161e',
                              textSize: 11,
                              pathColor: '#cf2123',
                              trailColor: '#2e3192',
                              strokeLinecap: 'butt',
                            })}
                            strokeWidth={20}
                          >
                            <span style={{ fontSize: 10, fontWeight: '900' }}>
                              {typeof info['__EMPTY_16'] === 'number'
                                ? Utils.convertNumber(info['__EMPTY_16']) + '%'
                                : 0}
                            </span>
                          </CircularProgressbarWithChildren>
                        </div>
                        <div style={{ marginTop: 5 }}>
                          <div
                            style={{
                              textTransform: 'uppercase',
                              fontSize: 9,
                              fontWeight: '900',
                            }}
                          >
                            Active learning
                          </div>
                          <p style={{ fontSize: 7 }}>Học tập chủ động</p>
                          <p style={{ fontSize: 7 }}> Flipped & Homework </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              {/* quá trình học  */}
              <div style={{}}>
                <TitleCustom
                  src={imageTitle[2]}
                  title={'Test results'}
                  text={'Kết quả học tập'}
                />
                {renderLineChart()}
              </div>
              {/* bảng điểm */}
              <div style={{ marginTop: '15px' }}>
                {classKey === 'Ielts-ae' ? (
                  <TitleCustom
                    src={imageTitle[3]}
                    title={'Ielts band descriptors'}
                    text={'Thang điểm đánh giá IELTS'}
                  />
                ) : (
                  <TitleCustom
                    src={imageTitle[3]}
                    title={'Score details'}
                    text={'Điểm số chi tiết'}
                  />
                )}

                {renderTable()}
              </div>
            </div>
            <div style={{ height: '60px', paddingRight: 10, marginTop: 35 }}>
              <Footer info={info} classKey={classKey} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
