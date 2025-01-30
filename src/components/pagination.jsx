import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({ currentPage, setCurrentPage, totalPages }) {


    const getItemProps = (index) =>
    ({
        variant: currentPage === index ? "filled" : "text",
        color: "gray",
        onClick: () => setCurrentPage(index),
        className: "rounded-full",
    });

    const next = () => {
        if (currentPage === totalPages) return;
        setCurrentPage(currentPage + 1);
    };

    const prev = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <Button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={prev}
                disabled={currentPage === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, index) => (
                    <IconButton key={index} {...getItemProps(index + 1)}>
                        {index + 1}
                    </IconButton>
                ))}
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={next}
                disabled={currentPage === totalPages}
            >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}