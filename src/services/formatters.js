const DateTimeFormatter = new Intl.DateTimeFormat(window.navigator.language, {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo'
});

const NumberFormatter = new Intl.NumberFormat(window.navigator.language, {
    style: 'currency',
    currency: 'BRL',
    useGrouping: true,
});

export function dateTimeFormat(date) {
    return DateTimeFormatter.format(date);
}

export function currencyFormat(value) {
    return NumberFormatter.format(value);
}
// export function NumberFormatter.format;
