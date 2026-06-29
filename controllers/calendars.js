    // This file contains data for creating calendars
    // It is called from classes.ejs
    // this data could be read from a JSON file or database?
    const calendars = [
        // data for Kyoto Kita
        {
            year: "2026",month: "7",cal_1: "cal-木",cal_2: "cal-1", arrDates: [30], note: ""
        },
        {
            year: "2026",month: "8",cal_1: "cal-木",cal_2: "cal-2", arrDates: [27], note: ""
        },

        {
            year: "2026",month: "7",cal_1: "cal-金",cal_2: "cal-1", arrDates: [24], note: ""
        },
        {
            year: "2026",month: "8",cal_1: "cal-金",cal_2: "cal-2", arrDates: [7,21], note: "＊21日ウィングス京都"
        },

        {
            year: "2026",month: "7",cal_1: "cal-土",cal_2: "cal-1", arrDates: [11,25], note: "25日ウィングス京都"
        },
        {
            year: "2026",month: "8",cal_1: "cal-土",cal_2: "cal-2", arrDates: [8,29], note: "＊29日ウィングス京都"
        },


        // data for Kyoto Asahi
        // now this is Gocomachi 
        {
            year: "2026",month: "7",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [25], note: ""
        },
        {
            year: "2026",month: "8",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [22], note: ""
        },

        // data for Kyoto JEUGIA
        {
            year: "2026",month: "7",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [24], note: ""
        },
        {
            year: "2026",month: "8",cal_1: "cal-2金",cal_2: "cal-2", arrDates: [28], note: ""
        },
        
        // data for Fukui Wednesday month classes
        {
            year: "2026",month: "7",cal_1: "cal-水",cal_2: "cal-1", arrDates: [8,22], note: ""
        },
        {
            year: "2026",month: "8",cal_1: "cal-水",cal_2: "cal-2", arrDates: [5,19], note: ""
        },

        // data for Fukui Newspaper classes
        {
            year: "2026",month: "7",cal_1: "cal-火",cal_2: "cal-1", arrDates: [7,21], note: ""
        },
        {
            year: "2026",month: "8",cal_1: "cal-火",cal_2: "cal-2", arrDates: [4,18], note: ""
        },

        // data for Fukui Sabae classes
        {
            year: "2026",month: "7",cal_1: "cal-月",cal_2: "cal-1", arrDates: [6], note: ""
        },
        {
            year: "2026",month: "8",cal_1: "cal-月",cal_2: "cal-2", arrDates: [3,17,31], note: ""
        },


    ];

module.exports = {
    calendars
};


