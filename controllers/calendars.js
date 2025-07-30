    // This file contains data for creating calendars
    // It is called from classes.ejs
    // this data could be read from a JSON file or database?
    const calendars = [
        // data for Kyoto Kita
        
        {
            year: "2025",month: "8",cal_1: "cal-木",cal_2: "cal-1", arrDates: [7,28], note: ""
        },
                {
            year: "2025",month: "9",cal_1: "cal-木",cal_2: "cal-2", arrDates: [11,25], note: ""
        },


        {
            year: "2025",month: "8",cal_1: "cal-金",cal_2: "cal-1", arrDates: [1,22], note: "＊1日ウィングス京都"
        },
                {
            year: "2025",month: "9",cal_1: "cal-金",cal_2: "cal-2", arrDates: [5,19], note: "＊19日ウィングス京都"
        },

        
        {
            year: "2025",month: "8",cal_1: "cal-土",cal_2: "cal-1", arrDates: [9,23], note: ""
        },
                {
            year: "2025",month: "9",cal_1: "cal-土",cal_2: "cal-2", arrDates: [6,27], note: "＊27日ウィングス京都"
        },



        
        // data for Kyoto Asahi
        {
            year: "2025",month: "8",cal_1: "cal-3土",cal_2: "cal-1", arrDates: [30], note: ""
        },
                {
            year: "2025",month: "9",cal_1: "cal-3土",cal_2: "cal-2", arrDates: [20], note: ""
        },


        
        // data for Kyoto JEUGIA
        {
            year: "2025",month: "8",cal_1: "cal-2金",cal_2: "cal-1", arrDates: [22], note: ""
        },
                {
            year: "2025",month: "9",cal_1: "cal-2金",cal_2: "cal-2", arrDates: [26], note: ""
        },


        
        
        // data for Fukui Wednesday month classes
        {
            year: "2025",month: "8",cal_1: "cal-水",cal_2: "cal-1", arrDates: [6,20], note: "＊両日とも昼のみ"
        },
                {
            year: "2025",month: "9",cal_1: "cal-水",cal_2: "cal-2", arrDates: [3,17], note: ""
        },


        
        // data for Fukui Newspaper classes
        {
            year: "2025",month: "8",cal_1: "cal-火",cal_2: "cal-1", arrDates: [5,19], note: ""
        },
                {
            year: "2025",month: "9",cal_1: "cal-火",cal_2: "cal-2", arrDates: [2,16], note: ""
        },


        
        // data for Fukui Sabae classes
        {
            year: "2025",month: "8",cal_1: "cal-月",cal_2: "cal-1", arrDates: [4,18], note: ""
        },
                {
            year: "2025",month: "9",cal_1: "cal-月",cal_2: "cal-2", arrDates: [1], note: ""
        },

    
    ];

module.exports = {
    calendars
};


