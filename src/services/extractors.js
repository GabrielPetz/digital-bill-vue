class Extractors {

    constructor(data) {
        this.data = data;
    }

    extractDataToSelectFormat(idKey, textKey) {
        let optData = new Array();
        this.data.forEach((o) => {
            optData = optData.concat({
                id: o[idKey],
                text: o[textKey]
            });
        });
        return optData;
    }
 
    extractDataToHighchartsFormat(interval) {
        let options = {
            daily: this.extractDataByDailyResolution,
            _: () => { return "data" },
            undefined: () => { return "data" }
        }
        let [groupedExpenses, groupedCount] = options[interval](this.data)
        return [{
            name: 'Contagem de gastos',
            data: groupedCount,
            yAxis: 0,
            type: 'column',
            pointInterval: 1
        }, {
            name: 'Valor total',
            data: groupedExpenses,
            yAxis: 1,
            tooltip: {
                valuePrefix: "R$ ",
                valueDecimals: 2,
            },
            type: 'line',
        }]
    }

    extractDataByDailyResolution(data) {
        let expensesData = data.expenses;
        let startDate = new Date(Date.parse(expensesData.statistics.start_date));
        let endDate = new Date(Date.parse(expensesData.statistics.end_date));
        let expensesList = expensesData.all_expenses;
        let days = (endDate.getDate() - startDate.getDate()) + 1;
        let groupedExpenses = Array.apply(null, Array(days));
        let groupedCount = Array.apply(null, Array(days));
        let dayCounter = startDate;

        groupedExpenses.forEach((obj, index, full) => {
            let filtered = expensesList.filter(o => {
                let d = new Date(Date.parse(o.date));
                return d.getDate() === dayCounter.getDate();
            })

            // This sum can be achieved by two ways
            // This:     filtered.map(x => x.value).reduce((x, y) => x + y, 0);
            // And That: filtered.reduce((x, y) => x + y.value, 0);
            let daySum = filtered.reduce((x, y) => x + y.value, 0);
            let dayCount = filtered.length;

            full[index] = [dayCounter.valueOf(), daySum];
            groupedCount[index] = [dayCounter.valueOf(), dayCount];
            dayCounter.setDate(dayCounter.getDate() + 1);
        });
        return [groupedExpenses, groupedCount]
    }
}

export default Extractors;