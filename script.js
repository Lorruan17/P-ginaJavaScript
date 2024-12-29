const apiUrl = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";

async function fetchCurrencyData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Atualiza os valores no HTML
        document.getElementById("usd").textContent = `Dólar (USD/BRL): Compra ${data.USDBRL.bid}, Venda ${data.USDBRL.ask}`;
        document.getElementById("eur").textContent = `Euro (EUR/BRL): Compra ${data.EURBRL.bid}, Venda ${data.EURBRL.ask}`;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        document.getElementById("usd").textContent = "Erro ao carregar USD";
        document.getElementById("eur").textContent = "Erro ao carregar EUR";
    }
}

// Chama a função ao carregar a página
fetchCurrencyData();
