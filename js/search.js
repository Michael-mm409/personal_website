function handleSearchEngineSelection() {
    const searchForm = document.getElementById('search-form');
    const searchEngineSelect = document.getElementById('search-engine');
    const searchEngineLogo = document.getElementById('search-engine-logo');
    const searchInput = document.getElementById('search-input');

    searchEngineSelect.addEventListener('change', function() {
        const selectedEngine = searchEngineSelect.value;
        searchForm.action = selectedEngine;

        let logoSrc;
        let placeholderText;
        let logoAltText;

        switch (selectedEngine) {
            case 'https://search.brave.com/search':
                logoSrc = 'images/services/email/brave_logo.webp';
                placeholderText = 'Search Brave...';
                logoAltText = 'Brave Browser Logo';
                break;
            case 'https://www.google.com.au/search':
                logoSrc = 'images/services/email/google_logo.png';
                placeholderText = 'Search Google...';
                logoAltText = 'Google Logo';
                break;
            case 'https://bing.com/search':
                logoSrc = 'images/services/email/bing_logo.png';
                placeholderText = 'Search Bing...';
                logoAltText = 'Bing Logo'
                break;
            case 'https://search.yahoo.com/search':
                logoSrc = 'images/services/email/yahoo_logo.png';
                placeholderText = 'Search Yahoo...';
                logoAltText = 'Yahoo Logo';
                break;
            case 'https://duckduckgo.com':
                logoSrc = 'images/services/email/duckduckgo_logo.png';
                placeholderText = 'Search DuckDuckGo...';
                logoAltText = 'Duck Duck Go Logo';
                break;
            case 'https://www.ecosia.org/search':
                logoSrc = 'images/services/email/ecosia_logo.png';
                placeholderText = 'Search Ecosia...';
                logoAltText = 'Ecosia Logo';
                break;
            default:
                logoSrc = 'images/services/email/brave_logo.webp';
                placeholderText = 'Search Brave...';
                logoAltText = 'Brave Browser Logo';
        }

        searchEngineLogo.src = logoSrc;
        searchInput.placeholder = placeholderText;
        searchEngineLogo.alt = logoAltText;
    });
};

document.addEventListener('DOMContentLoaded', handleSearchEngineSelection);