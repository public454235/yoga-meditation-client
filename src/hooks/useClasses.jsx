import { useContext } from "react"
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../providers/AuthProvider"

const useClasses = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/class/${user.email}`)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useClasses;