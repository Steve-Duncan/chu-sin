    // This file contains data for creating calendars
    // It is called from classes.ejs
    // this data could be read from a JSON file or database?
    const calendars = [
        // data for Kyoto Kita
        
        {
            year: "2025",month: "4",cal_1: "cal-木",cal_2: "cal-1", arrDates: [10,24], note: ""
        },
        {
            year: "2025",month: "5",cal_1: "cal-木",cal_2: "cal-2", arrDates: [8,22], note: ""
        },


        {
            year: "2025",month: "4",cal_1: "cal-金",cal_2: "cal-1", arrDates: [4,18], note: "＊18日ウィングス京都"
        },
        {
            year: "2025",month: "5",cal_1: "cal-金",cal_2: "cal-2", arrDates: [2,16], note: "＊16日ウィングス京都"
        },

        
        {
            year: "2025",month: "4",cal_1: "cal-土",cal_2: "cal-1", arrDates: [12,26], note: ""
        },
        {
            year: "2025",month: "5",cal_1: "cal-土",cal_2: "cal-2", arrDates: [10,24], note: "＊24日ウィングス京都"
        },

        
        // data for Kyoto Asahi
        {
            year: "2025",month: "4",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [19], note: ""
        },
        {
            year: "2025",month: "5",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [17], note: ""
        },

        
        // data for Kyoto JEUGIA
        {
            year: "2025",month: "4",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [25], note: ""
        },
        {
            year: "2025",month: "5",cal_1: "cal-2金",cal_2: "cal-2", arrDates: [23], note: ""
        },

        
        
        // data for Fukui Wednesday month classes
        {
            year: "2025",month: "4",cal_1: "cal-水",cal_2: "cal-1", arrDates: [2,16], note: "＊両日とも昼の部のみ"
        },
        {
            year: "2025",month: "5",cal_1: "cal-水",cal_2: "cal-2", arrDates: [21], note: "＊昼の部のみ"
        },
        
        
        // data for Fukui Newspaper classes
        {
            year: "2025",month: "4",cal_1: "cal-火",cal_2: "cal-1", arrDates: [1,15], note: ""
        },
        {
            year: "2025",month: "5",cal_1: "cal-火",cal_2: "cal-2", arrDates: [20], note: ""
        },


        
        
        // data for Fukui Sabae classes
        {
            year: "2025",month: "4",cal_1: "cal-月",cal_2: "cal-1", arrDates: [14], note: ""
        },
        {
            year: "2025",month: "5",cal_1: "cal-月",cal_2: "cal-2", arrDates: [19], note: "＊両日とも昼の部のみ"
        },
    
    ];

module.exports = {
    calendars
};


