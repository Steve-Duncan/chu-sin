    // This file contains data for creating calendars
    // It is called from classes.ejs
    // this data could be read from a JSON file or database?
    const calendars = [
        // data for Kyoto Kita
        
        {
            year: "2025",month: "6",cal_1: "cal-木",cal_2: "cal-1", arrDates: [12,26], note: ""
        },
        {
            year: "2025",month: "7",cal_1: "cal-木",cal_2: "cal-2", arrDates: [10,24], note: ""
        },

        {
            year: "2025",month: "6",cal_1: "cal-金",cal_2: "cal-1", arrDates: [6,20], note: "＊6日ウィングス京都"
        },
        {
            year: "2025",month: "7",cal_1: "cal-金",cal_2: "cal-2", arrDates: [18], note: "＊18日ウィングス京都"
        },
        
        {
            year: "2025",month: "6",cal_1: "cal-土",cal_2: "cal-1", arrDates: [14,28], note: "＊28日ウィングス京都"
        },
        {
            year: "2025",month: "7",cal_1: "cal-土",cal_2: "cal-2", arrDates: [12,26], note: "＊12日ウィングス京都"
        },



        
        // data for Kyoto Asahi
        {
            year: "2025",month: "6",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [21], note: ""
        },
        {
            year: "2025",month: "7",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [19], note: ""
        },




        
        // data for Kyoto JEUGIA
        {
            year: "2025",month: "6",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [27], note: ""
        },
        {
            year: "2025",month: "7",cal_1: "cal-2金",cal_2: "cal-2", arrDates: [25], note: ""
        },



        
        
        // data for Fukui Wednesday month classes
        {
            year: "2025",month: "6",cal_1: "cal-水",cal_2: "cal-1", arrDates: [4,18], note: "＊両日とも昼の部のみ"
        },
        {
            year: "2025",month: "7",cal_1: "cal-水",cal_2: "cal-2", arrDates: [2,16], note: "＊両日とも昼のみ"
        },


        
        
        // data for Fukui Newspaper classes
        {
            year: "2025",month: "6",cal_1: "cal-火",cal_2: "cal-1", arrDates: [3,17], note: ""
        },
        {
            year: "2025",month: "7",cal_1: "cal-火",cal_2: "cal-2", arrDates: [1,15], note: ""
        },




        
        
        // data for Fukui Sabae classes
        {
            year: "2025",month: "6",cal_1: "cal-月",cal_2: "cal-1", arrDates: [2,16,30], note: ""
        },
        {
            year: "2025",month: "7",cal_1: "cal-月",cal_2: "cal-2", arrDates: [14], note: ""
        },


    
    ];

module.exports = {
    calendars
};


