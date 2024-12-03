    // This file contains data for creating calendars
    // It is called from classes.ejs
    // this data could be read from a JSON file or database?
    const calendars = [
        // data for Kyoto Kita
        
        {
            year: "2024",month: "12",cal_1: "cal-木",cal_2: "cal-1", arrDates: [12,26], note: ""
        },
        {
            year: "2025",month: "1",cal_1: "cal-木",cal_2: "cal-2", arrDates: [9,23], note: ""
        },
        {
            year: "2024",month: "12",cal_1: "cal-金",cal_2: "cal-1", arrDates: [6,20], note: "※20日ウィングス京都"
        },
        {
            year: "2025",month: "1",cal_1: "cal-金",cal_2: "cal-2", arrDates: [17], note: ""
        },
        {
            year: "2024",month: "12",cal_1: "cal-土",cal_2: "cal-1", arrDates: [14], note: "※26日ウィングス京都"
        },
        {
            year: "2025",month: "1",cal_1: "cal-土",cal_2: "cal-2", arrDates: [11,25], note: "※両日ともウィングス京都"
        },
        // data for Kyoto Asahi
        {
            year: "2024",month: "12",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [21], note: ""
        },
        {
            year: "2025",month: "1",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [18], note: ""
        },
        // data for Kyoto JEUGIA
        {
            year: "2024",month: "12",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [27], note: ""
        },
        {
            year: "2025",month: "1",cal_1: "cal-2金",cal_2: "cal-2", arrDates: [24], note: ""
        },
        // data for Fukui Wednesmonth classes
        {
            year: "2024",month: "12",cal_1: "cal-水",cal_2: "cal-1", arrDates: [4,18], note: ""
        },
        {
            year: "2025",month: "1",cal_1: "cal-水",cal_2: "cal-2", arrDates: [7,21], note: "※6日は昼の部のみ"
        },
        // data for Fukui Newspaper classes
        {
            year: "2024",month: "12",cal_1: "cal-火",cal_2: "cal-1", arrDates: [3,17], note: ""
        },
        {
            year: "2025",month: "1",cal_1: "cal-火",cal_2: "cal-2", arrDates: [7,21], note: ""
        },
        // data for Fukui Sabae classes
        {
            year: "2024",month: "12",cal_1: "cal-月",cal_2: "cal-1", arrDates: [2,16], note: ""
        },
        {
            year: "2025",month: "1",cal_1: "cal-月",cal_2: "cal-2", arrDates: [6,20], note: ""
        },

    ];

module.exports = {
    calendars
};
