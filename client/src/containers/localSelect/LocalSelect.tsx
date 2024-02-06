import { useMemo } from "react";
import LangSelect from "../../components/langSelect/LangSelect";

interface ILanguageOption {
    value: string;
    title: string;
}

interface IOptions {
    lang: ILanguageOption[];
}

function LocalSelect() {
    const options: IOptions = {
        lang: useMemo(
            () => [
                { value: "ru", title: "Русский" },
                { value: "en", title: "English" },
                { value: "fr", title: "Français" },
                { value: "de", title: "Deutsch" },
                { value: "zh", title: "中國人" },
            ],
            []
        ),
    };

    return <LangSelect options={options.lang} />;
}

export default LocalSelect;
