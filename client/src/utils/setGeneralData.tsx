export function setGeneralData(data: Date) {
    const date = new Date(data);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    const optionsTime = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    };

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

    return `${formattedDate} ${formattedTime}`;
}
