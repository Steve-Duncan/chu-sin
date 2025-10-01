    // This file contains data for creating calendars
    // It is called from classes.ejs
    // this data could be read from a JSON file or database?
    const calendars = [
        // data for Kyoto Kita
        
        {
            year: "2025",month: "10",cal_1: "cal-木",cal_2: "cal-1", arrDates: [16,30], note: "16日の昼の部のみウィングス京都"
        },
                {
            year: "2025",month: "11",cal_1: "cal-木",cal_2: "cal-2", arrDates: [13,27], note: ""
        },


        {
            year: "2025",month: "10",cal_1: "cal-金",cal_2: "cal-1", arrDates: [3,17], note: "＊両日ともウィングス京都"
        },
                {
            year: "2025",month: "11",cal_1: "cal-金",cal_2: "cal-2", arrDates: [7,21], note: "＊21日ウィングス京都"
        },

        
        {
            year: "2025",month: "10",cal_1: "cal-土",cal_2: "cal-1", arrDates: [25], note: "＊ウィングス京都"
        },
                {
            year: "2025",month: "11",cal_1: "cal-土",cal_2: "cal-2", arrDates: [8,22], note: "＊両日ともウィングス京都"
        },




        
        // data for Kyoto Asahi
        // now this is Gocomachi 
        {
            year: "2025",month: "10",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [18], note: ""
        },
        {
            year: "2025",month: "11",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [15], note: ""
        },

        
        // data for Kyoto JEUGIA
        {
            year: "2025",month: "10",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [24], note: ""
        },
        {
            year: "2025",month: "11",cal_1: "cal-2金",cal_2: "cal-2", arrDates: [28], note: ""
        },

        
        // data for Fukui Wednesday month classes
        {
            year: "2025",month: "10",cal_1: "cal-水",cal_2: "cal-1", arrDates: [8,22], note: ""
        },
        {
            year: "2025",month: "11",cal_1: "cal-水",cal_2: "cal-2", arrDates: [5,19], note: ""
        },


        // data for Fukui Newspaper classes
        {
            year: "2025",month: "10",cal_1: "cal-火",cal_2: "cal-1", arrDates: [7,21], note: ""
        },
                {
            year: "2025",month: "11",cal_1: "cal-火",cal_2: "cal-2", arrDates: [4,18], note: ""
        },


        // data for Fukui Sabae classes
        {
            year: "2025",month: "10",cal_1: "cal-月",cal_2: "cal-1", arrDates: [6,20], note: ""
        },
        {
            year: "2025",month: "11",cal_1: "cal-月",cal_2: "cal-2", arrDates: [17], note: ""
        },


    
    ];

module.exports = {
    calendars
};


