import { IItem } from "../types/catalogTypes";

export function getTotalComments(article: IItem) {
    let count = 0;

    if (article && article.comments) {
        article.comments.map((item) => {
            count++;
            if (item.responses) {
                count += item.responses.length;
            }
        });
    }

    return count;
}
