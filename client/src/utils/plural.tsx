export function plural(value, variants = {}, locale = "ru-RU") {
    // Получаем фурму кодовой строкой: 'zero', 'one', 'two', 'few', 'many', 'other'
    // В русском языке 3 формы: 'one', 'few', 'many', и 'other' для дробных
    // В английском 2 формы: 'one', 'other'
    const key = new Intl.PluralRules(locale).select(value);
    // Возвращаем вариант по ключу, если он есть
    return variants[key] || "";
}
