import Image from "next/image"
import { Bookmark } from "lucide-react"

export function NewsCard() {
    return (
        <div className="max-w-sm rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                    src="/images/stock-market.jpg" // Örnek görsel, senin proje yoluna göre değiştir
                    alt="Stock market"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="mt-4 space-y-2">
                <p className="text-xs font-semibold text-blue-600 uppercase">Category</p>
                <h3 className="text-lg font-semibold leading-snug text-gray-900">
                    Apple Stock Slips As Tim Cook Says He Expects $900 Million Q2 Tariff Hit
                </h3>
                <p className="text-sm text-gray-500">
                    The S&P 500 saw a significant rise today as economic optimism...
                </p>
            </div>
            <div className="mt-3 flex justify-end">
                <Bookmark className="h-4 w-4 text-gray-400 hover:text-black cursor-pointer" />
            </div>
        </div>
    )
}
