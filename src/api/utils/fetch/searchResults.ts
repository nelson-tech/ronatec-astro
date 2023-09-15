import type { Product } from "@/api/types"
import debounce from "lodash.debounce"

const fetchSearchResults = async (search: string) => {
  const response = await fetch(
    import.meta.env.PUBLIC_API_BASE +
      `/products?where%5Btitle%5D%5Blike%5D=${search}`
  )
  const productsData:
    | { errors: string[]; docs: Product[] | null | undefined }
    | null
    | undefined = await response.json()

  return productsData?.docs ?? null
}

function asyncDebounce<F extends (...args: any[]) => Promise<any>>(
  func: F,
  wait?: number
) {
  const resolveSet = new Set<(p: any) => void>()
  const rejectSet = new Set<(p: any) => void>()

  const debounced = debounce((args: Parameters<F>) => {
    func(...args)
      .then((...res) => {
        resolveSet.forEach((resolve) => resolve(...res))
        resolveSet.clear()
      })
      .catch((...res) => {
        rejectSet.forEach((reject) => reject(...res))
        rejectSet.clear()
      })
  }, wait)

  return (...args: Parameters<F>): ReturnType<F> =>
    new Promise((resolve, reject) => {
      resolveSet.add(resolve)
      rejectSet.add(reject)
      debounced(args)
    }) as ReturnType<F>
}

const getSearchResults = asyncDebounce(fetchSearchResults, 500)

export default getSearchResults
