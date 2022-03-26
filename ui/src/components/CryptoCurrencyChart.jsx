import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

export default function CryptoCurrencyChart() {
    return (
        <>
            <CryptoCurrencyMarket colorTheme="light" width="100%" height={300} />
            {/* <CryptoCurrencyMarket colorTheme="light" autosize /> */}
        </>
    )
}