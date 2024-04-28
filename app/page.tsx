"use client";

import { DataTable } from "./_components/data_table";
import { useDataFetching } from "./_hooks/useDataFetching";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function HomePage() {
    const { data, columns } = useDataFetching();
    const [isSelected, setIsSelected] = useState({ id: "" });
    //  : Create the feature for selecting rows in DataTable
    // const { rowSelection, setRowSelection } = useRowSelection();

    return (
        <div className="flex flex-col gap-10 items-center p-10">
            <span className="text-3xl text-gray-700 font-bold">Task Details</span>
            <div className="max-w-screen-lg flex size-full flex-col">
                <DataTable
                    columns={[
                        {
                            header: () => <Checkbox />,
                            accessorKey: "checkbox",
                            cell: ({ row }) => (
                                <div className="w-200">
                                    <Checkbox />
                                </div>
                            ),
                        },
                        ...columns,
                    ]}
                    data={data}
                />
            </div>
        </div>
    );
}
