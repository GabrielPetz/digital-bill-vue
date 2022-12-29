const DateTimeFormatter = new Intl.DateTimeFormat(window.navigator.language, {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo'
});

const CurrencyFormatter = new Intl.NumberFormat(window.navigator.language, {
    style: 'currency',
    currency: 'BRL',
    useGrouping: true,
});

const DecimalFormatter = new Intl.NumberFormat(window.navigator.language, {
    style: 'decimal',
    useGrouping: true,
});

const IntegerFormatter = new Intl.NumberFormat(window.navigator.language, {
    style: 'decimal',
    useGrouping: true,
    maximumFractionDigits: 0,
});

const PercentageFormatter = new Intl.NumberFormat(window.navigator.language, {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

class Formatters {
    static dateTimeFormat(date) {
        return DateTimeFormatter.format(date);
    }
    static currencyFormat(value) {        
        return CurrencyFormatter.format(value);
    }
    static decimalFormat(value) {
        return DecimalFormatter.format(value);
    }    
    static integerFormat(value) {
        return IntegerFormatter.format(value);
    }
    static percentageFormat(value) {
        return PercentageFormatter.format(value);
    }
}

export default Formatters;