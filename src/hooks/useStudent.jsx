import { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"

const useStudent = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: isStudent, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user.email}`)
            return res.data.instructor;
        }
    })
    return [isStudent, isInstructorLoading]
}

export default useStudent;