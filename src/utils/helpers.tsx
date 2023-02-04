import { IProduct } from "../types/globaltypes.types"

export const formatPrice = (number: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(number / 100)
}
export const getUniqueValues = (data: any, type: string) => {
    let unique = data.map((item: any) => item[type])
    if (type == "colors") {
        unique = unique.flat()
    }
    return ["all", ...new Set(unique)]
}

