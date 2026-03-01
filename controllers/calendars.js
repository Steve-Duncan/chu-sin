    // This file contains data for creating calendars
    // It is called from classes.ejs
    // this data could be read from a JSON file or database?
    const calendars = [
        // data for Kyoto Kita
        
        {
            year: "2026",month: "3",cal_1: "cal-木",cal_2: "cal-1", arrDates: [12,26], note: ""
        },
        {
            year: "2026",month: "4",cal_1: "cal-木",cal_2: "cal-2", arrDates: [9,23], note: ""
        },


        {
            year: "2026",month: "3",cal_1: "cal-金",cal_2: "cal-1", arrDates: [6], note: "＊ウィングス京都"
        },
        {
            year: "2026",month: "4",cal_1: "cal-金",cal_2: "cal-2", arrDates: [3,17], note: "＊3日ウィングス京都／17日オフィスゴコマチ"
        },

        
        {
            year: "2026",month: "3",cal_1: "cal-土",cal_2: "cal-1", arrDates: [14,28], note: ""
        },
                {
            year: "2026",month: "4",cal_1: "cal-土",cal_2: "cal-2", arrDates: [11,25], note: ""
        },


        // data for Kyoto Asahi
        // now this is Gocomachi 
        {
            year: "2026",month: "3",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [21], note: ""
        },
                {
            year: "2026",month: "4",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [18], note: ""
        },

        


        // data for Kyoto JEUGIA
        {
            year: "2026",month: "3",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [27], note: ""
        },
        {
            year: "2026",month: "4",cal_1: "cal-2金",cal_2: "cal-2", arrDates: [24], note: ""
        },


        
        // data for Fukui Wednesday month classes
        {
            year: "2026",month: "3",cal_1: "cal-水",cal_2: "cal-1", arrDates: [4,18], note: ""
        },
                {
            year: "2026",month: "4",cal_1: "cal-水",cal_2: "cal-2", arrDates: [8,22], note: ""
        },


        // data for Fukui Newspaper classes
        {
            year: "2026",month: "3",cal_1: "cal-火",cal_2: "cal-1", arrDates: [3,17], note: ""
        },
        {
            year: "2026",month: "4",cal_1: "cal-火",cal_2: "cal-2", arrDates: [7,21], note: ""
        },




        // data for Fukui Sabae classes
        {
            year: "2026",month: "3",cal_1: "cal-月",cal_2: "cal-1", arrDates: [2,16], note: ""
        },
        {
            year: "2026",month: "4",cal_1: "cal-月",cal_2: "cal-2", arrDates: [6,20], note: ""
        },


    ];

module.exports = {
    calendars
};


