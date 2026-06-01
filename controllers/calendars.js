    // This file contains data for creating calendars
    // It is called from classes.ejs
    // this data could be read from a JSON file or database?
    const calendars = [
        // data for Kyoto Kita
        {
            year: "2026",month: "6",cal_1: "cal-木",cal_2: "cal-1", arrDates: [11,25], note: ""
        },
        {
            year: "2026",month: "7",cal_1: "cal-木",cal_2: "cal-2", arrDates: [30], note: ""
        },

        
        {
            year: "2026",month: "6",cal_1: "cal-金",cal_2: "cal-1", arrDates: [5,19], note: "＊両日ウィングス京都"
        },
        {
            year: "2026",month: "7",cal_1: "cal-金",cal_2: "cal-2", arrDates: [24], note: ""
        },

        {
            year: "2026",month: "6",cal_1: "cal-土",cal_2: "cal-1", arrDates: [13,27], note: ""
        },
        {
            year: "2026",month: "7",cal_1: "cal-土",cal_2: "cal-2", arrDates: [11,25], note: "25日ウィングス京都 土曜午前クラス 25日"
        },


        // data for Kyoto Asahi
        // now this is Gocomachi 
        {
            year: "2026",month: "6",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [20], note: ""
        },
        {
            year: "2026",month: "7",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [25], note: ""
        },

        // data for Kyoto JEUGIA
        {
            year: "2026",month: "6",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [26], note: ""
        },
        {
            year: "2026",month: "7",cal_1: "cal-2金",cal_2: "cal-2", arrDates: [24], note: ""
        },
        
        // data for Fukui Wednesday month classes
        {
            year: "2026",month: "6",cal_1: "cal-水",cal_2: "cal-1", arrDates: [3,17], note: ""
        },
        {
            year: "2026",month: "7",cal_1: "cal-水",cal_2: "cal-2", arrDates: [8,22], note: ""
        },

        // data for Fukui Newspaper classes
        {
            year: "2026",month: "6",cal_1: "cal-火",cal_2: "cal-1", arrDates: [2,16], note: ""
        },
        {
            year: "2026",month: "7",cal_1: "cal-火",cal_2: "cal-2", arrDates: [7,21], note: ""
        },

        // data for Fukui Sabae classes
        {
            year: "2026",month: "6",cal_1: "cal-月",cal_2: "cal-1", arrDates: [1,15], note: ""
        },
        {
            year: "2026",month: "7",cal_1: "cal-月",cal_2: "cal-2", arrDates: [6], note: ""
        },


    ];

module.exports = {
    calendars
};


