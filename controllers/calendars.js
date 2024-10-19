    // This file contains data for creating calendars
    // It is called from controller.js
    // this data could be read from a file or database?
    const calendars = [
        // data for Kyoto Kita
        {
            year: "2024",month: "10",cal_1: "cal-木",cal_2: "cal-1", arrDates: [10,24], note: ""
        },
        {
            year: "2024",month: "11",cal_1: "cal-木",cal_2: "cal-2", arrDates: [14,28], note: "※28日は昼、夜ともに ウィングス京都"
        },
        {
            year: "2024",month: "10",cal_1: "cal-金",cal_2: "cal-1", arrDates: [4,18], note: "※両日ともウィングス京都"
        },
        {
            year: "2024",month: "11",cal_1: "cal-金",cal_2: "cal-2", arrDates: [1,15], note: "※両日ともウィングス京都"
        },
        {
            year: "2024",month: "10",cal_1: "cal-土",cal_2: "cal-1", arrDates: [12,26], note: "※26日ウィングス京都"
        },
        {
            year: "2024",month: "11",cal_1: "cal-土",cal_2: "cal-2", arrDates: [9,30], note: "※両日ともウィングス京都"
        },
        // data for Kyoto Asahi
        {
            year: "2024",month: "10",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [19], note: ""
        },
        {
            year: "2024",month: "11",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [16], note: ""
        },
        // data for Kyoto JEUGIA
        {
            year: "2024",month: "10",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [25], note: ""
        },
        {
            year: "2024",month: "11",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [22], note: ""
        },
        // data for Fukui Wednesmonth classes
        {
            year: "2024",month: "10",cal_1: "cal-水",cal_2: "cal-1", arrDates: [2,16], note: ""
        },
        {
            year: "2024",month: "11",cal_1: "cal-水",cal_2: "cal-2", arrDates: [6,20], note: "※6日は昼の部のみ"
        },
        // data for Fukui Newspaper classes
        {
            year: "2024",month: "10",cal_1: "cal-火",cal_2: "cal-1", arrDates: [1,15], note: ""
        },
        {
            year: "2024",month: "11",cal_1: "cal-火",cal_2: "cal-2", arrDates: [5,19], note: ""
        },
        // data for Fukui Sabae classes
        {
            year: "2024",month: "10",cal_1: "cal-月",cal_2: "cal-1", arrDates: [21], note: ""
        },
        {
            year: "2024",month: "11",cal_1: "cal-月",cal_2: "cal-2", arrDates: [18], note: ""
        },

    ];

module.exports = {
    calendars
};
