import { useEffect } from "react"

const useSetTitles = title => {
    useEffect(() => {
        document.title = `${title} - Home Food`;
    }, [title])
}

export default useSetTitles;