import CatalogPerPageSelector from "../../components/itemsPerPageSelector/CatalogPerPageSelector";
import PageNavigation from "../../components/pageNavigation/PageNavigation";

interface IPaginationFilterProps {
    currentPage: number;
    pagesArr: (number | string)[];
    openNewPage: (currentPage: number) => void;
    value: number;
    changeLimitItems: (newLimit: number) => void;
    abc: (currentPage: number) => void;
}

function PaginationFilter({
    currentPage,
    pagesArr,
    openNewPage,
    value,
    changeLimitItems,
    abc,
}: IPaginationFilterProps) {
    return (
        <div
            className="PaginationFilter"
            style={{
                padding: "0 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
            }}
        >
            <CatalogPerPageSelector
                value={value}
                changeLimitItems={changeLimitItems}
            />
            <PageNavigation
                currentPage={currentPage}
                pagesArr={pagesArr}
                openNewPage={openNewPage}
                abc={abc}
            />
        </div>
    );
}

export default PaginationFilter;
