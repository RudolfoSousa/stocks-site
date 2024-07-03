import { getStock } from "@/app/actions";
import Card, { CardContent, CardHeader } from "@/app/components/shared/Card";
import Container from "@/app/components/shared/Container";
import styles from './styles.module.css'
import StockContentList from "./components/StockContentList/StockContentList";
import StockContentItem from "./components/StockContentItem/StockContentItem";
import Collection from "@/app/components/Collection";
import convertAvailableSectors from "@/utils/convertAvailableSectors";

export default async function Page({ params }) {
  const data = await getStock({ tickers: params.stock });
  const { shortName, regularMarketPrice, regularMarketChangePercent, fiftyTwoWeekLow, fiftyTwoWeekHigh, summaryProfile } = data.results[0];
  return (
    <main>
      <Container>
        <div className={styles.CardWrapper}>
          <Card>
            <CardHeader>
              <h1>{params.stock}</h1>
              <h2 className={styles.ShortName}>{shortName}</h2>
            </CardHeader>
            <CardContent>
              <StockContentList>
                {regularMarketPrice && (
                  <StockContentItem
                    text="Preço"
                    priceProps={{
                      close: regularMarketPrice,
                      change: regularMarketChangePercent,
                      size: "large"
                    }}
                  />
                )}
                {fiftyTwoWeekLow && (
                  <StockContentItem
                    text="Min. 52 semanas"
                    priceProps={{
                      close: fiftyTwoWeekLow,
                      size: "medium"
                    }}
                  />
                )}
                {fiftyTwoWeekHigh && (
                  <StockContentItem
                    text="Máx. 52 semanas"
                    priceProps={{
                      close: fiftyTwoWeekHigh,
                      size: "medium"
                    }}
                  />
                )}
                <StockContentItem
                  text="P/vp"
                  priceProps={{
                    close: 1,
                    size: "medium"
                  }}
                />
                <StockContentItem
                  text="Patrimônio Líquido"
                  priceProps={{
                    close: 400,
                    size: "medium"
                  }}
                />
              </StockContentList>
            </CardContent>
          </Card>
        </div>
        {summaryProfile && summaryProfile.sector && (
          <Collection heading="Fundos Relacionados" sector={convertAvailableSectors(summaryProfile.sector)} />
        )}
      </Container>
    </main>
  );
}
