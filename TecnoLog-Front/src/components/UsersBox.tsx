import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";
import userService, { type IUser } from "../services/userService";
import type { IPagination } from "../services/api";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    const [data, setData] = useState<IUser[]>();

    const handleUsers = async () => {
        try {
            const response = await userService.getPaginated({
                search, page: pagination.page, size: pagination.pageSize
            });

            setData(response.paginatedItems);
            setPagination(response.pagination);
        } catch (error: any) {
            navigate("/");
        }
    }

    useEffect(() => {
        setPagination({ ...pagination, page: 1 })
    }, [search])

    useEffect(() => {
        handleUsers();
    }, [pagination.page, search])

    return (
        <div className="flex flex-col w-full items-center justify-center h-full">
            <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-6 p-6 w-full ">
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