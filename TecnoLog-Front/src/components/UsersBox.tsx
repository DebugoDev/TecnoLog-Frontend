import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";
import userService, { type IUser } from "../services/userService";
import type { IPagination } from "../services/api";

interface UsersBoxProps {
    search: string
}

const UsersBox: React.FC<UsersBoxProps> = ({ search }) => {

    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        pageSize: 12,
        totalPages: 1,
        totalItems: 0,
        hasPreviousPage: false,
        hasNextPage: false
    });

    const [data, setData] = useState<IUser[]>();

    const handleUsers = async () => {

        console.log(pagination.pageSize)

        const response = await userService.getPaginated({
            search, page: pagination.page, size: pagination.pageSize
        });

        setData(response.paginatedItems);
        setPagination(response.pagination);
    }

    useEffect(() => {
        setPagination({ ...pagination, page: 1 })
    }, [search])

    useEffect(() => {
        handleUsers();
    }, [pagination.page, search])

    return (
        <div className="flex flex-col w-full items-center justify-center h-full">
            <div className="grid grid-cols-4 gap-6 p-6 w-full ">
                {data?.map((user, index) => (
                    <UserCard
                        key={index}
                        {...user}
                    />
                ))}
            </div>
            <Pagination
                pagination={pagination}
                onPageChange={(page) => setPagination({ ...pagination, page })}
            />
        </div>
    );
};

export default UsersBox;
